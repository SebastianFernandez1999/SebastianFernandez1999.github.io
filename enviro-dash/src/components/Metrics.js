import React from "react";
import { mean, std, min, max } from 'mathjs';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

function Metrics(props) {
    var avgLight;
    var stdLight;
    var minLight, maxLight;
    var avgTemp;
    var stdTemp;
    var minTemp, maxTemp;

    if (props.light.length != 0) {
        if (props.lightStatus) {
            avgLight = Math.round(mean(props.light) * 100) / 100;
            stdLight = Math.round(std(props.light) * 100) / 100;
            minLight = Math.round(min(props.light) * 100) / 100;
            maxLight = Math.round(max(props.light) * 100) / 100;
        }
    }
    if (props.temp.length != 0) {
        if (props.tempStatus) {
            avgTemp = Math.round(mean(props.temp) * 100) / 100;
            stdTemp = Math.round(std(props.temp) * 100) / 100;
            minTemp = Math.round(min(props.temp) * 100) / 100;
            maxTemp = Math.round(max(props.temp) * 100) / 100;
        }
    }

    return (
        <div>
            <FormGroup aria-label="position" row>
                <div style={{margin:10}}>
                    <h4>Temperature</h4>
                    <p>Average Temperature: {avgTemp}</p>
                    <p>Max Temperature: {maxTemp}</p>
                    <p>Mininum Temperature: {minTemp}</p>

                    <p>Standard Deviation: {stdTemp}</p>
                </div>
                <div style={{margin:10}}>
                    <h4>Light</h4>
                    <p>Average Lux: {avgLight}</p>
                    <p>Max Lux: {maxLight}</p>

                    <p>Minimum Lux: {minLight}</p>
                    <p>Standard Deviation: {stdLight}</p>

                </div>
            </FormGroup>
        </div>
    )
}
export default Metrics;