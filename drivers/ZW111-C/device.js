'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class ZW111C extends ZwaveDevice {

  onMeshInit() {
    this.registerCapability('onoff', 'SWITCH_BINARY');
    this.registerCapability('dim', 'SWITCH_MULTILEVEL');

    this.registerCapability('measure_power', 'METER');
    this.registerCapability('meter_power', 'METER');

    this.registerReportListener('BASIC', 'BASIC_SET', report => {
      this.setCapabilityValue('onoff', !!report.Value);
    });
  }

}

module.exports = ZW111C;
