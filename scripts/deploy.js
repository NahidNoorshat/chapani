const hre = require("hardhat");

const getBalances = async (address) => {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return ethers.formatEther(balanceBigInt);
};

async function consolBalance(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter} balance:`, await getBalances(address));
    counter++;
  }
}

async function consoleMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const name = memo.name;
    const address = memo.from;
    const massage = memo.massage;

    console.log(
      `At ${timestamp}, name ${name}, address ${address}, message ${massage}`
    );
  }
}

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();

  const chai = await ethers.deployContract("Chapani");

  await chai.waitForDeployment();

  console.log("Contract address:", await chai.getAddress());

  const balance = await ethers.provider.getBalance(owner.address);
  // const amount = hre.ethers.parseEther("1");
  const amount = { value: hre.ethers.parseEther("1") };
  console.log(amount);
  console.log(typeof amount);
  // console.log(chai);

  console.log(balance);
  console.log(typeof balance);

  const ethbal = await ethers.formatEther(balance);

  console.log(ethbal);

  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];

  console.log(addresses);

  console.log("before buy any chai.. ");
  await consolBalance(addresses);

  await chai.connect(from1).buychai("frome1", "Very naice chai", amount);
  await chai.connect(from2).buychai("frome2", "Very naice chai", amount);
  await chai.connect(from3).buychai("frome3", "Very naice chai", amount);

  console.log("after buy chai....");

  await consolBalance(addresses);

  const memos = await chai.getmemos();

  consoleMemos(memos);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
