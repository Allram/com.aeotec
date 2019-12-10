# Aeotec

This app adds support for Aeotec devices in Homey.

## Changelog:

### v2.0.39
- Added Siren 6 (ZW-164).
- Added ID foor Door/Window Sensor 7.
### 2.0.38
- Added battery types for battery operated devices.
- Updated meshdriver.

### v2.0.37
- Fixed Smart Switch/Dimmer 6 reporting when physical button is used to operate the device.

### v2.0.36
- Corrected Australian device IDs.
- Fixed tamper alarm for Water Sensor 6.
### v2.0.35
- Corrected ZWave IDs for Door/Window Sensor 5 and Smart Dimmer 6.

### v2.0.33/34
- Added Door/Window Sensor 7
- Fix power measurement for Nano devices and Heavy Duty Smart Switch.
- Nano devices now changes their status corresponding to the physical buttons.

### v2.0.30/32
- Added Z-Wave ID's.

### v2.0.29
- Small fixes

### v2.0.27/28
- Enhancements to Home Energy Meter
- Enhancements to door/window sensors

### v2.0.24/26
- Fixes motion alarm on the DSB05 Multisensor 4-in-1

### v2.0.23
- Fixes device icons not showing

### v2.0.22
- Fixes for Garage Door Controller Gen5

### v2.0.21
- Fixes Door/Window Sensor Gen5
- Meshdriver update

### v2.0.20
- Added Nano Switch ZW140

### v2.0.18
- Fixes for the RGB bulb, re-added the rainbow mode Flow as well

### v2.0.17
- Dual switches should now update their state in Homey when triggered by hand

### v2.0.16
- Fixed Flows for the Wallmote Quad
- Fixed on/off status for the Heavy Duty Switch

### v2.0.15
- Fixed an issue with App store compatibility

### v2.0.1 - 2.0.14
- Bug fixes

### v2.0.0
- App now fully implemented in SDK2
- Added the following devices:
  - Water sensor 6
  - Heavy duty smart switch 5
  - Wallmote duo
  - LED strip

### v1.6.5
- Fixed support for DSB45

### v1.6.4
- Add AUS product ids
- Possible fix for ZW111 dim from Flow

### v1.6.3
- Fix product image of ZW095 - Home Energy Clamp

### v1.6.2
- Added productIds for ZW130 - Wallmote Quad and ZW088 - KeyFob
- Added support for ZW116 - Nano Switch
- Add support for ZW095 - Home Energy Clamp

### v1.6.1
- Fixed support for ZW139
- Added support for ZW116 as a separate device

### v1.6.0
- Add support for DSA32 - Panic Button
- Add support for ZW111 - Nano Dimmer
- Add support for ZW139 - Nano Switch

### v1.5.2
- ZW100 - MultiSensor 6 update:
  - Added Tamper Capability (re-pair needed)
  - Added setting 81 - LED behavior on Alarms (working on Device Firmware v1.8 and higher only)
  - Cleaned up device settings labels
- Update Z-Wave driver to v1.1.8

### v1.5.1
- Fix minor bugs for ZW075 - Smart Switch and ZW089 - Recessed Door Sensor

### v1.5.0
- Add sound selection Flow card for ZW080 - Siren Gen5

### v1.4.1
- Fix ZW130 - Wallmote Quad, multiple devices were not checked properly with triggers

### v1.4.0
- Add support for ZW130 - Wallmote Quad

### v1.3.0
- Add support for ZW112 - Door/Window Sensor 6
- Add support for ZW117 - Range Extender 6
- Add Power Meter report (%) parameters
  - ZW075
  - ZW096
  - ZW099

### v1.2.0
- Coding Clean-up
- More Default Configuration fixes
- Calibrations ZW100 now user friendly
- Add Power Meter capability: (Re-Pair needed)
  - ZW075
  - ZW096
  - ZW099

### v1.1.1
- Fix default configuration (all drivers)
- Add Keyfob mobile card (for battery)

### v1.1.0
Add Support:
- ZW088 - Keyfob
- ZW098 - LED Bulb (RGBW Functionality)
