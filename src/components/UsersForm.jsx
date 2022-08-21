import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValue = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  birthday: ''
}

const UsersForm = ({getAllUsers, updateInfo, setUpdateInfo, handleCloseForm}) => {

  useEffect(() => {
    if(updateInfo){
      reset(updateInfo)
    }
  }, [updateInfo])

  const createUser = data => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = data => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const resetFuntion=()=>{
    reset(defaultValue)
    handleCloseForm()
  }
    
  const {register, reset, handleSubmit} = useForm()
    
  const submit = data => {
    if(updateInfo){
      // Update Movie
      updateUser(data)
      setUpdateInfo()
    } else {
      // Create New Movie
      createUser(data)
    }
    reset(defaultValue)
    handleCloseForm()
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form'>
      <div onClick={handleCloseForm} className='form__equis'>x</div>
      <h2 className='form__title'>
        {
          updateInfo ? 
            'Update  Information'
          : 
            'Create New User'
        }
      </h2>
      <ul className='form__list'>
        <li className='form__item'>
          <label htmlFor="first_name">First Name</label>
          <input {...register("first_name")} type="text" id='first_name' />
        </li>
        <li className='form__item'>
          <label htmlFor="last_name">Last Name</label>
          <input {...register("last_name")} type="text" id='last_name' />
        </li>
        <li className='form__item'>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="text" id='email' />
        </li>
        <li className='form__item'>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id='password' />
        </li>
        <li className='form__item'>
          <label htmlFor="birthday">Birthday</label>
          <input {...register("birthday")} type="date" id='birthday' />
        </li>
      </ul>
      <button className='form__btn'> { updateInfo ? 'Update' : 'Create' }
      </button>
    </form>
  )
}

export default UsersForm