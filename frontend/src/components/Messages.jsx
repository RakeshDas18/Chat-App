import React from 'react';
import Message from './Message';
import useGetMessages from '../hooks/useGetMessages.jsx';
import { useSelector } from "react-redux";
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage.jsx';

const Messages = () => {
    useGetMessages();
    useGetRealTimeMessage();
    const { messages } = useSelector(store => store.message);
    return (
        <div className='px-2 flex-1 max-w-md w-screen'>
            {
               messages && messages?.map((message) => {
                    return (
                        <Message key={message._id} message={message} />
                    )
                })
            }

        </div>


    )
}

export default Messages
