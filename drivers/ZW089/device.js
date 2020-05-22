'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class AeotecRecessedContactDevice extends ZwaveDevice {

  onMeshInit() {
    this.registerCapability('alarm_contact', 'SENSOR_BINARY');
    this.registerCapability('measure_battery', 'BATTERY');
  }

}

module.exports = AeotecRecessedContactDevice;
