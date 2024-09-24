import React, { useEffect, useState } from 'react'


export default function Home1() 
{
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
      setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])


  return (
    <div>
         <h1>Welcome {loggedInUser}</h1>
      <h1>You are in homeeeeeeeeeee</h1>
      <h1>{loggedInUser}</h1>
    </div>
  );

    // const handleLogout = (e) => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('loggedInUser');
    //     handleSuccess('User Loggedout');
    //     setTimeout(() => {
    //         navigate('/login');
    //     }, 1000)
    // }

}
