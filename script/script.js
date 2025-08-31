// script.js
const { ethers } = require("ethers");

// Replace with your deployed contract address
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

// ABI of the contract (simplified for the main functions)
const abi = [
    "function addCandidate(string memory _name) public",
    "function registerVoter(address _voter) public",
    "function vote(uint _candidateId) public",
    "function getWinner() public view returns (string memory)",
];

async function main() {
    // Connect to Ethereum (using Metamask provider or JSON RPC)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const votingContract = new ethers.Contract(contractAddress, abi, signer);

    // Example: Add a candidate (only admin)
    const tx1 = await votingContract.addCandidate("Alice");
    await tx1.wait();
    console.log("Candidate Alice added");

    // Example: Register a voter (only admin)
    const voterAddress = "0x1234567890abcdef1234567890abcdef12345678";
    const tx2 = await votingContract.registerVoter(voterAddress);
    await tx2.wait();
    console.log("Voter registered:", voterAddress);

    // Example: Vote for candidate 1
    const tx3 = await votingContract.vote(1);
    await tx3.wait();
    console.log("Voted for candidate 1");

    // Get winner
    const winner = await votingContract.getWinner();
    console.log("Current winner:", winner);
}

// Run the script
main().catch(console.error);
