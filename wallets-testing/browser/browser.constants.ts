import {
  Coin98,
  MathWalletPage,
  MetamaskPage,
  CoinbasePage,
} from '@lidofinance/wallets-testing-wallets';
import {
  EthereumPage,
  KusamaPage,
  PolkadotPage,
  PolygonPage,
} from '@lidofinance/wallets-testing-widgets';

export const WALLET_PAGES = {
  metamask: MetamaskPage,
  coin98: Coin98,
  mathwallet: MathWalletPage,
  coinbase: CoinbasePage,
};

export const WIDGET_PAGES = {
  ethereum: EthereumPage,
  polygon: PolygonPage,
  kusama: KusamaPage,
  polkadot: PolkadotPage,
};
