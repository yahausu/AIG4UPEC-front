"use client"
import React from 'react';
import { FaHome, FaUser, FaCog, FaQuestionCircle, FaBars } from 'react-icons/fa';
import styles from './utility-bar.module.css';

interface UtilityBarProps {
  toggleSidebar: () => void;
}

const UtilityBar: React.FC<UtilityBarProps> = ({ toggleSidebar }) => {
  return (
    <div className={styles.utilityBar}>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        <FaBars />
      </button>
      <h1>IAG4UPEC</h1>
      <button><FaHome /></button>
      <button><FaUser /></button>
      <button><FaCog /></button>
      <button><FaQuestionCircle /></button>
    </div>
  );
};

export default UtilityBar;