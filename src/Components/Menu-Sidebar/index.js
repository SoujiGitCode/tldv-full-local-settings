import React from "react"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPlus, faWandMagicSparkles} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <Header
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />

            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a href="/" className="mt-2 text-center w-full inline-block">
                        <h1 className="text-xl font-bold" data-testid="brand">tl;dv</h1>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/playlist"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                >
                                    <div className={"sidebar-icon group"}>
                                        <FontAwesomeIcon icon={faPlay} size={"lg"}/>
                                        <span className={"sidebar-link-name group-hover:scale-100"}>Playlist &#10148;</span>
                                    </div>

                                    <div className={"flex-auto"}>
                                        Playlist
                                    </div>

                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/edit"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                >
                                    <div className={"sidebar-icon group"}>
                                        <FontAwesomeIcon icon={faWandMagicSparkles} size={"lg"}/>
                                        <span className={"sidebar-link-name group-hover:scale-100"}>Edit &#9998;</span>
                                    </div>

                                    <div className={"flex-auto"}>
                                        Edit
                                    </div>

                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/add"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                >
                                    <div className={"sidebar-icon group"}>
                                        <FontAwesomeIcon icon={faPlus} size={"lg"}/>
                                        <span className={"sidebar-link-name group-hover:scale-100"}>Add &#10009;</span>
                                    </div>

                                    <div className="flex-auto">
                                        Add
                                    </div>

                                </NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
}
