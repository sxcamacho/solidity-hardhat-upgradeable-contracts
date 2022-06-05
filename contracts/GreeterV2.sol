//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract GreeterV2 is Initializable {
    string private greeting;

    function initialize(string memory _greeting) public initializer {
        console.log("Deploying a Greeter with greeting:", _greeting);
    }

    function greet() public view returns (string memory) {
        return string(abi.encodePacked("Greeting: ", greeting));
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}