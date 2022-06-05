const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");

    const proxy = await upgrades.deployProxy(Greeter, ["Hello, world!"]);
    await proxy.deployed();

    expect(await proxy.greet()).to.equal("Hello, world!");

    const setGreetingTx = await proxy.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await proxy.greet()).to.equal("Hola, mundo!");

    const proxyAddress = proxy.address;
    const GreeterV2 = await ethers.getContractFactory("GreeterV2");
    const upgradedProxy = await upgrades.upgradeProxy(proxyAddress, GreeterV2);
    
    expect(await upgradedProxy.greet()).to.equal("Greeting: Hola, mundo!");
  });
});
