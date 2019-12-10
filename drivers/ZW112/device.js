'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class ZW112 extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('alarm_contact', 'BASIC');
		this.registerCapability('measure_batttery', 'BATTERY');
	}
}

module.exports = ZW112;
