import './App.scss';
import {Fragment, useEffect, useState} from "react";
import Sidebar from "./Components/Menu-Sidebar";

import UploadedVids from "./Components/UploadedVids";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import defaultThumbnail from "./Assets/Images/no-img.webp"

import ReactPlayer from 'react-player/youtube'
import EditVids from "./Components/EditVids";
import {Route, Routes} from "react-router-dom";
import AddVids from "./Components/AddVids/AddVids";


function App() {

    return (<Fragment>
            {/* Main Layout */}
                <div className="flex flex-row ">
                    {/* Sidebar */}
                    <Sidebar/>
                </div>

            <div className="md:ml-64">
                <Routes>
                    <Route path='/' element={<UploadedVids/>}/>
                    <Route path='/playlist' element={<UploadedVids/>}/>
                    <Route path='/edit' element={<EditVids/>}/>
                    <Route path='/add' element={<AddVids/>}/>

                    <Route path="*" element={<UploadedVids />}/>
                </Routes>
            </div>







        </Fragment>


    );
}

export default App;
