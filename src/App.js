import './App.css';
import axios from 'axios';
import React, { useEffect,useState } from 'react';

const Card=({user})=>{
  return(

    <div className='container'>
      <div className='elems'>
      <h3>{user.name}</h3>
        <p>E-mail :{user.email}</p>
          <p>City:{user.address.city}</p>

        </div>


    </div>
)
}
function App() {
  const [listOfUser , setListOfUser ] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then (function(response){
    setListOfUser(response.data)
  })
  .catch (function(error){
  })
},[]);
  return(
      <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>
      {listOfUser.map((user,i) => <Card key={i} user={user}/>)}
    </div>
  );
}
export default App;
