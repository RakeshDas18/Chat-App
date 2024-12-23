import React, { useEffect } from 'react'
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector, useDispatch } from "react-redux";
import './styles.css';
import OtherUsers from "./OtherUsers.jsx";

const MessageContainer = () => {
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const isOnline = onlineUsers?.includes(selectedUser?._id);
   
    return (
        <>
            {
                selectedUser !== null ? (
                    <div className='md:min-w-[550px] flex flex-col'>
                        <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>
                            <div className={`avatar ${isOnline ? 'online' : ''}`}>
                                <div className='w-12 rounded-full'>
                                    <img src={selectedUser?.profilePhoto} alt="user-profile" />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex justify-between gap-2'>
                                    <p>{selectedUser?.fullName}</p>
                                </div>
                            </div>
                        </div>
                        <Messages />
                        <SendInput />
                    </div>
                ) : (
                    <div className='flex flex-col flex-1 justify-center items-center text-center'>
                        <h1 className='text-3xl text-white font-bold relative pt-44'>Hi, {authUser?.fullName}. Let's start conversation</h1>
                        <h1 className='text-2xl text-white relative p-10'></h1>
                        <p className='text-xl text-white relative pb-10'>HERE ARE SOME PEOPLES YOU MAY KNOW</p>
                        <OtherUsers />
                    </div>
                )
            }
        </>
    );
}

export default MessageContainer;
