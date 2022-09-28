import { CButtonGroup, CFormCheck, CFormSwitch } from '@coreui/react'
import React from "react"
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function FilterMeasurementBox(props) {
    return (
        <div>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>

                    <FormControlLabel
                        value="Light"
                        control={
                            <Switch
                                defaultChecked
                                label="Light"
                                onChange={event => props.toggleLight(!props.lightStatus)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />}
                        label="Light"
                        labelPlacement="top"
                    />

                    <FormControlLabel
                        value="Temperature"
                        control={
                            <Switch
                                defaultChecked
                                label="Temperature"
                                onChange={event => props.toggleTemp(!props.tempStatus)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />}
                        label="Temperature"
                        labelPlacement="top"
                    />

                </FormGroup>
            </FormControl>
            
        </div>
    )
}

export default FilterMeasurementBox
