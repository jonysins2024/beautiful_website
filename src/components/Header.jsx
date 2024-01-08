import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };
    return (
        <>
            {/* <section>
        <div className='text-center text-green-500 font-bold text-[52px]'>
          --- Welcome to Document Finder ---
        </div>
        <div className='mt-[6em] flex justify-center items-center'>
          <IcBaselineDownload />
          <p className='text-center text-green-500 font-semibold text-[33px]'>please type your ID in search box</p>
          <IcBaselineDownload />
        </div>

        <form className="flex justify-center items-center space-x-3 mt-4">
          <div className='w-[80%]'>
            <input id="ssearch" type="search" placeholder="Type your ID number" className="w-full bg-slate-50  border-[1.8px] border-[#14a800e3] rounded-md h-[2em] text-[1em]  lg:text-xl md:text-[.9em] md:h-10 text-text placeholder-text-sm bg-transparent outline-none p-2" />
          </div>
          <div className=''> <button>
            <a className='text-black'>search</a>
          </button></div>
        </form>
      </section> */}

            {/* <img className='mb-11 mt-8 cursor-pointer' src={moduleName} alt="" /> */}

            <>

                <div className='flex justify-between items-center md:px-4 px-1 my-8 gap-x-3 '>
                    {/* <Link to='/'><div className=''><img className='md:w-[450px] w-[450px]' src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg" alt="" /></div></Link> */}
                    <Link to='/'><div className=''><img className='md:w-[450px] w-[450px]' src="https://i.ibb.co/x3kTCcq/imagevisa-1.png" alt="" /></div></Link>

                    <section className='flex  items-center'>
                        <div><input placeholder='Search IRCC' className="w-full bg-slate-50  border-[1.8px] border-gray-800 h-[2em] pl-[1px] text-[12px] md:text-[1em] md:h-[2em] text-text placeholder-text-sm bg-transparent outline-none p-2" type="text" /></div>
                        <div className='-ml-6 bg-slate-700 md:py-[6.5px] py-[3px]  px-[6.5px] cursor-pointer hover:scale-105 duration-300'> <MaterialSymbolsSearchCheck></MaterialSymbolsSearchCheck></div>
                    </section>
                </div>
                <div>
                    <hr className="border-[3.1px] border-black  border-t-0" />
                    <div className="w-[90%] mx-auto relative z-30">
                        <button onClick={toggleMenu} className='flex bg-[#444] items-center px-[33px] py-[12px] text-[20.1px] text-white relative' >
                            <div className="">MENU</div>
                            <div><MaterialSymbolsKeyboardArrowDownRounded /></div>
                        </button>

                        {/* menu  */}
                        <div className="">
                            <div className={` ${showMenu ? "bg-[#444] text-white absolute top-14 left-0 w-[44%] md:w-[27%]" : "hidden"}`}>
                                <ul className="space-y-3">

                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Job and the workplace</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Job and the workplace</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Find a job</a>
                                                <a href="/" className="cursor-pointer hover:underline">Training</a>
                                                <a href="/" className="cursor-pointer hover:underline">Hiring and managing employees</a>
                                                <a href="/" className="cursor-pointer hover:underline">Starting a business</a>
                                                <a href="/" className="cursor-pointer hover:underline">Workplace standards</a>
                                                <a href="/" className="cursor-pointer hover:underline">Pensions and retirement</a>

                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Employment Insurance benefits and leave</a>
                                                <a href="/" className="cursor-pointer hover:underline">View your Records of Employment</a>
                                                <a href="/" className="cursor-pointer hover:underline">Apply for a Social Insurance Number (SIN)</a>
                                                <a href="/" className="cursor-pointer hover:underline">Hire a temporary foreign worker</a>
                                                <a href="/" className="cursor-pointer hover:underline">Immigrate as a skilled worker</a>
                                            </div>
                                        </div>
                                    </li>



                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Immigration and citizenship</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Immigration and citizenship</h1>
                                                <Link to='/Work_Permit'> <a href="" className="cursor-pointer hover:underline">work permit checking</a></Link>
                                                <Link to='/Lima'> <a href="#visit" className="cursor-pointer hover:underline">LMIA Checking</a></Link>
                                                <Link to='/Visa'> <a href="#immigrate" className="cursor-pointer hover:underline">Visa Chacking</a></Link>
                                                <Link to='/Application_Stts'> <a href="#work" className="cursor-pointer hover:underline">Application Status</a></Link>
                                                <a href="/" className="cursor-pointer hover:underline">Study</a>
                                                <a href="/" className="cursor-pointer hover:underline">Citizenship</a>
                                                <a href="/" className="cursor-pointer hover:underline">New immigrants</a>
                                                <a href="/" className="cursor-pointer hover:underline">Canadians</a>
                                                <a href="/" className="cursor-pointer hover:underline">Refugees and asylum</a>
                                                <a href="/" className="cursor-pointer hover:underline">Enforcement and violations</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Most requested</a>
                                                <a href="/" className="cursor-pointer hover:underline">Sign in or create an account to apply online</a>
                                                <a href="/" className="cursor-pointer hover:underline">Check your application status</a>
                                                <a href="/" className="cursor-pointer hover:underline">Check application processing times</a>
                                                <a href="/" className="cursor-pointer hover:underline">Find an application form</a>
                                                <a href="/" className="cursor-pointer hover:underline">Pay your fees</a>
                                                <a href="/" className="cursor-pointer hover:underline">Find out if you need an eTA or a visa to visit Canada</a>
                                                <a href="/" className="cursor-pointer hover:underline">Have questions? Find answers in the Help Centre</a>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Travel and tourism</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Travel and tourism</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Travel advice and advisories</a>
                                                <a href="/" className="cursor-pointer hover:underline">COVID-19: Travel, testing and borders</a>
                                                <a href="/" className="cursor-pointer hover:underline">Visit Canada</a>
                                                <a href="/" className="cursor-pointer hover:underline">Travel outside Canada</a>
                                                <a href="/" className="cursor-pointer hover:underline">Air travel</a>
                                                <a href="/" className="cursor-pointer hover:underline">Return to Canada</a>
                                                <a href="/" className="cursor-pointer hover:underline">Canadian passports and travel documents</a>
                                                <a href="/" className="cursor-pointer hover:underline">Canadian attractions, events and experiences</a>
                                                <a href="/" className="cursor-pointer hover:underline">Assistance outside Canada</a>
                                                <a href="/" className="cursor-pointer hover:underline">Stay connected</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Emergency assistance abroad</a>
                                                <a href="/" className="cursor-pointer hover:underline">Find out if you need a visa to travel to Canada</a>
                                                <a href="/" className="cursor-pointer hover:underline">Apply for an eTA</a>
                                                <a href="/" className="cursor-pointer hover:underline">Apply for NEXUS</a>
                                                <a href="/" className="cursor-pointer hover:underline">Register as a Canadian abroad</a>
                                                <a href="/" className="cursor-pointer hover:underline">Travel insurance</a>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Business and industry</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Business and industry</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Starting a business</a>
                                                <a href="/" className="cursor-pointer hover:underline">Business grants and financing</a>
                                                <a href="/" className="cursor-pointer hover:underline">Business taxes</a>
                                                <a href="/" className="cursor-pointer hover:underline">Federal corporations</a>
                                                <a href="/" className="cursor-pointer hover:underline">Hiring and managing employees</a>
                                                <a href="/" className="cursor-pointer hover:underline">International trade and investment</a>
                                                <a href="/" className="cursor-pointer hover:underline">Permits, licences and regulations</a>
                                                <a href="/" className="cursor-pointer hover:underline">Doing business with government</a>
                                                <a href="/" className="cursor-pointer hover:underline">R&D and innovation</a>
                                                <a href="/" className="cursor-pointer hover:underline">Research and business intelligence</a>
                                                <a href="/" className="cursor-pointer hover:underline">Intellectual property and copyright</a>
                                                <a href="/" className="cursor-pointer hover:underline">Maintaining your business</a>
                                                <a href="/" className="cursor-pointer hover:underline">Protecting your business</a>
                                                <a href="/" className="cursor-pointer hover:underline">Insolvency for business</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Find a corporation</a>
                                                <a href="/" className="cursor-pointer hover:underline">Report your imported goods</a>
                                                <a href="/" className="cursor-pointer hover:underline">Search for trademarks</a>
                                                <a href="/" className="cursor-pointer hover:underline">Review custom tariffs for importing goods</a>
                                                <a href="/" className="cursor-pointer hover:underline">Find a patent</a>
                                                <a href="/" className="cursor-pointer hover:underline">Import and export from Canada</a>
                                                <a href="/" className="cursor-pointer hover:underline">Name a business</a>
                                                <a href="/" className="cursor-pointer hover:underline">Make changes to your corporation (Online Filing Centre)</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Benefits</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Benefits</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Employment Insurance benefits and leave</a>
                                                <a href="/" className="cursor-pointer hover:underline">Family and caregiving benefits</a>
                                                <a href="/" className="cursor-pointer hover:underline">Public pensions</a>
                                                <a href="/" className="cursor-pointer hover:underline">Student aid and education planning</a>
                                                <a href="/" className="cursor-pointer hover:underline">Housing benefits</a>
                                                <a href="/" className="cursor-pointer hover:underline">Disability benefits</a>
                                                <a href="/" className="cursor-pointer hover:underline">Benefits by audience</a>
                                                <a href="/" className="cursor-pointer hover:underline">Benefits payment dates</a>
                                                <a href="/" className="cursor-pointer hover:underline">Benefits finder</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Notify the government of a death</a>
                                                <a href="/" className="cursor-pointer hover:underline">Apply for Employment Insurance</a>
                                                <a href="/" className="cursor-pointer hover:underline">Apply for student loans and grants</a>
                                                <a href="/" className="cursor-pointer hover:underline">Sign in to a Government of Canada online account</a>
                                                <a href="/" className="cursor-pointer hover:underline">Sign up for direct deposit</a>
                                                <a href="/" className="cursor-pointer hover:underline">Submit your EI report</a>
                                                <a href="/" className="cursor-pointer hover:underline">Child and family benefits calculators</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Health</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Health</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Food and nutrition</a>
                                                <a href="/" className="cursor-pointer hover:underline">Diseases and conditions</a>
                                                <a href="/" className="cursor-pointer hover:underline">Vaccines and immunization</a>
                                                <a href="/" className="cursor-pointer hover:underline">Drug and health products</a>
                                                <a href="/" className="cursor-pointer hover:underline">Product safety</a>
                                                <a href="/" className="cursor-pointer hover:underline">Health risks and safety</a>

                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Healthy living</a>
                                                <a href="/" className="cursor-pointer hover:underline">Indigenous health</a>
                                                <a href="/" className="cursor-pointer hover:underline">Health system and services</a>
                                                <a href="/" className="cursor-pointer hover:underline">Science, research and data</a>
                                                <a href="/" className="cursor-pointer hover:underline">Licensed cultivators, processors and seller of cannabis</a>
                                                <a href="/" className="cursor-pointer hover:underline">Food and product recalls and safety alerts</a>
                                                <a href="/" className="cursor-pointer hover:underline">Canada's food guide</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Taxes</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Taxes</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Income tax</a>
                                                <a href="/" className="cursor-pointer hover:underline">GST/HST</a>
                                                <a href="/" className="cursor-pointer hover:underline">Payroll</a>
                                                <a href="/" className="cursor-pointer hover:underline">Business number</a>
                                                <a href="/" className="cursor-pointer hover:underline">Savings and pension plans</a>
                                                <a href="/" className="cursor-pointer hover:underline">Tax credits and benefits for individuals</a>
                                                <a href="/" className="cursor-pointer hover:underline">Excise taxes, duties, and levies</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Charities and giving</a>
                                                <a href="/" className="cursor-pointer hover:underline">My Account</a>
                                                <a href="/" className="cursor-pointer hover:underline">My Business Account</a>
                                                <a href="/" className="cursor-pointer hover:underline">Represent a Client</a>
                                                <a href="/" className="cursor-pointer hover:underline">File a GST/HST return (NETFILE)</a>
                                                <a href="/" className="cursor-pointer hover:underline">Make a payment to the Canada Revenue Agency</a>
                                                <a href="/" className="cursor-pointer hover:underline">Find the next benefit payment date</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Environment and natural resources</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Environment and natural resources</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Weather, climate and hazards</a>
                                                <a href="/" className="cursor-pointer hover:underline">Energy</a>
                                                <a href="/" className="cursor-pointer hover:underline">Natural resources</a>
                                                <a href="/" className="cursor-pointer hover:underline">Agriculture and the environment</a>
                                                <a href="/" className="cursor-pointer hover:underline">Fisheries</a>
                                                <a href="/" className="cursor-pointer hover:underline">Wildlife, plants and species</a>
                                                <a href="/" className="cursor-pointer hover:underline">Pollution and waste management</a>
                                                <a href="/" className="cursor-pointer hover:underline">Environmental conservation and protection</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Local weather forecast</a>
                                                <a href="/" className="cursor-pointer hover:underline">Fuel-efficient vehicles</a>
                                                <a href="/" className="cursor-pointer hover:underline">Home energy efficiency</a>
                                                <a href="/" className="cursor-pointer hover:underline">Species at risk</a>
                                                <a href="/" className="cursor-pointer hover:underline">Prepare for severe weather</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">National security and defence</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">National security and defence</h1>
                                                <a href="/" className="cursor-pointer hover:underline">National security</a>
                                                <a href="/" className="cursor-pointer hover:underline">Canadian Armed Forces</a>
                                                <a href="/" className="cursor-pointer hover:underline">Defence equipment purchases and upgrades</a>
                                                <a href="/" className="cursor-pointer hover:underline">Transportation security</a>
                                                <a href="/" className="cursor-pointer hover:underline">Securing the border</a>
                                                <a href="/" className="cursor-pointer hover:underline">Cyber security</a>
                                                <a href="/" className="cursor-pointer hover:underline">Jobs in national security and defence</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Services and benefits for the military</a>
                                                <a href="/" className="cursor-pointer hover:underline">Jobs in the Canadian Armed Forces</a>
                                                <a href="/" className="cursor-pointer hover:underline">Military ranks</a>
                                                <a href="/" className="cursor-pointer hover:underline">Defence equipment</a>
                                                <a href="/" className="cursor-pointer hover:underline">Current list of terrorist entities</a>
                                                <a href="/" className="cursor-pointer hover:underline">Join the Cadet Program</a>
                                                <a href="/" className="cursor-pointer hover:underline">Canada's Defence policy</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Culture, history and sport</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Culture, history and sport</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Funding - Culture, history and sport</a>
                                                <a href="/" className="cursor-pointer hover:underline">Events, celebrations and commemorations</a>
                                                <a href="/" className="cursor-pointer hover:underline">Cultural landmarks and attractions</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Canadian identity and society</a>
                                                <a href="/" className="cursor-pointer hover:underline">Sport</a>
                                                <a href="/" className="cursor-pointer hover:underline">History and heritage</a>
                                                <a href="/" className="cursor-pointer hover:underline">Arts and media</a>
                                                <a href="/" className="cursor-pointer hover:underline">Cultural youth programs</a>
                                                <a href="/" className="cursor-pointer hover:underline">Cultural trade and investment</a>
                                                <a href="/" className="cursor-pointer hover:underline">Visit the Canadian Virtual War Memorial</a>
                                                <a href="/" className="cursor-pointer hover:underline">Anthems and symbols of Canada</a>
                                                <a href="/" className="cursor-pointer hover:underline">Find a CRTC decision</a>
                                                <a href="/" className="cursor-pointer hover:underline">Research your family history</a>
                                                <a href="/" className="cursor-pointer hover:underline">Search census records</a>
                                                <a href="/" className="cursor-pointer hover:underline">Landmarks and attractions in Canada's capital</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Policing, justice and emergencies</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Policing, justice and emergencies</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Policing</a>
                                                <a href="/" className="cursor-pointer hover:underline">Justice</a>
                                                <a href="/" className="cursor-pointer hover:underline">Emergencies</a>
                                                <a href="/" className="cursor-pointer hover:underline">Corrections</a>
                                                <a href="/" className="cursor-pointer hover:underline">Parole, record suspension, expungement and clemency</a>
                                                <a href="/" className="cursor-pointer hover:underline">Victims of crime</a>
                                                <a href="/" className="cursor-pointer hover:underline">Apply/Renew a firearms licence</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Get a criminal records check</a>
                                                <a href="/" className="cursor-pointer hover:underline">Apply for a criminal record suspension</a>
                                                <a href="/" className="cursor-pointer hover:underline">What to do during an emergency</a>
                                                <a href="/" className="cursor-pointer hover:underline">Know the law on impaired driving</a>
                                                <a href="/" className="cursor-pointer hover:underline">Help solve a crime</a>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Transport and infrastructure</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Transport and infrastructure</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Aviation</a>
                                                <a href="/" className="cursor-pointer hover:underline">Marine transportation</a>
                                                <a href="/" className="cursor-pointer hover:underline">Road transportation</a>
                                                <a href="/" className="cursor-pointer hover:underline">Rail transportation</a>
                                                <a href="/" className="cursor-pointer hover:underline">Dangerous goods</a>
                                                <a href="/" className="cursor-pointer hover:underline">Infrastructure</a>
                                                <a href="/" className="cursor-pointer hover:underline">Zero-emission vehicles</a>
                                                <a href="/" className="cursor-pointer hover:underline">Drone safety</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">What you can't bring on an airplane</a>
                                                <a href="/" className="cursor-pointer hover:underline">Register your vessel</a>
                                                <a href="/" className="cursor-pointer hover:underline">Child car seat safety</a>
                                                <a href="/" className="cursor-pointer hover:underline">Transporting dangerous goods - Regulations</a>
                                                <a href="/" className="cursor-pointer hover:underline">Canadian Aviation Regulations</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Canada and the world</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Canada and the world</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Food and nutrition</a>
                                                <a href="/" className="cursor-pointer hover:underline">Diseases and conditions</a>
                                                <a href="/" className="cursor-pointer hover:underline">Vaccines and immunization</a>
                                                <a href="/" className="cursor-pointer hover:underline">Drug and health products</a>
                                                <a href="/" className="cursor-pointer hover:underline">Product safety</a>
                                                <a href="/" className="cursor-pointer hover:underline">Health risks and safety</a>
                                                <a href="/" className="cursor-pointer hover:underline">Healthy living</a>
                                                <a href="/" className="cursor-pointer hover:underline">Indigenous health</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Health system and services</a>
                                                <a href="/" className="cursor-pointer hover:underline">Science, research and data</a>
                                                <a href="/" className="cursor-pointer hover:underline">Licensed cultivators, processors and seller of cannabis</a>
                                                <a href="/" className="cursor-pointer hover:underline">Food and product recalls and safety alerts</a>
                                                <a href="/" className="cursor-pointer hover:underline">Canada's food guide</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Money and finances</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Money and finances</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Managing your money</a>
                                                <a href="/" className="cursor-pointer hover:underline">Debt and borrowing</a>
                                                <a href="/" className="cursor-pointer hover:underline">Savings and investments</a>
                                                <a href="/" className="cursor-pointer hover:underline">Education funding</a>
                                                <a href="/" className="cursor-pointer hover:underline">Pensions and retirement</a>
                                                <a href="/" className="cursor-pointer hover:underline">Protection from frauds and scams</a>
                                                <a href="/" className="cursor-pointer hover:underline">Financial tools and calculators</a>
                                                <a href="/" className="cursor-pointer hover:underline">Financial literacy programs</a>
                                                <a href="/" className="cursor-pointer hover:underline">Consumer affairs</a>
                                                <a href="/" className="cursor-pointer hover:underline">Insolvency</a>
                                                <a href="/" className="cursor-pointer hover:underline">Taxes</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">Government finances</a>
                                                <a href="/" className="cursor-pointer hover:underline">Business grants and financing</a>
                                                <a href="/" className="cursor-pointer hover:underline">Financial and money services regulation</a>
                                                <a href="/" className="cursor-pointer hover:underline">Find a bankruptcy or insolvency record</a>
                                                <a href="/" className="cursor-pointer hover:underline">Student loans</a>
                                                <a href="/" className="cursor-pointer hover:underline">Set up direct deposit</a>
                                                <a href="/" className="cursor-pointer hover:underline">Mortgages</a>
                                                <a href="/" className="cursor-pointer hover:underline">Credit report and scores</a>
                                                <a href="/" className="cursor-pointer hover:underline">Make a budget</a>
                                                <a href="/" className="cursor-pointer hover:underline">Rates and contribution limits</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                                        <span className="md:text-[20px]  text-[12.22px]">Science and innovation</span>
                                        <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                                            <div className="flex flex-col gap-4">
                                                <h1 className="md:text-2xl  text-[15px] underline font-bold">Science and innovation</h1>
                                                <a href="/" className="cursor-pointer hover:underline">Research funding and awards</a>
                                                <a href="/" className="cursor-pointer hover:underline">Science subjects</a>
                                                <a href="/" className="cursor-pointer hover:underline">Open data, statistics and archives</a>
                                                <a href="/" className="cursor-pointer hover:underline">Research institutes and facilities</a>
                                                <a href="/" className="cursor-pointer hover:underline">R&D and innovation</a>
                                                <a href="/" className="cursor-pointer hover:underline">Intellectual property and copyright</a>
                                                <a href="/" className="cursor-pointer hover:underline">Directory of scientists and research professionals</a>
                                                <a href="/" className="cursor-pointer hover:underline">Science education resources</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="/" className="cursor-pointer hover:underline">National building codes</a>
                                                <a href="/" className="cursor-pointer hover:underline">Official times across Canada</a>
                                                <a href="/" className="cursor-pointer hover:underline">Check sunrise and sunset times</a>
                                                <a href="/" className="cursor-pointer hover:underline">Grants for technological innovation (IRAP)</a>
                                                <a href="/" className="cursor-pointer hover:underline">Federal Science Library</a>
                                                <a href="/" className="cursor-pointer hover:underline">Live view of northern lights cam</a>
                                            </div>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}


export function MaterialSymbolsKeyboardArrowDownRounded(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"></path></svg>
    )
}

export function MaterialSymbolsSearchCheck(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" {...props}><path fill="white" d="M8.95 11.8L6.525 9.4l1.05-1.05l1.35 1.35l2.5-2.5l1.05 1.05L8.95 11.8ZM19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"></path></svg>
    )
}
export default Header