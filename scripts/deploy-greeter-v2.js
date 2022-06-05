const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xb9A25aad8339929E57398a01Ac2aA097B7927bEC";

async function main() {
  const GreeterV2 = await ethers.getContractFactory("GreeterV2");
  const upgradedProxy = await upgrades.upgradeProxy(proxyAddress, GreeterV2);

  console.log(await upgradedProxy.greet());
  console.log(proxy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
