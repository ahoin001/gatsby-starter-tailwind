import React from 'react'
import { Link } from "gatsby";

import companyLogo from "../images/EJLogo.png";
import planeA320 from "../images/planeA320FO.jpg";
import planeB737 from "../images/planeB737.jpg";
import planeB737NG from "../images/planeB737NG.jpg";
import planeSaab340 from "../images/planeSaab340.jpg";
import planeERJ145 from "../images/planeERJ145.jpg";
import planeShorts360 from "../images/Shorts360.jpg";
import planeLearjet35 from "../images/planeLearjet35.jpg";
import planeLearjetEASA from "../images/planeLearjetEASA.jpg";

const priceCards = () => {



    return (

        <div className="mx-auto sm:max-w-3xl md:max-w-6xl ">

            <div className=" flex justify-center mt-8 " >

                <figure className=" w-4/6 md:w-4/6 ">
                    <img alt="Eaglejet logo" src={companyLogo} />
                </figure>

            </div>


            <div className="mt-12 px-6 flex flex-col items-center  ">



                <div className="px-8 py-8 w-4/5 text-gray-500 bg-blue-900">

                    A320 & B737 NG FIRST OFFICER EMPLOYMENT & EXPERIENCE

                </div>

                <div className="mt-8 max-w-sm max-w-lg sm:max-w-lg md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

                    <img className="w-full" src={planeA320} alt="plane A320" />

                    <div className="px-10 py-4">

                        <div className="font-bold text-xl mb-2 text-center">A320 First Officer</div>

                        <ul className="list-disc">

                            <li className="text-gray-700 text-base mt-5">Airline Operator Conversion Course + 300 or 500 Hours as an A320 First Officer including the A320 First Officer Line Check</li>
                            <li className="text-gray-700 text-base mt-5">European EASA A320 Type Rating is Required.</li>
                            <li className="text-gray-700 text-base mt-5">No Age or Flight Time Requirement.</li>
                            <li className="text-gray-700 text-base mt-5">Any Nationality</li>
                            <li className="text-gray-700 text-base mt-5 mb-5">Price: Depends on Partner Airline</li>

                        </ul>

                        {/* For other effects i may use */}
                        {/* <button className="bg-blue-500 text-center lg:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Request More Information
                        </button> */}

                        <div className="flex justify-center">

                            <Link className="flex items-center no-underline text-white" to="/">
                                <p href="#"
                                    className="inline-block text-center px-5 py-3 mb-6 rounded-lg shadow-lg bg-indigo-500 
                            text-sm text-white uppercase tracking-wider font-semibold sm:text-base
                            lg:hover:bg-blue-700 "
                                >
                                    Request More Information
                            </p>

                            </Link>

                        </div>

                    </div>

                </div>

                <div className=" mt-12 max-w-lg sm:max-w-md md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

                    <img className="w-full" src={planeB737} alt="B737" />

                    <div className="px-10 py-4">

                        <div className="font-bold text-xl mb-2 text-center">B737 First Officer</div>

                        <ul className="list-disc">

                            <li className="text-gray-700 text-base mt-5">Airline Operator Conversion Course + 300 or 500 Hours as a B737 First Officer including the B737 First Officer Line Check</li>
                            <li className="text-gray-700 text-base mt-5">European EASA B737 Type Rating is Required.</li>
                            <li className="text-gray-700 text-base mt-5">No Age or Flight Time Requirement.</li>
                            <li className="text-gray-700 text-base mt-5">European Union Passport or Permission to Live & Work in the EU.</li>
                            <li className="text-gray-700 text-base mt-5 mb-5">Price: Depends on Partner Airline</li>

                        </ul>

                        <div className="flex justify-center">

                            <Link className="flex items-center no-underline text-white" to="/">
                                <p href="#"
                                    className="inline-block text-center px-5 py-3 mb-6 rounded-lg shadow-lg bg-indigo-500 
                            text-sm text-white uppercase tracking-wider font-semibold sm:text-base
                            lg:hover:bg-blue-700 "
                                >
                                    Request More Information
                            </p>

                            </Link>

                        </div>

                    </div>

                </div>

                <div className=" mt-12 max-w-lg sm:max-w-md md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

                    <img className="w-full" src={planeB737NG} alt="B737NG" />

                    <div className="px-10 py-4">

                        <div className="font-bold text-xl mb-2 text-center">B737 NG Type Rating + First Officer with European EASA Airline</div>

                        <ul className="list-disc">

                            <li className="text-gray-700 text-base mt-5">EASA B737 NG Type Rating + EASA Airline Operator Conversion Course + Options of 200 and 500 Hours as a B737 NG First Officer including the EASA B737 NG First Officer Line Check.</li>
                            <li className="text-gray-700 text-base mt-5">EASA Frozen ATPL, MCC, European Union Passport & Under 46 Years Old is Required.</li>
                            <li className="text-gray-700 text-base mt-5">No Flight Time Requirement.</li>
                            <li className="text-gray-700 text-base mt-5">European Union Passport or Permission to Live & Work in the EU.</li>
                            <li className="text-gray-700 text-base mt-5 mb-5">Price: €44,500 Euros- 200 Hour Program
€63,500 Euros- 500 Hour Program</li>

                        </ul>

                        <div className="flex justify-center">

                            <Link className="flex items-center no-underline text-white" to="/">
                                <p href="#"
                                    className="inline-block text-center px-5 py-3 mb-6 rounded-lg shadow-lg bg-indigo-500 
                            text-sm text-white uppercase tracking-wider font-semibold sm:text-base
                            lg:hover:bg-blue-700 "
                                >
                                    Request More Information
                            </p>

                            </Link>

                        </div>

                    </div>

                </div>

                <div className="px-8 py-8 mt-8 w-4/5 text-gray-500 bg-blue-900">

                    MULTI CREW CERTIFIED REGIONAL JET & HEAVY TURBOPROP
                </div>

                <div className="mt-8 max-w-lg sm:max-w-md md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

                    <img className="w-full" src={planeSaab340} alt="plane Saab340" />

                    <div className="px-10 py-4">

                        <div className="font-bold text-xl mb-2 text-center">Heavy Turboprop Saab 340 or Embraer Brasilia Type Rating + First Officer Experience</div>

                        <ul className="list-disc">

                            <li className="text-gray-700 text-base mt-5">Saab 340 or Embraer Brasilia Type Rating Course, Airline Operator Conversion Course, First Officer Line Check and First Officer Experience for 500 or 1250 hours During Passenger Scheduled Operations.</li>
                            <li className="text-gray-700 text-base mt-5">Commercial Pilot License with Instrument & Multi Engine Ratings issued by Any Aviation Authority is Required.</li>
                            <li className="text-gray-700 text-base mt-5">No Flight Time Requirement.  Any Nationality Can Apply..</li>
                            <li className="text-gray-700 text-base mt-5 mb-5">Price: Depends on Partner Airline</li>

                        </ul>

                        <div className="flex justify-center">

                            <Link className="flex items-center no-underline text-white" to="/">
                                <p href="#"
                                    className="inline-block text-center px-5 py-3 mb-6 rounded-lg shadow-lg bg-indigo-500 
                            text-sm text-white uppercase tracking-wider font-semibold sm:text-base
                            lg:hover:bg-blue-700 "
                                >
                                    Request More Information
                            </p>

                            </Link>

                        </div>

                    </div>

                </div>

                <div className=" mt-12 max-w-lg sm:max-w-md md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

                    <img className="w-full" src={planeERJ145} alt="plane Turbojet ERJ-145 " />

                    <div className="px-10 py-4">

                        <div className="font-bold text-xl mb-2 text-center">Turbojet ERJ-145 Type Rating + First Officer Experience</div>

                        <ul className="list-disc">

                            <li className="text-gray-700 text-base mt-5">ERJ-145 Type Rating Course, Airline Operator Conversion Course, First Officer Line Check and First Officer Experience for 500 or 1250 hours During Passenger Scheduled Operations.</li>
                            <li className="text-gray-700 text-base mt-5">Commercial Pilot License with Instrument & Multi Eng</li>
                            <li className="text-gray-700 text-base mt-5">No Flight Time Requirement.  Any Nationality Can Apply.</li>
                            <li className="text-gray-700 text-base mt-5 mb-5">Price: Depends on Partner Airline  </li>

                        </ul>

                        <div className="flex justify-center">

                            <Link className="flex items-center no-underline text-white" to="/">
                                <p href="#"
                                    className="inline-block text-center px-5 py-3 mb-6 rounded-lg shadow-lg bg-indigo-500 
                            text-sm text-white uppercase tracking-wider font-semibold sm:text-base
                            lg:hover:bg-blue-700 "
                                >
                                    Request More Information
                            </p>

                            </Link>

                        </div>

                    </div>

                </div>

                <div className="px-8 py-8 mt-8 w-4/5 text-gray-500 bg-blue-900">

                    FIRST OFFICER EMPLOYMENT IN THE USA FOR PILOTS HOLDING
                    A US PASSPORT OR GREEN CARD
                </div>

                <div className="mt-8 max-w-lg sm:max-w-md md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

                    <img className="w-full" src={planeShorts360} alt="Heavy Turboprop Shorts 360 " />

                    <div className="px-10 py-4">

                        <div className="font-bold text-xl mb-2 text-center">Heavy Turboprop Shorts 360 FAA Type Rating + First Officer Employment</div>

                        <ul className="list-disc">

                            <li className="text-gray-700 text-base mt-5">FAA Shorts 360 Type Rating, Part 135 Basic Indoctrination Course, First Officer Line Check and First Officer Employment.</li>
                            <li className="text-gray-700 text-base mt-5">FAA Commercial Pilot License with Instrument & Multiengine Ratings is required. No Minimum Flight Time Required.</li>
                            <li className="text-gray-700 text-base mt-5 mb-5">Price: $19,500 USD</li>

                        </ul>

                        <div className="flex justify-center">

                            <Link className="flex items-center no-underline text-white" to="/">
                                <p href="#"
                                    className="inline-block text-center px-5 py-3 mb-6 rounded-lg shadow-lg bg-indigo-500 
                            text-sm text-white uppercase tracking-wider font-semibold sm:text-base
                            lg:hover:bg-blue-700 "
                                >
                                    Request More Information
                            </p>

                            </Link>

                        </div>

                    </div>

                </div>

                <div className=" mt-12 max-w-lg sm:max-w-md md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

                    <img className="w-full" src={planeLearjet35} alt="Learjet 35 FAA " />

                    <div className="px-10 py-4">

                        <div className="font-bold text-xl mb-2 text-center">
                            Learjet 35 FAA Type Rating + First Officer Employment</div>

                        <ul className="list-disc">

                            <li className="text-gray-700 text-base mt-5">FAA Learjet 35 Type Rating, Part 135 Basic Indoctrination Course, First Officer Line Check and First Officer Employment in South Florida.</li>
                            <li className="text-gray-700 text-base mt-5">FAA Commercial Pilot License with Instrument & Multiengine Ratings is required. 500 Hours Total Time is required.</li>
                            <li className="text-gray-700 text-base mt-5 mb-5">Price: $19,500 USD</li>

                        </ul>

                        <div className="flex justify-center">

                            <Link className="flex items-center no-underline text-white" to="/">
                                <p href="#"
                                    className="inline-block text-center px-5 py-3 mb-6 rounded-lg shadow-lg bg-indigo-500 
                            text-sm text-white uppercase tracking-wider font-semibold sm:text-base
                            lg:hover:bg-blue-700 "
                                >
                                    Request More Information
                            </p>

                            </Link>


                        </div>

                    </div>

                </div>



                {/* After here */}


                <div className="px-8 py-8 mt-8 w-4/5 text-gray-500 bg-blue-900">

                    EASA MULTI CREW CERTIFIED EXECUTIVE JET
                </div>

                <div className="mt-8 max-w-lg sm:max-w-md md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

                    <img className="w-full" src={planeLearjetEASA} alt="Heavy Turboprop Shorts 360 " />

                    <div className="px-10 py-4">

                        <div className="font-bold text-xl mb-2 text-center">Learjet 60 EASA Type Rating + First Officer Employment in Europe</div>

                        <ul className="list-disc">

                            <li className="text-gray-700 text-base mt-5">EASA Learjet 60 Type Rating, Operator Conversion Course and Employment</li>
                            <li className="text-gray-700 text-base mt-5">EASA Frozen ATPL, MCC & EU Passport is required.  500 Hours Total Time Required.</li>
                            <li className="text-gray-700 text-base mt-5">2 Week On / 2 Week Off Schedule. Free Hotel & Meals.</li>
                            <li className="text-gray-700 text-base mt-5 mb-5">Price: €35,500 Euros</li>

                        </ul>

                        <div className="flex justify-center">

                            <Link className="flex items-center no-underline text-white" to="/">
                                <p href="#"
                                    className="inline-block text-center px-5 py-3 mb-6 rounded-lg shadow-lg bg-indigo-500 
                            text-sm text-white uppercase tracking-wider font-semibold sm:text-base
                            lg:hover:bg-blue-700 "
                                >
                                    Request More Information
                            </p>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default priceCards
