# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help

npx hardhat run scripts/deploy-greeter.js --network rinkeby
npx hardhat run scripts/deploy-greeter-v2.js --network rinkeby
npx hardhat verify --network rinkeby <CONTRACT_IMPLEMENTATION_ADDRESS>
```

**Deployed on Rinkeby network**
```
proxy:              0xb9A25aad8339929E57398a01Ac2aA097B7927bEC
implementation v1:  0x2f3096788798523B3dE7E4fe803aeE90e41F9799
implementation v2:  0xC8EBe5cd635f329361eCCC57aeF128ddB7A9636a
```

[Guide](https://www.chainshot.com/article/how-to-make-contracts-upgradeable)