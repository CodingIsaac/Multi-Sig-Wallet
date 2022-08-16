const helpers = require("@nomicfoundation/hardhat-network-helpers");
import { MultiSig } from './../typechain-types/multisig.sol/MultiSig';
require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";

async function main() {


  

// // import * as dotenv from "dotenv";

// // import IMultiSig from "../typechain-types/Imultisig.sol"

// // having deployed the factory faction, we have a clone of the multisig, so we want to interact with the multisig

// async function main() {
//   let provider = {
//     PrivateKey: process.env.PRIVATE_KEY as BytesLike,
//     URL: process.env.URL,
//   };



//   const provider2 = ethers.getDefaultProvider("ropsten", provider.URL);


//   let wallet = new ethers.Wallet(provider.PrivateKey, provider2);


  const _value = ethers.utils.parseEther("0.1");

  const CONTRACTADDRESS = "0x6e828b59fc799b6ef92e42d2f39e438a7477f469";
  const MULTISIG = await ethers.getContractAt("IMultiSig", CONTRACTADDRESS);

  
  // const approveAddresses = require("@nomicfoundation/hardhat-network-helpers");

  // const address = "0x20497F37a8169c8C9fA09411F8c2CFB7c90dE5d1";
  // await approveAddresses.impersonateAccount(address);
  // const impersonatedSigner = await ethers.getSigner(address)




  const addressOne = "0x2DBdd859D9551b7d882e9f3801Dbb83b339bFFD7";
  await helpers.impersonateAccount(addressOne);
  const impersonatedSignerOne = await ethers.getSigner(addressOne);

  const addressTwo = "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C";
  await helpers.impersonateAccount(addressTwo);
  const impersonatedSignerTwo = await ethers.getSigner(addressTwo);

  const addressThree = "0x85f20a6924A61904AB44243C7e2c771B3bE46734";
  await helpers.impersonateAccount(addressThree);
  const impersonatedSignerThree = await ethers.getSigner(addressThree);

  const addressFour = "0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf";
  await helpers.impersonateAccount(addressFour);
  const impersonatedSignerFour = await ethers.getSigner(addressFour);

  const addressFive = "0x5D63564EeF4657F360343196A7bd86ae18d3a92A";
  await helpers.impersonateAccount(addressFive);
  const impersonatedSignerFive = await ethers.getSigner(addressFive);

  const addressSix = "0x12896191de42EF8388f2892Ab76b9a728189260A";
  await helpers.impersonateAccount(addressSix);
  const impersonatedSignerSix = await ethers.getSigner(addressSix);

  const addressSeven = "0x924843c0c1105b542c7e637605f95F40FD07b4B0";
  await helpers.impersonateAccount(addressSeven);
  const impersonatedSignerSeven = await ethers.getSigner(addressSeven);

  const addressEight = "0xB632cAf3119860599ce162Fad8753fc4198037b4";
  await helpers.impersonateAccount(addressEight);
  const impersonatedSignerEight = await ethers.getSigner(addressEight);

  const addressNine = "0x21c1229D4b781F4F7A95dEb4022B57f346af4CEF";
  await helpers.impersonateAccount(addressNine);
  const impersonatedSignerNine = await ethers.getSigner(addressNine);

  const withdrawOne = await (await MULTISIG.connect(impersonatedSignerNine).withdrawEther(_value)).wait();
  const balanceOfOne = await impersonatedSignerNine.getBalance();


  const approve2 = await MULTISIG.connect(impersonatedSignerTwo).Approve(8); // request for withdrawal
  const approve3 = await MULTISIG.connect(impersonatedSignerThree).Approve(8); // request for withdrawal
  const approve4 = await MULTISIG.connect(impersonatedSignerFour).Approve(8); // request for withdrawal
  const approve5 = await MULTISIG.connect(impersonatedSignerFive).Approve(8); // request for withdrawal
  const approve6 = await MULTISIG.connect(impersonatedSignerSix).Approve(8); // request for withdrawal
  const approve7 = await MULTISIG.connect(impersonatedSignerSeven).Approve(8); // request for withdrawal
  const approve8 = await MULTISIG.connect(impersonatedSignerEight).Approve(8); // request for withdrawal

  const balanceOfTwo = await impersonatedSignerSeven.getBalance();

  console.log(balanceOfOne);
  console.log(balanceOfTwo);





  

  
  


//     // await wallet.sendTransaction({ to: CONTRACTADDRESS, value: _value });
//     // console.log();
//     // console.log("contractBalanc", await MULTISIG.contractBalance());

//   await MULTISIG.withdrawEther(_value);
// //   await MULTISIG.Approve(1);
// //   await MULTISIG.contractBalance();
// }
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});