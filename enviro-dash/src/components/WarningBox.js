import React from "react";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

function WarningBox(props) {
    console.log(props.warnings);
    function isEmpty(data) {
        if (data === undefined) {
            
            return true;
        }

        else {
            
            if (data.length === 0) return true;
            else return false;


        }
    }

    if (isEmpty(props.warnings)) {
        return (
            <div></div>
        )
    }
    else {
        return (
            //This should actually be a scrollable window
            <div>
                
                <CDropdown>
                    <CDropdownToggle>Warnings: {props.warnings.length}</CDropdownToggle>
                    <CDropdownMenu>
                     {props.warnings.map((warning)=>
                    <CDropdownItem >
                        Warning at {warning.data.information.hour}:{warning.data.information.minute}:{warning.data.information.seconds} on {warning.data.information.month}/{warning.data.information.day}
                        {/* {props.warnings[index].information.hour}/ {props.warnings[index].information.minute}  */}
                    </CDropdownItem>)} 
                    </CDropdownMenu>

                </CDropdown>
            </div>
        )
    }

}
export default WarningBox