'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class ZW140 extends ZwaveDevice {

  onMeshInit() {
    this.registerCapability('onoff', 'BASIC');
  }

}

module.exports = ZW140;
