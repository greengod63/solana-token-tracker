# Solana Token Tracker

`Solana Token Tracker` is a TypeScript-based tool that monitors new token creation events specifically within the **Raydium** decentralized exchange ecosystem on the **Solana blockchain**. The tool listens to blockchain logs to detect new token signatures associated with Raydium's liquidity pools and stores relevant data such as creator information and token balances.

This project uses the **Solana Web3.js** library to interact with the Solana network and track token transactions involving Raydium's liquidity pools.

---

### Potential Use Case: Sniper Bot Development

This tool can be incredibly useful for developing a **Sniper Bot**. By monitoring **new tokens** added to Raydium's liquidity pools, it allows you to find new tokens as quickly as possible. This gives you an edge in reacting to early token listings, which is crucial for Sniper Bot strategies. 

---

## Features

- **Monitors new Solana tokens** by tracking transaction logs related to Raydium.
- **Stores relevant token information** such as creator addresses, token balances, and transaction signatures.
- **Uses Solana Web3.js** to connect to the Solana blockchain and listen for token creation events.
- **Error handling and logging** capabilities to ensure robust operation.

---

## Prerequisites

Before using this tool, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended version: `v14.x` or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for package management)

---

## Installation

Follow these steps to set up the Solana Token Tracker project on your local machine:

### 1. Clone the Repository
   ```bash
   git clone https://github.com/FriedDev/solana-token-tracker.git
   cd solana-token-tracker
   ```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure RPC Endpoint
Create a `.env` file in the project root:
```env
# Mainnet RPC Endpoint (recommended)
RPC_ENDPOINT=https://mainnet.helius-rpc.com/?api-key=your-api-key
RPC_WEBSOCKET_ENDPOINT=wss://mainnet.helius-rpc.com/?api-key=your-api-key
```

> **💡 Pro Tip:** 
> - Obtain an API key from Helius or another Solana RPC provider for optimal performance
> - Default RPC endpoints are available as fallback options

### 4. Run the Project
```bash
npx tsx src/index.ts
```

## Troubleshooting

### Common Issues
- **Installing tsx Globally (Optional)**:
  ```bash
  npm install -g tsx
  ```
- **Dependency Conflicts**: 
  ```bash
  npm cache clean --force
  npm install
  ```
- Ensure you're running the latest version of Node.js
- Check your Solana RPC endpoint configuration
- Verify that `tsx` is correctly installed and configured

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-source. Please check the LICENSE file for details.

## Disclaimer

⚠️ **Use Responsibly**: This tool is for educational and development purposes. Always comply with local regulations and platform terms of service.
