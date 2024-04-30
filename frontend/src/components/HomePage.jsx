import React, { useEffect } from 'react';
import MessageContainer from './MessageContainer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MenuBar from './MenuBar';
import OtherUsers from "./OtherUsers"
import OtherUsers from "./OtherUser"

const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <MenuBar/>
      <MessageContainer />
      <OtherUser />
      <OtherUsers />
    </div>
  );
}

export default HomePage;
