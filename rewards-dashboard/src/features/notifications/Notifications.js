import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotifications } from './notificationsSlice';
import './Notifications.css';

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications.messages);
  const dispatch = useDispatch();

  return (
    <div className="notifications-container">
      <AnimatePresence>
        {notifications.map((msg, index) => (
          <motion.div 
            key={index} 
            className="notification"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            {msg}
          </motion.div>
        ))}
      </AnimatePresence>
      {notifications.length > 0 && <button onClick={() => dispatch(clearNotifications())}>Clear</button>}
    </div>
  );
};

export default Notifications;
