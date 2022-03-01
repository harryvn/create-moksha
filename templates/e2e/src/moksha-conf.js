"use strict";

module.exports = {
  timeouts: 60000,
  exit: true,
  bail: true,
  slow: 1000,
  recursive: true,

  spec: ["./specs/loginSpec.js"],

  parallel: false,
  reporter: "mochawesome",
  require: "mochawesome/register",
  reporterOption: [
    "reportDir=reports",
    "reportTitle=mokshajs",
    "reportFilename=mokshajs",
  ],
};
