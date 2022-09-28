import { Button } from "@mui/material";
import { useState, useEffect } from "react";



function DeviceButton(props) {

    return (
        <div>
            {props.name == props.currentDivice &&
                <Button
                    style={{ margin: 8, minWidth: '150px' }}
                    variant="contained"
                    onClick={event => props.handleClick(event, props.name)}>
                    {props.name}
                </Button>
            }
            {props.name != props.currentDivice &&
                <Button
                    style={{ margin: 8, minWidth: '150px' }}
                    variant="outlined"
                    onClick={event => props.handleClick(event, props.name)}>
                    {props.name}
                </Button>
            }
        </div>
    );
}


export default DeviceButton;