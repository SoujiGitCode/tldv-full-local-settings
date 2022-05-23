import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {  BrowserRouter as Router} from 'react-router-dom'
import axios from "axios"
import Div100vh from 'react-div-100vh'

const root = ReactDOM.createRoot(document.getElementById('root'))
//axios.defaults.baseURL = "http://localhost:1337/api/"
axios.defaults.baseURL = "https://obscure-beyond-28397.herokuapp.com/api"


root.render(
    <Router basename='/'>
        <Div100vh className="">
                <App />
        </Div100vh>
    </Router>

);
