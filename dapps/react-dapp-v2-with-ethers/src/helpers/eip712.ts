// From spec: https://eips.ethereum.org/EIPS/eip-712
const wolfburg = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
    ],
    
    Audience: [
      { name: "name", type: "string" },
      { name: "wallet", type: "address" },
    ],
    Mail: [
      { name: "from", type: "Person" },
      { name: "to", type: "Person" },
      { name: "contents", type: "string" },
    ],
    Match:[
      {name: 'HomeTeam', type: "string"},
      {name: 'AwayTeam', type: "string"},
      {name: 'MatchDate', type: "uint32"},
      {name: 'Stadium', type: "string"},
      {name: 'SeatNumber', type: "string"},
      {name: 'Attender', type: "Audience"},
    ],
  },
  primaryType: "Match",
  domain: {
    name: "Ticket Verifier",
    version: "1",
    chainId: 80001,
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
  },
  message: {
    HomeTeam: 'team 1',
    AwayTeam: 'team 2',
    MatchDate: 16398390,
    Stadium: 'Volkswagen Arena',
    SeatNumber: 'AA-w3',
    Attender: { name: "Bob", wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB" }
  },
};

const interMilan = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
    ],
    
    Audience: [
      { name: "name", type: "string" },
      { name: "wallet", type: "address" },
    ],
    Mail: [
      { name: "from", type: "Person" },
      { name: "to", type: "Person" },
      { name: "contents", type: "string" },
    ],
    Match:[
      {name: 'HomeTeam', type: "string"},
      {name: 'AwayTeam', type: "string"},
      {name: 'MatchDate', type: "uint32"},
      {name: 'Stadium', type: "string"},
      {name: 'SeatNumber', type: "string"},
      {name: 'Attender', type: "Audience"},
    ],
  },
  primaryType: "Match",
  domain: {
    name: "Ticket Verifier",
    version: "1",
    chainId: 80001,
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
  },
  message: {
    HomeTeam: 'team 1',
    AwayTeam: 'team 2',
    MatchDate: 16398390,
    Stadium: 'San Siro',
    SeatNumber: 'AA-w3',
    Attender: { name: "Bob", wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB" }
  },
};
// Dignity Health Sports Park
const LAGalaxy = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
    ],
    
    Audience: [
      { name: "name", type: "string" },
      { name: "wallet", type: "address" },
    ],
    Mail: [
      { name: "from", type: "Person" },
      { name: "to", type: "Person" },
      { name: "contents", type: "string" },
    ],
    Match:[
      {name: 'HomeTeam', type: "string"},
      {name: 'AwayTeam', type: "string"},
      {name: 'MatchDate', type: "uint32"},
      {name: 'Stadium', type: "string"},
      {name: 'SeatNumber', type: "string"},
      {name: 'Attender', type: "Audience"},
    ],
  },
  primaryType: "Match",
  domain: {
    name: "Ticket Verifier",
    version: "1",
    chainId: 80001,
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
  },
  message: {
    HomeTeam: 'team 1',
    AwayTeam: 'team 2',
    MatchDate: 16398390,
    Stadium: 'Dignity Health Sports Park',
    SeatNumber: 'AA-w3',
    Attender: { name: "Bob", wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB" }
  },
};

export const eip712 = {
  wolfburg, interMilan, LAGalaxy
};
