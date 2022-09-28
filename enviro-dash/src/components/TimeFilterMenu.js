import React from "react";
import { CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem  } from '@coreui/react';


function TimeFilterMenu(props){
    return(
        <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }} className = "timemenu">
            <CDropdown>
                <CDropdownToggle color = "secondary"> Past {props.currTime} minutes</CDropdownToggle>
                <CDropdownMenu>
                    <CDropdownItem component = "button" onClick = {event =>props.setTime(15)}>Past 15 minutes</CDropdownItem>
                    <CDropdownItem component = "button" onClick = {event =>props.setTime(60)}>Past hour</CDropdownItem>
                    <CDropdownItem component = "button" onClick = {event =>props.setTime(720)}>Past 12 hours</CDropdownItem>
                    <CDropdownItem component = "button" onClick = {event =>props.setTime(1440)}>Past 24 hours</CDropdownItem>
                    <CDropdownItem component = "button" onClick = {event =>props.setTime(10080)}>Past week</CDropdownItem>
                    <CDropdownItem component = "button" onClick = {event =>props.setTime(302400)}>Past month</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
        </div>
    )
}
export default TimeFilterMenu