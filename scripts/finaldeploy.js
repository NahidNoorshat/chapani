const hre = require("hardhat");

async function main() {
  const chai = await ethers.deployContract("Chapani");

  await chai.waitForDeployment();

  console.log("Contract address:", await chai.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
