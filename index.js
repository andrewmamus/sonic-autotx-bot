const web3 = require("@solana/web3.js");
const chalk = require("chalk");
const bs58 = require("bs58");

const connection = new web3.Connection(
    "https://devnet.sonic.game",
    "confirmed"
); // We may replace rpc when needed in the future

const privkeyBase58 =
    "00000000000000000000000000000000000000000000000000000000000"; // Replace with your actual privkey
const privkey = bs58.decode(privkeyBase58);

// Log the length of the decoded private key
console.log(`Decoded private key length: ${privkey.length}`);

if (privkey.length !== 64) {
    throw new Error("The decoded private key is not 64 bytes long.");
}

const from = web3.Keypair.fromSecretKey(new Uint8Array(privkey));
const to = web3.Keypair.generate(); // Auto generator address SOL

(async () => {
    const transaction = new web3.Transaction().add(
        web3.SystemProgram.transfer({
            fromPubkey: from.publicKey,
            toPubkey: to.publicKey,
            lamports: web3.LAMPORTS_PER_SOL * 0.001, // Ganti jumlah sol yang dikirim sesuka kalian
        })
    );

    // MAIN TX
    const txCount = 100; // Ubah angka sesuai dengan jumlah transaksi yang anda inginkan
    for (let i = 0; i < txCount; i++) {
        const signature = await web3.sendAndConfirmTransaction(
            connection,
            transaction,
            [from]
        );
        console.log(
            chalk.green(`Created ${i} tx done, tx hash ->`),
            chalk.yellow(signature)
        );
    }
})();
