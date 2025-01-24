import React, { useState } from 'react'
import app from '../../firebaseConfig'
import { getDatabase, ref, get } from 'firebase/database'
import { Button } from "antd";
const UpdateReadComponent = () => {
  const [fruitArray, setFruitArray] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'nature/fruits');
    const snapshot = await get(dbRef);

    if(snapshot.exists()) {
      const myData = snapshot.val();
      const tempArray = Object.keys(myData).map(myFireId => {
        return {
          ...myData[myFireId],
          fruitId: myFireId
        }
      })

      setFruitArray(tempArray)
    } else {
      alert("error")
    }
  }

  return (
    <div>
      <h2>UPDATE READ</h2>
      <button onClick={fetchData}>Display Data</button>
      <ul>
        {fruitArray.map((item, index) => (
          <li key={index}>
            {item.fruitName}: {item.fruitDefinition} : {item.fruitId}
          </li>
        ))}
      </ul>
      <button>GO HOME</button>
    </div>
  )
}

export default UpdateReadComponent
