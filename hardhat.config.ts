import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config({ path: ".env" });

type HttpNetworkAccountsUserConfig = any;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: "https://ropsten.infura.io/v3/6f01a1a6792048e09192bcd4012d164d",
      },
    },
    ropsten: {
      url: process.env.ROPSTEN_URL,
      blockGasLimit: 200000000000,
      gasPrice: 10000000000,
      accounts: [process.env.PRIVATE_KEY] as HttpNetworkAccountsUserConfig | undefined
    }
  }
};

export default config;
