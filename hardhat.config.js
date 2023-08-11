require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const INFURA_API_KEY = "9953e5cb330d484c87644b3553a7ae4a";

const SEPOLIA_PRIVATE_KEY =
  "90a6082fc664b37f495d4e6943084f83df26dfb3eecbdabdc3e6033ef0f72f86";

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
