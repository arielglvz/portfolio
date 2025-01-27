import React, { useEffect, useState } from 'react'
import { storage, textDB, database } from '../../../firebaseConfig'; // Import the database
import { v4 } from 'uuid'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { ref as dbRef, set } from 'firebase/database'; // Import database reference and set functions

const AdminTech = () => {
  const [label, setLabel] = useState('')
  const [image, setImage] = useState('')
  const [fileList, setFileList] = useState([])

  const handleUpload = (e) => {
    const imgs = ref(storage, `Imgs/${v4()}`)
    uploadBytes(imgs, e.target.files[0]).then(data => {
      getDownloadURL(data.ref).then(val => {
        setImage(val)
      })
    })
  }

  const handleSubmit = async () => {
    const isLabelEmpty = !label;
    const isImageEmpty = !image;
  
    if (isLabelEmpty || isImageEmpty) {
      console.log('empty')
    } else {
      const valRef = collection(textDB, 'teckstack')
      await addDoc(valRef, { labelVal: label, imageURL: image })
      alert('Data Added Successfully')
    }
  }

  const getData = async () => {
    const valRef = collection(textDB, 'teckstack')
    const dataDB = await getDocs(valRef)
    const allData = dataDB.docs.map(val => ({ ...val.data(), id: val.id }))
    setFileList(allData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <input type="text" onChange={(e) => setLabel(e.target.value)} />
      <input type="file" onChange={(e) => handleUpload(e)} />
      <button onClick={handleSubmit}>Submit</button>

      {fileList.map(item => (
        <div key={item.id}>
          <h3 className="item">{item.labelVal}</h3>
          <img src={item.imageURL} alt={item.labelVal} style={{ height: '200px', width: '200px' }} />
        </div>
      ))}
    </div>
  )
}

export default AdminTech
