import React from 'react'
import { Link } from "gatsby";

import companyLogo from "../images/EJLogo.png";
import planeA320 from "../images/planeA320FO.jpg";
// import planeB737 from "../images/planeB737.jpg";
// import planeB737NG from "../images/planeB737NG.jpg";
// import planeSaab340 from "../images/planeSaab340.jpg";
// import planeERJ145 from "../images/planeERJ145.jpg";
// import planeShorts360 from "../images/Shorts360.jpg";
// import planeLearjet35 from "../images/planeLearjet35.jpg";
// import planeLearjetEASA from "../images/planeLearjetEASA.jpg";

const keyLayout = () => {

    const A320_B737NG_FIRST_OFFICER_CARD_DETAILS = [
        {

            title: 'A320 First Officer',
            description: 'Airline Operator Conversion Course + 300 or 500 Hours as an A320 First Officer including the A320 First Officer Line Check',
            experienceRequire: 'European EASA A320 Type Rating is Required.',
            ageRequire: 'No Age or Flight Time Requirement.',
            nationality: 'Any Nationality',
            price: 'Depends on Partner Airline'

        }, {

            title: 'B737 First Officer',
            description: 'Airline Operator Conversion Course + 300 or 500 Hours as a B737 First Officer including the B737 First Officer Line Check',
            experienceRequire: 'European EASA B737 Type Rating is Required.',
            ageRequire: 'No Age or Flight Time Requirement.',
            nationality: 'European Union Passport or Permission to Live & Work in the EU.',
            price: 'Depends on Partner Airline'

        }
        , {

            title: 'B737 NG Type Rating + First Officer with European EASA Airline',
            description: 'EASA B737 NG Type Rating + EASA Airline Operator Conversion Course + Options of 200 and 500 Hours as a B737 NG First Officer including the EASA B737 NG First Officer Line Check.',
            experienceRequire: 'EASA Frozen ATPL, MCC, European Union Passport Required',
            ageRequire: 'Under 46 Years Old is Required. No Flight Time Requirement.',
            nationality: 'European Union Passport or Permission to Live & Work in the EU.',
            price: '€44,500 Euros- 200 Hour Program €63,500 Euros- 500 Hour Program'

        }

    ]

    const MULTI_CREW_CERTIFIED_REGIONAL_JET_HEAVY_TURBOPROP_CARD_DETAILS = [
        {

            title: 'Heavy Turboprop Saab 340 or Embraer Brasilia Type Rating + First Officer Experience',
            description: 'Saab 340 or Embraer Brasilia Type Rating Course, Airline Operator Conversion Course, First Officer Line Check and First Officer Experience for 500 or 1250 hours During Passenger Scheduled Operations.',
            experienceRequire: 'Commercial Pilot License with Instrument & Multi Engine Ratings issued by Any Aviation Authority is Required.',
            flight_NationalityRequire: 'No Flight Time Requirement. Any Nationality Can Apply.',
            price: 'Depends on Partner Airline'

        }, {

            title: 'Turbojet ERJ-145 Type Rating + First Officer Experience',
            description: 'ERJ-145 Type Rating Course, Airline Operator Conversion Course, First Officer Line Check and First Officer Experience for 500 or 1250 hours During Passenger Scheduled Operations.',
            experienceRequire: 'Commercial Pilot License with Instrument & Multi Eng',
            flight_NationalityRequire: 'No Flight Time Requirement. Any Nationality Can Apply.',
            price: 'Depends on Partner Airline'

        },

    ]

    const FIRST_OFFICER_EMPLOYMENT_USA_PILOTS_CARD_DETAILS = [
        {

            title: 'FIRST OFFICER EMPLOYMENT IN THE USA FOR PILOTS HOLDING A US PASSPORT OR GREEN CARD',
            description: 'FAA Shorts 360 Type Rating, Part 135 Basic Indoctrination Course, First Officer Line Check and First Officer Employment.',
            experienceRequire: 'FAA Commercial Pilot License with Instrument & Multiengine Ratings is required. No Minimum Flight Time Required.',
            price: '$19,500 USD'

        },
        {

            title: 'Learjet 35 FAA Type Rating + First Officer Employment',
            description: 'FAA Learjet 35 Type Rating, Part 135 Basic Indoctrination Course, First Officer Line Check and First Officer Employment in South Florida.',
            experienceRequire: 'FAA Commercial Pilot License with Instrument & Multiengine Ratings is required. 500 Hours Total Time is required.',
            price: '$19,500 USD'

        }

    ]

    const EASA_MULTI_CREW_CERTIFIED_EXECUTIVE_JET_DETAILS = [

        {

            title: 'Learjet 60 EASA Type Rating + First Officer Employment in Europe',
            description: 'EASA Learjet 60 Type Rating, Operator Conversion Course and Employment',
            experience: 'EASA Frozen ATPL, MCC & EU Passport is required. 500 Hours Total Time Required.',
            price: '€35,500 Euros'

        }

    ]

    const A320_B737NG_FIRST_OFFICER_CARDS = A320_B737NG_FIRST_OFFICER_CARD_DETAILS.map((card) => {

        return (<div key={card.title} className="mt-8 max-w-sm max-w-lg sm:max-w-lg md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

            <img className="w-full" src={planeA320} alt="plane A320" />

            <div className="px-10 py-4">

                <div className="font-bold text-xl mb-2 text-center">{card.title}</div>

                <ul className="list-disc">

                    <li className="text-gray-700 text-base mt-5">{card.description}</li>
                    <li className="text-gray-700 text-base mt-5">{card.experienceRequire}</li>
                    <li className="text-gray-700 text-base mt-5">{card.ageRequire}</li>
                    <li className="text-gray-700 text-base mt-5">{card.nationality}</li>
                    <li className="text-gray-700 text-base mt-5 mb-5">Price: {card.price}</li>

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

        </div>)

    })

    const MULTI_CREW_CERTIFIED_REGIONAL_JET_HEAVY_TURBOPROP_CARDS_ = MULTI_CREW_CERTIFIED_REGIONAL_JET_HEAVY_TURBOPROP_CARD_DETAILS.map((card) => {

        return (<div key={card.title} className="mt-8 max-w-sm max-w-lg sm:max-w-lg md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

            <img className="w-full" src={planeA320} alt="plane A320" />

            <div className="px-10 py-4">

                <div className="font-bold text-xl mb-2 text-center">{card.title}</div>

                <ul className="list-disc">

                    <li className="text-gray-700 text-base mt-5">{card.description}</li>
                    <li className="text-gray-700 text-base mt-5">{card.experienceRequire}</li>
                    <li className="text-gray-700 text-base mt-5">{card.flight_NationalityRequire}</li>
                    <li className="text-gray-700 text-base mt-5 mb-5">Price: {card.price}</li>

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

        </div>)

    })

    const FIRST_OFFICER_EMPLOYMENT_USA_PILOTS_CARDS = FIRST_OFFICER_EMPLOYMENT_USA_PILOTS_CARD_DETAILS.map((card) => {

        return (<div key={card.title} className="mt-8 max-w-sm max-w-lg sm:max-w-lg md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

            <img className="w-full" src={planeA320} alt="plane A320" />

            <div className="px-10 py-4">

                <div className="font-bold text-xl mb-2 text-center">{card.title}</div>

                <ul className="list-disc">

                    <li className="text-gray-700 text-base mt-5">{card.description}</li>
                    <li className="text-gray-700 text-base mt-5">{card.experienceRequire}</li>
                    <li className="text-gray-700 text-base mt-5 mb-5">Price: {card.price}</li>

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

        </div>)

    })

    const EASA_MULTI_CREW_CERTIFIED_EXECUTIVE_JET_CARDS = EASA_MULTI_CREW_CERTIFIED_EXECUTIVE_JET_DETAILS.map((card) => {

        return (<div key={card.title} className="mt-8 max-w-sm max-w-lg sm:max-w-lg md:max-w-xl lg:max-w-xl rounded overflow-hidden shadow-lg">

            <img className="w-full" src={planeA320} alt="plane A320" />

            <div className="px-10 py-4">

                <div className="font-bold text-xl mb-2 text-center">{card.title}</div>

                <ul className="list-disc">

                    <li className="text-gray-700 text-base mt-5">{card.description}</li>
                    <li className="text-gray-700 text-base mt-5">{card.experience}</li>
                    <li className="text-gray-700 text-base mt-5 mb-5">Price: {card.price}</li>

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

        </div>)

    })

    const allCards = [...A320_B737NG_FIRST_OFFICER_CARDS,
    ...MULTI_CREW_CERTIFIED_REGIONAL_JET_HEAVY_TURBOPROP_CARDS_,
    ...FIRST_OFFICER_EMPLOYMENT_USA_PILOTS_CARDS,
    ...EASA_MULTI_CREW_CERTIFIED_EXECUTIVE_JET_CARDS]



    return (

        <div className="mx-auto sm:max-w-3xl md:max-w-6xl ">

            <div className=" flex justify-center mt-8 " >

                <figure className=" w-4/6 md:w-4/6 ">
                    <img alt="Eaglejet logo" src={companyLogo} />
                </figure>

            </div>


            <div className="mt-12 px-6 flex flex-col items-center  ">


                {allCards}

            </div>

        </div>

    )

}

export default keyLayout
