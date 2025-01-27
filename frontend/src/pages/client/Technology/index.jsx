import React, { useEffect, useState } from 'react'
import { textDB } from '../../../firebaseConfig';
import Title from '../../../components/Title'
// import { techStack } from '../../../StaticData'
// import { Icon } from '@iconify/react';
import './technology.scss'
import { collection, getDocs } from 'firebase/firestore';

const Technology = () => {
  const [fileList, setFileList] = useState([])

  const sortedArray = fileList.sort((a, b) => a.id - b.id)

  const getData = async () => { 
    try {
      const valRef = collection(textDB, 'teckstack'); // Replace 'txtData' with your collection name
      const dataDB = await getDocs(valRef);
      const allData = dataDB.docs.map((doc) => doc.data());
      setFileList(allData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='technology container'>
      <Title 
        title='My Tech Stack'
        subtitle='Technologies I&#x0027;ve been working with recently'
      />
      <div className="technology__tech-list">
        {fileList.length > 0 ? (
          sortedArray.map((item) => (
            <div key={item.id} className="technology__tech-item" >
              <img src={item.imageURL} alt={item.labelVal} />
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  )
}

export default Technology
