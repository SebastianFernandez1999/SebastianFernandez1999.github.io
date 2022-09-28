import React from "react";
import DeviceButton from "./DeviceButton.js";
import { CSidebarNav } from '@coreui/react';

function Sidebar(props) {
    return (
        <div >
            <h3>Devices</h3>
            
                {props.devices.map(d => (
                    <DeviceButton
                        currentDivice = {props.device_name}
                        handleClick={props.handleClick}
                        name={d} />))}
          


        </div>
    )
}

function renderButton(device_name) {
    return (
        <DeviceButton name={device_name} />
    )
}

export default Sidebar;