// Deployment on testnet

const hre = require("hardhat");

const main = async() => {
  const contractFactory = await hre.ethers.getContractFactory('TwitterContract');
  const contract = await contractFactory.deploy();

  await contract.deployed();
  console.log("Contract deployed to: ", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});