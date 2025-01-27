import React, { useState } from 'react';
import { Form, Upload, Button, Input, message, Row, Col, Divider  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { storage, textDB } from '../../../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore';

const AdminTech = () => {
  const [fileList, setFileList] = useState([]);
  const [inputs, setInputs] = useState({ id: '', label: '' });

  const handleChange = ({ fileList }) => setFileList(fileList.slice(-1)); // Accept only one image at a time

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Check if the id already exists
      const q = query(collection(textDB, 'teckstack'), where('id', '==', inputs.id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        message.error(`ID ${inputs.id} already exists!`);
        return;
      }

      const docRef = await addDoc(collection(textDB, 'teckstack'), {
        id: inputs.id,
        labelVal: inputs.label
      });

      if (fileList.length > 0) {
        const file = fileList[0];
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);

        uploadTask.on(
          'state_changed',
          snapshot => {},
          error => {
            console.error('Upload failed:', error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('File available at', downloadURL);
            await updateDoc(doc(textDB, 'teckstack', docRef.id), {
              imageURL: downloadURL
            });
            message.success('Uploaded successfully!');

            // Reset inputs and file list
            setInputs({ id: '', label: '' });
            setFileList([]);
          }
        );
      } else {
        message.error('Please upload an image.');
      }
    } catch (error) {
      console.error('Error adding document: ', error);
      message.error('Upload failed: ' + error.message);
    }
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', background: '#f7f7f7', borderRadius: '8px' }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Form.Item label="Upload Image" style={{ textAlign: 'center' }}>
            <Upload
              action={null}
              listType="picture-card"
              fileList={fileList}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : <div><PlusOutlined /><div style={{ marginTop: 8 }}>Upload</div></div>}
            </Upload>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="ID" style={{ marginBottom: '12px' }}>
            <Input
              name="id"
              type="number"
              placeholder="Enter ID"
              value={inputs.id}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Label" style={{ marginBottom: '12px' }}>
            <Input
              name="label"
              placeholder="Enter Label"
              value={inputs.label}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item style={{ marginTop: '24px' }}>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Save
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left" plain>Item&apos;s uploaded: </Divider>
      {
        
      }
    </Form>
  );
};

export default AdminTech;
