// DO NOT EDIT THIS FILE
// This file is automatically generated from the webgme-setup-tool.
'use strict';


var config = require('webgme/config/config.default'),
    validateConfig = require('webgme/config/validator');


// The paths can be loaded from the webgme-setup.json
config.seedProjects.basePaths.push('src/seeds/car_configuration_models');
config.seedProjects.basePaths.push('src/seeds/Car_Configuration_Models');
config.seedProjects.basePaths.push('src/seeds/Car_Configuration_Models_V2');





// Visualizer descriptors

// Add requirejs paths



config.mongo.uri = 'mongodb://127.0.0.1:27017/mic_webgme';
validateConfig(config);
module.exports = config;
