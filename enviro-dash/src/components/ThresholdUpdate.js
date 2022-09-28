import React from "react";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import axios from "axios";


function ThresholdUpdate(props) {

    const [device_name, setdevice_name] = useState(props.device_name);
    const [light_lower, setlight_lower] = useState(props.thresholds.light_lower);
    const [light_upper, setlight_upper] = useState(props.thresholds.light_upper);
    const [temperature_lower, settemperature_lower] = useState(props.thresholds.temperature_lower);
    const [temperature_upper, settemperature_upper] = useState(props.thresholds.temperature_upper);

    useEffect(() => {
        if (device_name !== props.device_name) {
            setlight_lower(props.thresholds.light_lower);
            setlight_upper(props.thresholds.light_upper);
            settemperature_lower(props.thresholds.temperature_lower);
            settemperature_upper(props.thresholds.temperature_upper);
            setdevice_name(props.device_name)
        }
    });

    function handleChangeTempUpper(temperature) {
        settemperature_upper(temperature.target.value)
    }

    function handleChangeTempLower(temperature) {
        settemperature_lower(temperature.target.value)
    }

    function handleChangeLightUpper(temperature) {
        setlight_upper(temperature.target.value)
    }

    function handleChangeLightLower(temperature) {
        setlight_lower(temperature.target.value)
    }

    function UpdateThresholds() {
        console.log("update")
        axios.put('threshold/update/', {
            device_name: props.device_name,
            light_lower: parseInt(light_lower, 10),
            light_upper: parseInt(light_upper, 10),
            temperature_lower: parseInt(temperature_lower, 10),
            temperature_upper: parseInt(temperature_upper, 10)
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    return (

        <div>
            <div>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        type="number"
                        id="outlined-adornment-weight"
                        value={temperature_upper}
                        onChange={event => handleChangeTempUpper(event)}
                        endAdornment={<InputAdornment position="end">&#8457;</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Temperature Threshold Upper</FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        type="number"
                        id="outlined-adornment-weight"
                        value={temperature_lower}
                        onChange={handleChangeTempLower}
                        endAdornment={<InputAdornment position="end">&#8457;</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Temperature Threshold Lower</FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        type="number"
                        id="outlined-adornment-weight"
                        value={light_upper}
                        onChange={handleChangeLightUpper}
                        endAdornment={<InputAdornment position="end">lux</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Light Threshold Upper</FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        type="number"
                        id="outlined-adornment-weight"
                        value={light_lower}
                        onChange={handleChangeLightLower}
                        endAdornment={<InputAdornment position="end">lux</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Light Threshold Lower</FormHelperText>
                </FormControl>
            </div>
            <div className="updateButtonContainer">
                <div className="updateButton">
                    <Button
                        variant="contained"
                        onClick={() => {
                            UpdateThresholds()
                        }}>Save Thresholds
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ThresholdUpdate;