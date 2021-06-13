import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  
  {
    pid: 3,
   
    lpSymbol: 'XYZ-bnb LP',
    lpAddresses: {
      97: '',
      56: '0x335a12850ed615cff00e16a21a74a66c99cc56d0',
    },
    tokenSymbol: 'XYZ',
    tokenAddresses: {
      97: '',
      56: '0xa93659490d4e73365B4d66c014A2704a60106Bd2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 343,
    lpSymbol: 'ODDZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3c2c77353E2F6AC1578807b6b2336Bf3a3CbB014',
    },
    token: tokens.oddz,
    quoteToken: tokens.wbnb,
  },
 
  {
    pid: 404,
    lpSymbol: 'ATA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xef7767677867552cfa699148b96a03358a9be779',
    },
    token: tokens.ata,
    quoteToken: tokens.wbnb,
  },

 
 
  {
    pid: 389,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  
]

export default farms
