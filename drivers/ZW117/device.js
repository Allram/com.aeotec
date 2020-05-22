'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class ZW117 extends ZwaveDevice {

  onMeshInit() {
    this.registerSetting('82', value => Buffer.from([Number(!value)]));
  }

}

module.exports = ZW117;
