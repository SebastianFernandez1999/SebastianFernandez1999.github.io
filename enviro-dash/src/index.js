import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

var measurements = {};
var thresholds = {};
var warnings = {};
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.get(`http://3.95.173.161/data/`).then(response => {
  measurements = response.data;
  return measurements;
});
 axios.get(`http://3.95.173.161/threshold/`, {
   reponseType: "json",
 }).then(response => {
   thresholds = response.data;
   return thresholds;
 });
 axios.get(`http://3.95.173.161/warnings/`, {
   responseType: "json",
 }).then(response => {
   warnings = response.data;
   return warnings;
 })

//Setting a timeout so that axios is actually able to grab the data
setTimeout(() => root.render(

  <App
    data={measurements}
    thresholds={thresholds}
    warnings = {warnings}
  />

), 1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
