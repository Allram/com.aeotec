'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

const sceneMap = {
  1: '_pressTrigger',
  2: '_holdTrigger',
};

class AeotecPanicButtonDevice extends ZwaveDevice {

  onMeshInit() {
    this._pressTrigger = this.getDriver().pressTrigger;
    this._holdTrigger = this.getDriver().holdTrigger;

    this.registerCapability('measure_battery', 'BATTERY');

    this.registerReportListener('SCENE_ACTIVATION', 'SCENE_ACTIVATION_SET', report => {
      if (typeof (report['Scene ID']) !== 'undefined') {
        const trigger = sceneMap[report['Scene ID']];
        this[trigger].trigger(this, null, null);
      }
    });
  }

}

module.exports = AeotecPanicButtonDevice;
