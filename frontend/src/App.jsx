import { useEffect } from 'react';

import './App.scss'
import { RouterProvider } from 'react-router-dom';
import app from './firebaseConfig'
import { getDatabase, ref, get } from 'firebase/database'
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData } from './redux/rootSlice';

import { router } from './routes/routes';

function App() {
  const { portfolioData } = useSelector((state) => state.root)
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, '/portfolio/user');
    const snapshot = await get(dbRef);

    try {
      if(snapshot.exists()) {
      const myData = snapshot.val();
      const tempArray = Object.keys(myData).map(myFireId => {
        return {
          ...myData[myFireId],
          _id: myFireId
        }
      })
        dispatch(SetPortfolioData(tempArray));
      } else {
        console.log('error'); 
      }
    } catch(error) {
      console.log(error.message)
    }
  }
  
  useEffect(() => {
    getPortfolioData()
  }, [])

  console.log('App: ', portfolioData)

  return <RouterProvider router={router}/> 
}

export default App

// test push for branch: feature/techstack-section
