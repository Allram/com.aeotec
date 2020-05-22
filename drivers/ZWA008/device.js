
'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class AeotecDoorSensorSeven extends ZwaveDevice {

  onMeshInit() {
    this.registerCapability('alarm_contact', 'NOTIFICATION');
    this.registerCapability('alarm_tamper', 'NOTIFICATION');
    this.registerCapability('measure_battery', 'BATTERY');
  }

}

module.exports = AeotecDoorSensorSeven;
