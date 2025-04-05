import React ,{useState,useEffect,useContext}from 'react'

import UserCard from '../components/UserCard/UserCard'
import './App.css';
import { ChatAppContext } from '../Context/ChatAppContext';

function AllUser() {
    const {userLists,addFriends}=useContext(ChatAppContext);
  return (
    <div>
        <div className="alluser_info">
            <h1>Find your Friends</h1>
        </div>
        <div className="alluser">
            {userLists.map((el,i)=>{
                <UserCard  key={i+1} el={el} i={i} addFriends={addFriends}/>
            })}
        </div>
    </div>
  )
}

export default AllUser