'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class AeotecSmartSwitchSevenDevice extends ZwaveDevice {

  onMeshInit() {
    this.registerCapability('onoff', 'SWITCH_BINARY');
    this.registerCapability('measure_power', 'METER');
    this.registerCapability('meter_power', 'METER');

    this.registerSetting('80', value => Buffer.from([(value) ? 2 : 0]));
  }

}

module.exports = AeotecSmartSwitchSevenDevice;
