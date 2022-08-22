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
          <div className="disp">
            <i className="fa-solid fa-user"></i>
            <span className="card__span">{user.first_name} {user.last_name}</span>
          </div>
        </li>
        <li className="card__item">
          <div className="disp">
            <i className="fa-solid fa-envelope"></i>
            <span className="card__span">{user.email}</span>
          </div>
        </li>
        <li className="card__item">
          <div className="disp">
            <i className="fa-solid fa-calendar-days"></i>
            <span className="card__span">{user.birthday}</span>
          </div>
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