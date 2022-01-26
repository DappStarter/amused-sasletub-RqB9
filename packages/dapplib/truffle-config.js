require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rifle magic horn grace photo flat genre'; 
let testAccounts = [
"0xdab59ec9fedd8b1db3d6778b63129b1685497fd927069ce52695fbac300d73a5",
"0xc262fd8594d8bfbef649760903e93dfffb3c13d6768ff22656537d09f304f633",
"0xb13a486a5d17d3fdff6099f23b3da334e9d2380f3e80808eedea7500c642b906",
"0x296a3cc1299235662a35819d6a0299fe34098fb10c98587b02f3b3826c6a2ddc",
"0x8d4655a992687f2bb7f69880f85e38fd4795081240d464e812a0102d09d8b88e",
"0x9b5e8aa5c864254f45cb15da58bd4cb9df0c18de382b6a3d1c727d5274b351cb",
"0xcda7861ce362e754b25a62511b7dd296e9c4bd4057bd961ae64901c7895a26f3",
"0x408d422a569e1950d5407176933e1c29d879c7ed8e2de4d225b030da369ddfbf",
"0xfc0bd66160b78b5ff648758d91ec8d696bbe8172a7c1771e97c167af0ed7f1a8",
"0x86c554e4ba3958301b3d1504f39517026b91bbf558c9101d3f97c08dfe68c49a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


