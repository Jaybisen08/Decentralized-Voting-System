// deploy.js
const hre = require("hardhat");

async function main() {
    // Compile and deploy
    const VotingSystem = await hre.ethers.getContractFactory("VotingSystem");
    const voting = await VotingSystem.deploy();

    await voting.deployed();
    console.log("VotingSystem deployed to:", voting.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
