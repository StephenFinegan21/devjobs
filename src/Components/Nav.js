import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="bg-purple max-w-full mx-auto h-32 rounded-bl-full ">
            <div className="w-4/5 mx-auto h-20">
            <Link to={`/`}>
            <h2 className="pl-4 pt-8 text-offWhite text-center md:text-left md:font-medium md:text-xl">DevJobs</h2>
            </Link>
            </div>
        </div>
    )
}
export default Nav
