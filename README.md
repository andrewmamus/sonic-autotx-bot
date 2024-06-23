# sonic-autotx-bot

Sonic Auto TX Bot is an automated bot that sends Solana ($SOL) tokens to another address for you, generating a script for completing tasks. It can automatically complete up to 100 transactions daily, saving you time and effort.

## USAGE

1. Clone the repository:
    ```
    git clone https://github.com/andrewmamus/sonic-autotx-bot.git
    ```
2. Install dependencies:
    ```
    cd sonic-autotx-bot
    npm install
    ```
3. Get your `privkey` address of solana from any wallet that supports solflare or phantom etc

4.  Open the `index.js` file in any code editor of your choice and enter the `privkey`

### Privkey

Example: `const privkey='0000000000000000000000000000000000000000000000000000000000'`
Save your code

5. Run the bot:
    ```
    node index.js
    ```


## Set Total Transaction

Example:
`   const txCount = 1 // Edit "1" set to any number you want
  `

# KEY FEATURE

-   Auto generate address
-   Custom total transaction
