/*
  This file is intended to be overwritten. It provides a common place to store
  site configuration data.
*/

const config = {
  title: 'STEVEsINFOboard',
  titleShort: 'SIB',
  balanceText: 'BCH Balance',
  balanceIcon: 'fab-bitcoin',

  // The BCH address used in a memo.cash account. Used for tracking the IPFS
  // hash of the mirror of this site.
  memoAddr: 'bitcoincash:qpmeu7ss7zs50a6xqm937ehlqpvm93gudyexdmd7t8',

  // Footer Information
  hostText: 'FullStack.cash',
  hostUrl: 'https://fullstack.cash/',
  sourceCode: 'https://github.com/Permissionless-Software-Foundation/message.fullstack.cash',
  torUrl: 'someonionaddresstemp.onion',
  clearWebUrl: 'https://leedsunited.eth.link'
}

module.exports = config
