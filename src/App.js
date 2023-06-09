// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react'
// import { useNavigate } from "react-router-dom";
import Home from './containers/Home/Home.js'
import Header from './components/Header/Header.js'
import Recipe from './containers/Recipe/Recipe.js'
import ExploreRecipes from './containers/ExploreRecipes/ExploreRecipes.js'
import Following from './containers/Following/Following.js'
// import UserSelect  from './components/UserSelect/UserSelect.js'
import About from './containers/About/About.js';
import { getUsers } from './Api.js'

function App() {
  // const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState('');
  const [userList, setUserList] = useState([])

  useEffect(() => {
    getUsers().then(userList => {
      setUserList(userList)
    });
  }, [])

  const handleUserChange = async (newSelectedUser) => {
    setSelectedUser(newSelectedUser)
    // navigate("/")
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home userList = {userList} selectedUser = {selectedUser} setSelectedUser={handleUserChange} />} />
        <Route path="/recipes" element={<ExploreRecipes userList = {userList} userId = {selectedUser} setSelectedUser={handleUserChange} />} />
        <Route path="/recipe/:recipeId" element={<Recipe userList = {userList} setSelectedUser={handleUserChange} />} />
        <Route path="/following" element={<Following userList={userList} userId = {selectedUser} setSelectedUser={handleUserChange} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
