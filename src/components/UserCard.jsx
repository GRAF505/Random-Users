import React from 'react';
import styles from '../styles/UserCard.module.css';

const UserCard = ({ user }) => {
  return (
    <div className={styles.card}>
      <img src={user.picture.large} alt={user.name.first} />
      <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <p>{user.email}</p>
      <p>{user.location.city}, {user.location.country}</p>
    </div>
  );
};

export default UserCard;