'use strict';

const Homey = require('homey');

class AeotecLEDBulb5Driver extends Homey.Driver {

  onInit() {
    super.onInit();

    this.rainbowAction = new Homey.FlowCardAction('zw098_rainbow')
      .register()
      .registerRunListener((args, state) => {
        return args.device.rainbowModeHandler(args);
      });
  }

}

module.exports = AeotecLEDBulb5Driver;
