const { ethers, upgrades } = require("hardhat");

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const proxy = await upgrades.deployProxy(Greeter, ["Hello!!"]);
  await proxy.deployed();

  console.log(proxy.address);
}

main();