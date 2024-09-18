# Swisstronik ERC721

Hardhat for deploying and interacting with ERC-721 contracts (NFT) on the Swisstronik Testnet.

## Prerequisites

Ensure you have the following installed:
- Node.js
- npm

## Setup Instructions

1. Clone the repository:
    ```sh
    git clone https://github.com/frankrichardhall/Swisstronik-ERC721.git
    cd Swisstronik-ERC721
    ```

2. Make the setup script executable and run it:
    ```sh
    chmod +x ERC721.sh
    ```
    ```sh
    ./ERC721.sh
    ```

3. Follow the prompts to enter your private key and NFT details.

## Deployment

The script will:
- Install necessary dependencies.
- Create a Hardhat project.
- Configure the Hardhat environment.
- Create and compile an ERC-721 contract.
- Deploy the contract to the Swisstronik testnet.
- Mint an NFT using the deployed contract.

## Notes

- The contract address will be saved in `contract.txt`.
- The transaction hash for the minting process will be printed in the terminal.