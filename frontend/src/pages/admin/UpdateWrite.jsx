import React, { useState, useEffect } from 'react'
import app from '../../firebaseConfig'
import { getDatabase, ref, set, get } from 'firebase/database'

const UpdateWriteComponent = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "nature/fruits/-OHIeY-H6hb4RHXlcICx");
      const snapshot = await get(dbRef);
      if(snapshot.exists()) {
        const targetObject = snapshot.val();
        setInputValue1(targetObject.fruitName);
        setInputValue2(targetObject.fruitDefinition);
      } else {
        alert('error');
      }
    }

    fetchData()
  }, [])

  const overwriteData = async () => {
    const db = getDatabase(app);
    const newDocRef = ref(db, "nature/fruits/-OHIeY-H6hb4RHXlcICx");
    set(newDocRef, {
      fruitName: inputValue1,
      fruitDefinition: inputValue2
    }).then( () => {
        alert('data overwritten successfully')
    }).catch((error) => {
        alert('error: ', error.message)
    })
  }

  return (
    <div>
      <h2>UPDATE WRITE</h2>
      <input 
        value={inputValue1}
        type="text" 
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input 
        value={inputValue2}
        type="text"
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <button onClick={() => overwriteData()}>SAVE</button>
    </div>
  )
}

export default UpdateWriteComponent
