import axios from "axios";
import React from "react";

const UsersList = ({ user, getAllUsers, setUpdateInfo, handleOpenForm }) => {

  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleUpdateClick = () => {
    handleOpenForm()
    setUpdateInfo(user)
  }

  return (
    <article className="card">
      <ul className="card__list">
        <li className="card__item">
          <span className="card__span">{user.first_name} {user.last_name}</span>
        </li>
        <li className="card__item">
          <span className="card__span">{user.email}</span>
        </li>
        <li className="card__item">
          <span className="card__span">{user.birthday}</span>
        </li>
      </ul>
      <footer className="card__footer" >
        <button onClick={deleteUser} className="card__btn"></button>
        <button onClick={handleUpdateClick} className="card__btn"></button>
      </footer>
    </article>
  );
};

export default UsersList;