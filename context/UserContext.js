'use client';

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const login = (name) => setUserName(name);
  const logout = () => setUserName('');
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <UserContext.Provider value={{ userName, login, logout, showModal, openModal, closeModal }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
