import React, { useState } from 'react'
import app from '../../firebaseConfig'
import { getDatabase, ref, set, push } from 'firebase/database'

const WriteComponent = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleSave = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "nature/fruits"));
    set(newDocRef, {
      fruitName: inputValue1,
      fruitDefinition: inputValue2
    }).then( () => {
      alert('data saved successfully')
    }).catch((error) => {
      alert('error: ', error.message)
    })
  }
  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input 
        type="text"
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <button onClick={handleSave}>SAVE</button>
    </div>
  )
}

export default WriteComponent
