/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.9",
  paths: { 
    sources: "./contracts",
    artifacts: "./frontend/src/artifacts",
  }
};
