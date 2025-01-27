import React, { useState, useEffect } from 'react'

// Libraries:
import { Form, Input, Button, Space, DatePicker } from 'antd'
const { TextArea } = Input;
import { useSelector } from 'react-redux'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

// Firebase:
import { app } from '../../../firebaseConfig'
import { getDatabase, ref, set } from 'firebase/database'
import dayjs from 'dayjs';

// Styles:
import './admin-hero.scss'

const AdminHero = () => {
  const { portfolioData } = useSelector((state) => state.root)
  const [currYear, setCurrYear] = useState(null);

  useEffect(() => { 
    if (portfolioData?.hero?.yearCreated) { 
      const date = dayjs().set('year', portfolioData.hero.yearCreated); // Set year without changing other properties 
      setCurrYear(date);
    } 
  }, [portfolioData]);
  
  if(!portfolioData) {
    return <p>Loading...</p>
  }

  const data = portfolioData[0]?.content.hero;

  const handleYear = (date, dateString) => { 
    setCurrYear(Number(dateString));
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  const initialValues = {
    ...data,
    yearCreated: currYear,
  }

  const overwriteData = async (values) => {
    const db = getDatabase(app);
    const newDocRef = ref(db, "portfolio/user/-OHNL98iR7GtZxC-2I9A/content/hero");

    set(newDocRef, {...values, yearCreated: currYear})
      .then( () => {
        alert('data saved successfully')
      }).catch((error) => {
        alert('error: ', error.message)
    })
  };
  
  return (
    <Form
      onFinish={overwriteData}
      autoComplete="off"
      labelCol={{ flex: '150px' }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
      style={{ padding: '2rem 3rem', maxWidth: 900 }}
      {...formItemLayout}
      initialValues={initialValues}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input placeholder="First Name" />
      </Form.Item>
      <Form.Item 
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your Last name!' }]}
      >
        <Input placeholder="Last Name" />
      </Form.Item>
      <Form.Item
        label="Welcome Text"
        name="welcomeText"
        rules={[{ required: true, message: 'Please input your Welcome Text!' }]}
      >
        <Input placeholder="Welcome Text" />
      </Form.Item>
      <Form.Item 
          label="Caption"
          name="caption"
          rules={[{ required: true, message: 'Please input your Caption!' }]}
        >
        <Input placeholder="Caption" maxLength='10' />
      </Form.Item>
      <Form.Item 
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input your Description!' }]}
      >
        <TextArea
          placeholder="Description"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
      </Form.Item>
      <Form.Item 
        label="Year"
        name="yearCreated"
        rules={[{ required: true, message: 'Please input your Year!' }]}
      >
        <DatePicker 
          onChange={handleYear} 
          picker="year"
          value={currYear}
        />
      </Form.Item>
      <Form.Item label='Socials'>
        <Form.List 
          name="socials"
          htmlFor={null}
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'label']}
                    rules={[{ required: true, message: 'Missing label' }]}
                  >
                    <Input placeholder="Label" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'link']}
                    rules={[{ required: true, message: 'Missing link' }]}
                  >
                    <Input placeholder="Link" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item  style={{ width: '100%' }} >
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Social
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AdminHero
