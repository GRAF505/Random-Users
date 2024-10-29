import React, { useState } from 'react';
import UserList from './components/UserList';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './styles/App.module.css';

function App() {
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = () => {
    setRefresh(refresh + 1);
  };

  return (
    <div className={styles.app}>
      <Header />
      <button className={styles.refreshButton} onClick={handleRefresh}>Обновить пользователей</button>
      <UserList refresh={refresh} />
      <Footer />
    </div>
  );
}

export default App;