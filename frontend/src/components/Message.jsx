import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";


const Message = ({ message }) => {
    const result = message?.createdAt
    const result2 = result.slice(11, 16);

    let hours = result2.slice(0, 2);
    let minutes = result2.slice(4);

    // Convert hours and minutes to numbers
    hours = Number(hours);
    minutes = Number(minutes);

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;


    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "auto" });
    }, [message]);

    return (
        <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'} w-screen pr-5 pl-5`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authUser?._id ? authUser?.profilePhoto : selectedUser?.profilePhoto} />
                </div>
            </div>
            <div className="chat-header">
                <time className="text-xs opacity-50 text-white">{strTime}</time>
            </div>
            <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-green-600 text-white' : 'bg-gray-700 text-white'} `}>{message?.message}</div>
        </div>
    )
}

export default Message
