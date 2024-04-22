import React, { useState } from 'react'
import OtherUsers from './OtherUsers';
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/userSlice.js';
import { setMessages } from '../redux/messageSlice.js';
import { BASE_URL } from '..';
import MenuBar from './MenuBar.jsx';


 
const Sidebar = () => {

    const {otherUsers, selectedUser} = useSelector(store=>store.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleRefresh = () =>{(
        dispatch(setSelectedUser(null))
    )}

    const hideMenu = () =>{
        MenuBar.toggleMenu();    
    }

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='border-r border-slate-500 p-4 flex flex-row sm:h-screen md:h-screen max-h-screen max-sm: max-w-[550px] max-sm: min-w-[500px] pt-14'>
            <a className='mt-5 text-2xl' href="/" onClick={handleRefresh}>CLOSE CHAT</a>
            <div className="divider px-3"></div> 
            <OtherUsers onClick={hideMenu}/> 
            <div className='fixed mt-20'>
                <button onClick={logoutHandler} className='btn btn-sm'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar