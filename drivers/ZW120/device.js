'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class ZW120 extends ZwaveDevice {

  onMeshInit() {
    this.registerCapability('measure_battery', 'BATTERY');

    this.registerCapability('alarm_contact', 'BASIC');
    this.registerCapability('alarm_tamper', 'NOTIFICATION');
  }

}

module.exports = ZW120;
