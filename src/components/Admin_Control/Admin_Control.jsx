//eslint-disable-next-line
import React from 'react';
// import useCart from '../../../Hooks/useCart';
import { FaUserAstronaut, FaUsersCog, FaUserGraduate } from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

import axios from 'axios';
import { useQuery } from 'react-query';

// import Swal from 'sweetalert2';
const Admin_Control = () => {
    const [isScaled0, setIsScaled0] = useState(false);
    const handleClick0 = () => {
        setIsScaled0(true);
        setTimeout(() => {
            setIsScaled0(false);
        }, 300); // Change the duration as needed
    };

    const { data: User_Info_Data = [], refetch } = useQuery(['User_Info_Data'], async () => {
        const res = await axios.get('https://backend-kappa-puce.vercel.app/Users_Infos')
        return res.data;
    })

    const Make_Admin = (user) => {
        fetch(`https://backend-kappa-puce.vercel.app/user_data/admin/${user._id}`, {
            method: "PATCH",
            //   headers: { //'content-type': 'application/json'//},
            //   body: JSON.stringify({status: 'confirm'}) 
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    const Make_Instructor = (user) => {
        fetch(`https://backend-kappa-puce.vercel.app/user_data/instructor/${user._id}`, {
            method: "PATCH",
            //   headers: {
            //     'content-type': 'application/json'
            //   },
            //   body: JSON.stringify({status: 'confirm'}) 
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Modarator now`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    const handle_delete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://backend-kappa-puce.vercel.app/delete_User_Data/${_id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(delete_data => {
                        if (delete_data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your User data has been deleted.',
                                'success'
                            );
                        }
                        refetch()
                    });
            }
        });
    };
    return (

        <table
            className="bg-cover color bg-center bg-no-repeat mt-[0em] md:max-w-[1280px] mx-auto relative z-0"
            style={{
                // backgroundColor: 'rgba(0,0,0,.5)',
                background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${"krkkr"})`,
                backgroundSize: 'cover',
                backgroundAttachment: "fixed",

                //   opacity: 0.55,
            }}
        >
            <caption>---Manage Users---</caption>
            <thead>
                <tr>
                    {/* <th className='bg-red-400  clipo2' scope="col">Name </th> */}
                    <th className='bg-red-400  pr-4' scope="col">Email</th>
                    <th className='bg-red-400  pr-4' scope="col">Make Admin</th>
                    <th className='bg-red-400  pr-4' scope="col">Make Modarator</th>
                    <th className='bg-red-400  pr-4' scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    User_Info_Data.map(user => <tr key={user._id}>
                        {/* <td data-label="Name">{user.name}</td> */}
                        <td data-label="Email">{user.email}</td>
                        <td className='py-3' data-label="Make Admin">{
                            user.role === 'admin' ? <p className={`bg-red-200 clipo9 cursor-not-allowed text-center py-3 w-[50px] mx-auto rounded-lg`}><button className='cursor-not-allowed text-center'><FaUsersCog></FaUsersCog></button></p> : <p onClick={() => Make_Admin(user)}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 clipo9 bg-lime-500 text-center cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><FaUserAstronaut></FaUserAstronaut></button></p></p>
                        }</td>
                        <td className='py-3' data-label="Make Instructor">{
                            user.role === 'instructor' ? <p className={`bg-red-200 clipo9 cursor-not-allowed text-center py-3 w-[50px] mx-auto rounded-lg`}><button className='cursor-not-allowed text-center'><FaUserGraduate></FaUserGraduate></button></p> : <p onClick={() => Make_Instructor(user)}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 bg-lime-500 text-center clipo9 cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button><RiUserVoiceFill></RiUserVoiceFill></button></p></p>
                        }</td>
                        <th>
                            <button onClick={() => handle_delete(user._id)} className="btn btn-square btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </th>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default Admin_Control;