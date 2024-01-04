//eslint-disable-next-line
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update_User = () => {
    // const [Boookings, seBoookings] = useState([]);
    const [hiddenUsers, setHiddenUsers] = useState(() => {
        // Retrieve hiddenUsers from localStorage or use an empty array
        const storedHiddenUsers = localStorage.getItem('hiddenUsers');
        return storedHiddenUsers ? JSON.parse(storedHiddenUsers) : [];
    });

    const { data: Boookings = [], refetch } = useQuery(['User_Info_Data'], async () => {
        const res = await axios.get('https://backend-kappa-puce.vercel.app/User_Data')
        return res.data;
    })


    useEffect(() => {
        // Save hiddenUsers to localStorage whenever it changes
        localStorage.setItem('hiddenUsers', JSON.stringify(hiddenUsers));
    }, [hiddenUsers]);

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
                fetch(`https://backend-kappa-puce.vercel.app/delete_User/${_id}`, { method: 'DELETE' })
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
                        setHiddenUsers(prevHiddenUsers => prevHiddenUsers.filter(userId => userId !== _id));
                    });
            }
        });
    };

    const toggleVisibility = (_id) => {
        setHiddenUsers(prevHiddenUsers => {
            if (prevHiddenUsers.includes(_id)) {
                return prevHiddenUsers.filter(userId => userId !== _id);
            } else {
                return [...prevHiddenUsers, _id];
            }
        });
    };
    const [isScaled0, setIsScaled0] = useState(false);
    const handleClick0 = () => {
        setIsScaled0(true);
        setTimeout(() => {
            setIsScaled0(false);
        }, 300); // Change the duration as needed
    };
    const Make_Hide = (user) => {
        fetch(`https://backend-kappa-puce.vercel.app/user_data/User_Hide/${user._id}`, {
            method: "PATCH",
            //   headers: { //'content-type': 'application/json'//},
            //   body: JSON.stringify({status: 'confirm'}) 
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    // const remaining = Boookings.filter(Boooking => Boooking._id !== user._id);
                    // seBoookings(remaining);
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} user is hide now`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }
    const Make_UnHide = (user) => {
        fetch(`https://backend-kappa-puce.vercel.app/user_data/User_UnHide/${user._id}`, {
            method: "PATCH",
            //   headers: { //'content-type': 'application/json'//},
            //   body: JSON.stringify({status: 'confirm'}) 
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //update state
                    // const remaining = Boookings.filter(Boooking => Boooking._id !== user._id);
                    // seBoookings(remaining);
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} user is Visible now`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Picture</th>
                            <th>Update</th>
                            <th>Hide</th>
                            <th>Unhide</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Boookings.map(User => (
                            <tr key={User._id}>
                                {
                                    User.Status === "Approved" && <th>
                                        <button onClick={() => handle_delete(User._id)} className="btn btn-square btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </th>
                                }
                                {
                                    User.Status === "Approved" && <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={User.P_url} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{User.name}</div>
                                                <div className="text-sm opacity-50">{User.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                }
                                {
                                    User.Status === "Approved" && <th>
                                        <button className="btn btn-primary"><Link to={`/Update_A_User/${User._id}`}>Update</Link></button>
                                    </th>
                                }
                                {
                                    User.Status === "Approved" && <td className='py-3' data-label="Make Admin">{
                                        User.User_Hide === 'yes' ? <p className={`bg-red-200 clipo9 cursor-not-allowed text-center py-3 w-[50px] mx-auto rounded-lg`}><button className='cursor-not-allowed text-center'>Hidden</button></p> : <p onClick={() => Make_Hide(User)}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 clipo9 bg-lime-500 text-center cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button>Hide User</button></p></p>
                                    }</td>
                                }
                                {
                                    User.Status === "Approved" && <td className='py-3' data-label="Make Admin">{
                                        User.User_Hide === 'No' ? <p className={`bg-red-200 clipo9 cursor-not-allowed text-center py-3 w-[50px] mx-auto rounded-lg`}><button className='cursor-not-allowed text-center'>Visible</button></p> : <p onClick={() => Make_UnHide(User)}><p onClick={handleClick0} className={`${isScaled0 ? 'scale-105' : ''} duration-300 clipo9 bg-lime-500 text-center cursor-pointer py-3 w-[50px] mx-auto rounded-lg`}><button>Visible User</button></p></p>
                                    }</td>
                                }

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Update_User;
