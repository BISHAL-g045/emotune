import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="bg-gray-800 p-4 shadow-md  bg-opacity-70 fixed top-0 right-0 left-0">
            <div className="container mx-auto flex justify-between items-center">
                <h5 className="text-white text-xl font-bold">EmoTune</h5>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/home" className="text-white hover:text-gray-300 transition-colors duration-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="text-white hover:text-gray-300 transition-colors duration-300">Profile</Link>
                    </li>
                    <li>
                        <Link to="/video" className="text-white hover:text-gray-300 transition-colors duration-300">Video</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
