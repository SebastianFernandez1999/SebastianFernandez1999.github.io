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
axios.get(`https://3.215.139.186/data`).then(response => {
  console.log(response.data);
  measurements = response.data;
  return measurements;
});
 axios.get(`http://3.215.139.186/threshold`, {
   reponseType: "json",
 }).then(response => {
  console.log(response.data);
   thresholds = response.data;
   return thresholds;
 });
 axios.get(`http://3.215.139.186/warnings`, {
   responseType: "json",
 }).then(response => {
   warnings = response.data;
   return warnings;
 })

//Setting a timeout so that axios is actually able to grab the data- need some sort of await thing
setTimeout(() => root.render(
  <div>
  <div>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
  </div>
  <App
    data={measurements}
    thresholds={thresholds}
    warnings = {warnings}
  />
  </div>

), 5000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
