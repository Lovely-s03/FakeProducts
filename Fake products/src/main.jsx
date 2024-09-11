// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./global.css"
import {myStore} from "./redux/Store.js"
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={myStore}>
<App />
</Provider>)
