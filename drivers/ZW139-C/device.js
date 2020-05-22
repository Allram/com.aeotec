'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class ZW139 extends ZwaveDevice {

  onMeshInit() {
    this.registerCapability('onoff', 'SWITCH_BINARY');

    this.registerReportListener('BASIC', 'BASIC_SET', report => {
      this.setCapabilityValue('onoff', !!report.Value);
    });
  }

}

module.exports = ZW139;
