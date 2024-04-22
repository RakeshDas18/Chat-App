import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import OtherUsers from './OtherUsers';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setOtherUsers } from '../redux/userSlice.js';

const Search = () => {
    const [search, setSearch] = useState("");
    const { otherUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser) {
            dispatch(setOtherUsers([conversationUser]));
        } else {
            toast.error("User not found!");
        }
    }

    return (
        <div className='border-r border-slate-500 p-4 flex flex-row'>
            <form onSubmit={searchSubmitHandler} className='flex items-center gap-2 max-w-md w-full fixed top-0 left-0 bg-white p-4 z-50'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='input input-bordered rounded-md w-full'
                    type="text"
                    placeholder='Search...'
                />
                <button type='submit' className='btn bg-zinc-700 text-white'>
                    <IoSearchOutline className='w-5 h-5 outline-none' />
                </button>
            </form>
        </div>
    )
}

export default Search;
