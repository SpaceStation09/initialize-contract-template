import { use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { Signer } from "ethers";
import { ethers, waffle } from "hardhat";
import { revertToSnapShot, takeSnapshot } from "./helper";
const { expect } = use(chaiAsPromised);
const { deployContract } = waffle;

import GreeterArtifact from "../artifacts/src/Greeter.sol/Greeter.json";
import { Greeter } from "../types/Greeter";

describe("Test Greeter", () => {
  let greeter: Greeter;
  let contractCreator: Signer;
  let signers: Signer[];
  let snapshotId: string;
  const deployedGreetMsg = "Hello, World!";
  const newGreetMsg = "Hello, Solidity!";

  before(async () => {
    signers = await ethers.getSigners();
    contractCreator = signers[0];
    greeter = (await deployContract(contractCreator, GreeterArtifact, [deployedGreetMsg])) as Greeter;
  });

  beforeEach(async () => {
    snapshotId = await takeSnapshot();
  });

  afterEach(async () => {
    await revertToSnapShot(snapshotId);
  });

  it("Should deployer getter work properly", async () => {
    const expectedDeployer = await contractCreator.getAddress();
    const realDeployer = await greeter.deployer();
    expect(realDeployer).to.be.eq(expectedDeployer);
  });

  it("Should greeting msg getter work properly", async () => {
    const realGreetMsg = await greeter.greet();
    expect(realGreetMsg).to.be.eq(deployedGreetMsg);
  });

  it("Should set greeting msg work properly if the function callers is right", async () => {
    await greeter.connect(contractCreator).setGreeting(newGreetMsg);
    const currentMsg = await greeter.greet();
    expect(currentMsg).to.be.eq(newGreetMsg);
  });

  it("Should set greeting msg fail if the function caller is not deployer", async () => {
    await expect(greeter.connect(signers[1]).setGreeting(newGreetMsg)).to.be.revertedWith(getRevertMsg("Not Deployer"));
  });

  const getRevertMsg = (msg: string): string =>
    `VM Exception while processing transaction: reverted with reason string '${msg}'`;
});
