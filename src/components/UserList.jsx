import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import styles from '../styles/style.module.css';

const UserList = ({ refresh }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://randomuser.me/api/?results=6`);
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [refresh]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {users.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </div>
  );
};

export default UserList;