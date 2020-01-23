import React from 'react'
import contact1 from './contact1.png'
export default function Home()
{
    return(
        <div>
        <div className="col-xs-1 text-center mt-5">
            <h2 className="mb-5">Welcome To The Contact Manager Application!!!</h2>
            <img src={contact1} alt="man holding sign"/>
        </div>
    </div>
    )
}