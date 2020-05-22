'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class AeotecSmartSwitchDevice extends ZwaveDevice {

  onMeshInit() {
    this.registerCapability('onoff', 'SWITCH_BINARY');
    this.registerCapability('measure_power', 'METER');
    this.registerCapability('meter_power', 'METER');

    this.registerSetting('80', input => Buffer.from([(input) ? 2 : 0]));
  }

}

module.exports = AeotecSmartSwitchDevice;
