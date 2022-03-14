import React, { PropsWithChildren, FC } from "react";
import styled from "styled-components";
import { ChainData } from "caip-api";

import Asset from "./Asset";
import Button from "./Button";
import Column from "./Column";
import Loader from "./Loader";

import { getChainMetadata } from "../chains";
import {
  AccountAction,
  ellipseAddress,
  ChainMetadata,
  ChainNamespaces,
  AccountBalances,
} from "../helpers";
import { fonts } from "../styles";

interface AccountStyleProps {
  rgb: string;
}

const SAccount = styled.div<AccountStyleProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  padding: 8px;
  margin: 5px 0;
  border: ${({ rgb }) => `2px solid rgb(${rgb})`};
  &.active {
    box-shadow: ${({ rgb }) => `0 0 8px rgb(${rgb})`};
  }
`;

const SChain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & p {
    font-weight: 600;
  }
  & img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`;

const SContainer = styled.div`
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
`;

const SFullWidthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SAction = styled(Button as any)`
  border-radius: 8px;
  font-size: ${fonts.size.medium};
  height: 44px;
  width: 100%;
  margin: 12px 0;
  background-color: ${({ rgb }) => `rgb(${rgb})`};
`;

const SBlockchainChildrenContainer = styled(SFullWidthContainer)`
  flex-direction: column;
`;

interface BlockchainProps {
  chainData: ChainNamespaces;
  fetching?: boolean;
  active?: boolean;
  chainId: string;
  address?: string;
  onClick?: (chain: string) => void;
  balances?: AccountBalances;
  actions?: AccountAction[];
  isTestnet: boolean;
}

interface BlockchainDisplayData {
  data: ChainData;
  meta: ChainMetadata;
}

// eslint-disable-next-line
function getBlockchainDisplayData(
  chainId: string,
  chainData: ChainNamespaces,
): BlockchainDisplayData | undefined {
  const [namespace, reference] = chainId.split(":");
  let meta: ChainMetadata;
  try {
    meta = getChainMetadata(chainId);
  } catch (e) {
    return undefined;
  }
  const data: ChainData = chainData[namespace][reference];
  if (typeof data === "undefined") return undefined;
  return { data, meta };
}

// TODO: add `solana` namespace + chains to https://github.com/pedrouid/blockchain-api
// Specifying solana chain metadata manually here for now.
const Blockchain: FC<PropsWithChildren<BlockchainProps>> = (
  props: PropsWithChildren<BlockchainProps>,
) => {
  const { fetching, address, onClick, balances, active, actions, isTestnet } = props;

  // if (!Object.keys(chainData).length) return null;

  // const chain = getBlockchainDisplayData(chainId, chainData);
  // if (typeof chain === "undefined") {
  //   return null;
  // }

  const chain = {
    meta: {
      name: isTestnet ? "Solana Devnet" : "Solana Mainnet",
      rgb: "0, 0, 0",
      logo: "/solana_logo.png",
    },
  };
  const name = chain.meta.name; /*|| chain.data.name;*/

  return (
    <React.Fragment>
      <SAccount
        rgb={chain.meta.rgb}
        onClick={() => onClick && onClick(props.chainId)}
        className={active ? "active" : ""}
      >
        <SChain>
          <img src={chain.meta.logo} alt={name} />
          <p>{name}</p>
        </SChain>
        {!!address && <p>{ellipseAddress(address)}</p>}
        <SBlockchainChildrenContainer>
          {fetching ? (
            <Column center>
              <SContainer>
                <Loader rgb={`rgb(${chain.meta.rgb})`} />
              </SContainer>
            </Column>
          ) : (
            <>
              {!!address && !!balances && balances[address] ? (
                <SFullWidthContainer>
                  <h6>Balances</h6>
                  <Column center>
                    <Asset key={balances[address].symbol} asset={balances[address]} />
                  </Column>
                </SFullWidthContainer>
              ) : null}
              {address && !!actions && actions.length ? (
                <SFullWidthContainer>
                  <h6>Methods</h6>
                  {actions.map(action => (
                    <SAction
                      key={action.method}
                      left
                      rgb={chain.meta.rgb}
                      onClick={() => action.callback(address)}
                    >
                      {action.method}
                    </SAction>
                  ))}
                </SFullWidthContainer>
              ) : null}
            </>
          )}
        </SBlockchainChildrenContainer>
      </SAccount>
    </React.Fragment>
  );
};
export default Blockchain;