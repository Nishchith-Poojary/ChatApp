import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChatAppContext } from "../Context/ChatAppContext.jsx"
import { Filter, Friend, NavBar } from "../components/Index"
import "./App.css"
import AllUser from "./AllUser.jsx"

function App() {
 const {readMessage,createAccount,addFriends,sendMessage,readUser}=useContext(ChatAppContext);

  return (
    <BrowserRouter>
      <NavBar />
      <Filter></Filter>
      <Friend></Friend>
      <Routes>
        <Route
          path="/"
          element={<h2 className="poppins-"></h2>}
        />
        <Route path='/allUser' element={<AllUser></AllUser>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
