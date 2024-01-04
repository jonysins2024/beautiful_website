import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header';
const Work_Permit = () => {
    const [searchId, setSearchId] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [noResult, setNoResult] = useState(false);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://backend-kappa-puce.vercel.app/result/${searchId}`);
            setNoResult(false);
            setSearchResult(response.data);
        } catch (error) {
            console.error(error);
            setNoResult(true);
            setSearchResult(null);
        }
    };
    return (
        <div>
            <Header></Header>
            <section className=' flex flex-col-reverse md:flex-row justify-between md:px-[53px] px- items-center pb-2'>
                <div>
                    <p className='md:text-[53px] text-[29px] py-2 md:py-0'>Work in Canada</p>
                    <p className='md:text-[23px]'>Apply to work in Canada, extend a work permit or hire a foreign worker.</p>
                </div>
                <div><img className='w-[744px] h-[220px]' src="https://www.canada.ca/content/dam/ircc/images/topic-pages/worker.png" alt="" /></div>
            </section>
            <section className='pb-6'>

                <div>
                    <div className='mt-[1em] md:px-[60px]'>
                        <p className='text-[#333333] font-bold md:text-[17px]'><span className='md:text-[20px] text-red-700'>*</span> Please Type Your Name <span className=' text-red-700'> (required)</span></p>
                    </div>
                    <div className='w-[91%] mx-auto'>
                        <div className='flex gap-x-3'>
                            <input placeholder='Your Name' className="w-full bg-slate-50  border-[1.8px] border-gray-800 rounded-md h-[2em] text-[1em]  lg:text-xl md:text-[.9em] md:h-10 text-text placeholder-text-sm bg-transparent outline-none p-2" type="text" />
                            {/* <button className='text-black style' onClick={handleSearch}>Search</button> */}
                        </div>
                    </div>
                </div>

                <div>
                    <div className='mt-[1em] md:px-[60px]'>
                        <p className='text-[#333333] font-bold md:text-[17px]'><span className='md:text-[20px] text-red-700'>*</span> Please Type Your Passport Number<span className=' text-red-700'> (required)</span></p>
                    </div>
                    <div className='w-[91%] mx-auto'>
                        <div className='flex gap-x-3'>
                            <input placeholder='Your Passport Number' className="w-full bg-slate-50  border-[1.8px] border-gray-800 rounded-md h-[2em] text-[1em]  lg:text-xl md:text-[.9em] md:h-10 text-text placeholder-text-sm bg-transparent outline-none p-2" type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                            {/* <button className='text-black style' onClick={handleSearch}>Search</button> */}
                        </div>
                        <div className='flex gap-x-3 mt-4'>
                            <button onClick={handleSearch} className='px-[19px] py-[8px] rounded-md bg-[#333333] text-white hover:scale-105 transition-all duration-300'>Search</button>
                        </div>
                    </div>
                </div>
            </section>

            {searchResult && !noResult ? (
                <SearchResult user={searchResult} />
            ) : (
                noResult && <h4>--- No Result Found ---</h4>
            )}
        </div>
    );
};

const SearchResult = ({ user }) => {
    return (
        <section className='border-0 border-gray-600 rounded-[26px] my-3 mx-2'>

            {
                user.User_Hide === 'No' && user.Status === 'Approved' ?
                    <div className='my-4 mx-2'>
                        <div className='flex justify-center items-center gap-x-4 px-6'>
                            <div>
                                <img className='w-[205px] h-[245px] rounded-[10px]' src={user.P_url} alt="" srcSet="" />
                            </div>
                            <div>
                                <p><span className='text-[15px]'>Canditate Name:</span>  <span className='text-[19px] '>{user.name}</span></p>
                                <p className='mt-2'><span className='text-[15px]'>Fathers Name:</span> <span className='text-[19px] '>{user.F_name}</span></p>
                                <p className='mt-2'><span className='text-[15px]'>Mothers Name:</span> <span className='text-[19px] '>{user.M_name}</span></p>
                                <p className='mt-2'><span className='text-[15px]'>Permanant Address:</span> <span className='text-[19px] '> {user.Po_address}</span></p>
                                <p className='mt-2'><span className='text-[15px]'>Nationality:</span> <span className='text-[19px] '>{user.nationality}</span></p>
                                {/* <p className='mt-2'><span className='text-[15px]'>Religion:</span> <span className='text-[19px] font-bold '>{user.Religion}</span></p> */}
                            </div>
                        </div>
                        <div className='gap-y-6 mt-4'>
                            {/* <div className={`${!user.Doc_1_PC && 'hidden'}`}>
                            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_1_Nm && user.Doc_1_Nm}</p>
                            <div className='max-w-[50%] mx-auto rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_1_PC && user.Doc_1_PC} alt="Please Wait Few Moment" /></div>
                        </div>
                        <div className={`${!user.Doc_2_PC && 'hidden'}`}>
                            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_2_Nm && user.Doc_2_Nm}</p>
                            <div className='max-w-[100%] rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_2_PC && user.Doc_2_PC} alt="Please Wait Few Moment" /></div>
                        </div> */}
                            <div className={`${!user.Doc_1_PC && 'hidden'}`}>
                                <p className='text-center text-[30px] font-sans font-semibold mb-2'>Work Permit Certificate</p>
                                <div className='max-w-[100%] rounded-md  border-[0px] border-[#e8c556]'><img className='md:w-[80%]  mx-auto' src={user.Doc_1_PC && user.Doc_1_PC} alt="Please Wait Few Moment" /></div>
                            </div>
                            {/* <div className={`${!user.Doc_4_PC && 'hidden'}`}>
                            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_4_Nm && user.Doc_4_Nm}</p>
                            <div className='max-w-[50%] mx-auto rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_4_PC && user.Doc_4_PC} alt="Please Wait Few Moment" /></div>
                        </div> */}
                        </div>
                    </div> : <div className='text-center md:text-[4em] font-semibold text-red-500'>No Data Found</div>
            }

        </section>
    );
};
export default Work_Permit;