import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const getAllUsers = () => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const handleOpenForm = () => setIsFormOpen(true)

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }
  
  return (
    <div className="App">
      <div className='titulo'>
      <h1>Users App</h1>
      </div>
      <div className='contenedor_button_openForm'>
      <i className="fa-solid fa-user"></i>
      <button className='button_openForm'onClick={handleOpenForm}>New Users</button>
      </div>
      
      <div className={isFormOpen ? 'form-container' : 'form-none'}>
        <UsersForm 
          getAllUsers={getAllUsers}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          handleCloseForm={handleCloseForm}
        />
      </div>
      <div className='card-container'>
        {
          users?.map(user => (
            <UsersList 
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
