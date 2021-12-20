require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/j1F2wjTFlvPwxhW901zmiNDnf5Ao8s1C',
      accounts: ['e978a6aa274540b65647f15368a4c1079695b4d60d7d7956f7d0c7e829bd5d97'],
    },
  },
};