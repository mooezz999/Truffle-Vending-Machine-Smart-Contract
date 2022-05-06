const Migrations = artifacts.require("VendingMachine");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
