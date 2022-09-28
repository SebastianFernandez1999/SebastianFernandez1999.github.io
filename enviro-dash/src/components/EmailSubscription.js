import React from "react";
import { useState, useEffect } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';


function EmailSubscription(props) {

    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setMessage(event.target.value);
    };

    function addEmail(device_list) {
        axios.put('email/update/', {
            devices: device_list,
            email: message
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    return (
        <div className="emailBox">
            <Box>
                <div className="emailTextBox">
                    <TextField 
                        id="outlined-basic"
                        onChange={event => handleChange(event)}
                        label="Email" 
                        variant="outlined"
                    />

                    {/* {error && <h4 style={{ color: 'red' }}>{error}</h4>} */}

                </div>

                <div>
                    <Button
                    style={{ margin: 8, minWidth: '150px' }}
                        variant="contained"
                        onClick={() => {
                            addEmail(props.selected_device)
                        }}>Subscribe To Device
                    </Button>

                    <Button
                      style={{ margin: 8, minWidth: '150px' }}
                        variant="contained"
                        onClick={() => {
                            addEmail(props.all_devices)
                        }}>Subscribe To All
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default EmailSubscription;