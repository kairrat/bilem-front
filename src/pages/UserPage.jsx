import React, { useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import { useDispatch, useSelector } from 'react-redux';
import { profile } from '../api/Profile';

const UserPage = () => {

    let dispatch = useDispatch();

    const { userProfile, loading, error } = useSelector((state) => state.profile);

    useEffect(() => {
      dispatch(profile());
    }, [dispatch]);

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

  return (
    <div>
        <Header/>
        <Banner/>

        <div>
        {userProfile && (
        <div>
       
        </div>
      )}        </div>
    </div>
  )
}

export default UserPage