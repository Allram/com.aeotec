'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class AeotecSirenDevice extends ZwaveDevice {

  onMeshInit() {
    this._alarmOnFlow = this.getDriver().alarmOnFlow;
    this._alarmOffFlow = this.getDriver().alarmOffFlow;

    this._changeSoundFlow = this.getDriver().changeSoundFlow;

    this.registerCapability('onoff', 'SWITCH_BINARY');
  }

  async onOffRunListener(args, state, on) {
    const value = on ? 255 : 0;

    if (this.node && this.node.CommandClass.COMMAND_CLASS_SWITCH_BINARY) {
      return this.node.CommandClass.COMMAND_CLASS_SWITCH_BINARY.SWITCH_BINARY_SET({
        'Switch Value': value,
      });
    } throw new Error('invalid_device_command_class');
  }

  async changeSoundRunListener(args, state) {
    let settingsValue; let
      zwaveValue;

    if (args && args.sound && args.volume) {
      settingsValue = Number(args.sound) + Number(args.volume);
      zwaveValue = Buffer.alloc(2);
      zwaveValue.writeUIntBE(settingsValue, 0, 2);

      try {
        await this.node.CommandClass.COMMAND_CLASS_CONFIGURATION.CONFIGURATION_SET({
          'Parameter Number': 37,
          Level: {
            Size: 2,
            Default: false,
          },
          'Configuration Value': zwaveValue,
        });

        this.setSettings({
          37: settingsValue,
        });
      } catch (err) {
        return Promise.reject(err);
      }

      return Promise.resolve(true);
    }
    throw new Error('invalid_arguments');
  }

}

module.exports = AeotecSirenDevice;
