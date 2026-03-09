require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const privateKey = (process.env.PRIVATE_KEY || "").replace(/^0x/, "");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: privateKey ? [`0x${privateKey}`] : [],
    },
  },
};
