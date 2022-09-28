import React from "react";

import Graph from "./components/Graph.js";
import Sidebar from "./components/Sidebar.js";
import ThresholdUpdate from "./components/ThresholdUpdate.js";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./App.css"

class App extends React.Component {
  constructor(props) {

    super(props);
    this.handleDeviceChange = this.handleDeviceChange.bind(this);
    this.state = {
      devices: [],
      currentDevice: this.props.thresholds[0].device_name,
    }
  }

  handleDeviceChange(event, param) {
    this.setState({ currentDevice: param });
  }

  componentDidMount() {
    this.getListOfDevices();
  }

  getListOfDevices() {
    var l = [];
    var devices = this.props.thresholds;
    for (let i = 0; i < devices.length; i++) {
      l.push(devices[i].device_name);
    }
    this.setState({ devices: l });
  }

  getThresholds() {
    for (let i = 0; i < this.props.thresholds.length; i++) {
      if (this.props.thresholds[i].device_name === this.state.currentDevice) {
        return this.props.thresholds[i];
      }
    }
  }

  render() {
    var temperature_data = [];
    var light_data = [];
    var dateTime = [];
    var timestamps = [];
    for (let i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i].data.information.device_name === this.state.currentDevice) {
        light_data.push(this.props.data[i].data.light.value);
        temperature_data.push(this.props.data[i].data.temperature.value);
        timestamps.push(this.props.data[i].data.information.timestamp);
        dateTime.push(this.props.data[i].data.information.month + "/" +
          this.props.data[i].data.information.day + "/" +
          this.props.data[i].data.information.year + " (" +
          this.props.data[i].data.information.hour + ":" +
          this.props.data[i].data.information.minute + ":" +
          this.props.data[i].data.information.seconds + ")")
      }
    }

    return (
      <div>
        <br>
        </br>

        <div className="container">

   
              <Box >
                <div className="sideBar" >
                  <Sidebar
                    devices={this.state.devices}
                    handleClick={this.handleDeviceChange}
                    device_name={this.state.currentDevice}

                  />
                </div>
              </Box>
          

            

              <div className="graph">
                <Graph
                  all_devices={this.state.devices}
                  selected_device={this.state.currentDevice}
                  thresholds={this.getThresholds()}
                  timestamps={timestamps}
                  data={this.props.data}
                  dateTime={dateTime}
                  temperature_vals={temperature_data}
                  light_vals={light_data}
                  warnings = {this.props.warnings} />
              </div>
       



        </div>
      </div>
    );
  }



}









export default App;