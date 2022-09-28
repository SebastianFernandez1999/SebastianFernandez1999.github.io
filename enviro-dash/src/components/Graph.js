
import React, { useState } from "react";
import TimeFilterMenu from "./TimeFilterMenu.js";
import FilterMeasurementBox from "./FilterMeasurementBox.js";
import Metrics from "./Metrics.js";
import WarningBox from "./WarningBox.js"

import Plot from 'react-plotly.js';
import ThresholdUpdate from "./ThresholdUpdate.js";
import EmailSubscription from "./EmailSubscription.js";
import { i } from "mathjs";

function Graph(props) {

    const [time, setTime] = useState(60);
    const [light, setLight] = useState(true);
    const [temp, setTemp] = useState(true);

    function filterTime(time, timestamps, data) {
        if (data === undefined) {
            var emptyList = []
            return emptyList;
        } else {
            var num15Intervals = numberOf15MinuteIntervals(time);
            var filteredData = []
            var currTime = new Date().getTime();
            currTime = currTime + 3600;
            var mostRecentTimestamp = timestamps[0];
            var lastTimeStamp = mostRecentTimestamp - timeToUnix(time);
            for (let i = 0; i < num15Intervals + 1; i++) {
                if (timestamps[i] >= lastTimeStamp) {
                    filteredData.push(data[i]);
                }
            }
            filteredData = filteredData.reverse();
            return filteredData;
        }

    }

    function numberOf15MinuteIntervals(time) {
        return time / 5;
    }

    function timeToUnix(time) {

        return time * 60;
    }

    function chooseDatasets(light, temp) {
        
        var datasets = [];
        var xAxis = filterTime(time, props.timestamps, props.dateTime);
        if(light&&temp){
            datasets.push(
                {
                    y: filterTime(time, props.timestamps, props.light_vals),
                    x: xAxis,
                    name: 'Light',
                    type: 'line'
                }
            );
            datasets.push(
                {
                    y: filterTime(time, props.timestamps, props.temperature_vals),
                    x: xAxis,
                    name: "Temperature",
                    type: 'line',
                    yaxis: 'y2'
                }
            );
            return datasets;
        }
        else if (light) {
            datasets.push(
                {
                    y: filterTime(time, props.timestamps, props.light_vals),
                    x: xAxis,
                    name: 'Light',
                    type: 'line'
                }
            )
            return datasets;
        }
        else if (temp) {
            datasets.push(
                {
                    y: filterTime(time, props.timestamps, props.temperature_vals),
                    x: xAxis,
                    name: "Temperature",
                    type: 'line'
                }
            )
            return datasets;
        }
        return datasets;
    }
    function chooseYAxes(light, temp) {
        console.log("choosing axes");
        var layout = {};
        if (light && temp) {
            layout.title = "Temperature and Light";
            layout.yaxis = {
                title: "Light",

            }
            layout.yaxis2 = {
                title: "Temperature",
                side: "right",
                overlaying: "y",
                titlefont: {color: 'rgb(148, 103, 189)'},
    tickfont: {color: 'rgb(148, 103, 189)'},
            }

        }
         else if (light) {
            layout.title = "Light"
             layout.yaxis = {
                 title: "Light"
            }
         }
         else if (temp) {
            layout.title = "Temperature"
             layout.yaxis = {
                 title: "Temperature"
             }
         }
        layout.height= 400
        layout.width= 1000
        return layout;
    }
    return (
        <div>
            <div>
                <div>
                    <div className="graph-space">
                        <FilterMeasurementBox className="measurement-filters"
                            lightStatus={light}
                            toggleLight={setLight}
                            tempStatus={temp}
                            toggleTemp={setTemp}
                        />

                        <Plot
                            data={chooseDatasets(light, temp)}
                            layout={chooseYAxes(light,temp)} 
                            />

                        <TimeFilterMenu className="time-filters"
                            currTime={time}
                            setTime={setTime}
                        />
                    </div>
                </div>




                <div>
                    <WarningBox warnings={filterTime(time, props.timestamps, props.warnings)} />


                </div>
            </div>


            <div className="thresholdUpdate">
                <ThresholdUpdate
                    device_name={props.selected_device}
                    thresholds={props.thresholds} />
            </div>
            <div className="metricsEmailRow">
                <div>
                    <Metrics
                        temp={filterTime(time, props.timestamps, props.temperature_vals)}
                        light={filterTime(time, props.timestamps, props.light_vals)}
                        lightStatus={light}
                        tempStatus={temp}
                    />
                </div>

                <div className="emailSubscription" >
                    <EmailSubscription
       
                        selected_device={props.selected_device}
                        all_devices={props.all_devices}
                    />
                </div>
            </div>
            </div>
           
    )
}


export default Graph