require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/yDE3qh7fT9RMnUMlIucJEnS1oF-3CdeK',
      accounts: ['ed48145e91ce388c82adef0f2643dcc63132c766292281a61c49af05fd6d9dc9'],
    },
  },
};