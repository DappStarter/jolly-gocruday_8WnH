require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool response miss exchange good armed equal giggle'; 
let testAccounts = [
"0x1277ea4cef97359cee1bfa238ada885ded5bc160ec84036e79779d6b17304d62",
"0x8ea84062002743555b6d72cc900c9ef6de615222f99dbc0ca2d59aebd82c5c57",
"0xf7f565b20adc0f405a7ac2b11e3a86886e4b6e18189b8ffeb7a12e620f29c5a5",
"0x2e000a6179aee3f07c512fc7a3efefd36fd90d7c90a1681fda4dd256bec699f6",
"0x9c48bc0291882ae55f95c11d3ce757ee344aff56dad06cceaf866009dd19ba7f",
"0xa2525711815a493ad9b121e527cb44e2430e131c016c5bab5c4da32932e0b65f",
"0x9ca7e7fd215e97c84ac613d27625b198a6bfbb87bd9a9e571b150168ba76f415",
"0x74c4599405c2176b0c51147af7f63f5e29ca19c94704c2753fa2b7c4b3b1b875",
"0x419b4863d362970b9b5beefc6b2d2c344d648d850c0d2032fb1b62d09fa6b18f",
"0x8c4d602f62b8c3e4a60fba22e37790602073036edf5611f1b3a912a66667c936"
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
            gas: 3000000,
            gasPrice: 470000000000,
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


