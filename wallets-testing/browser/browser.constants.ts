import {
  Coin98,
  MathWalletPage,
  MetamaskPage,
  TrustWalletPage,
  ExodusPage,
  PhantomPage,
  CoinbasePage,
  TahoPage,
  GameStopPage,
  XdefiPage,
} from '@tester223/wallets-testing-wallets';
import {
  EthereumPage,
  KusamaPage,
  PolkadotPage,
  PolygonPage,
  SolanaPage,
} from '@tester223/wallets-testing-widgets';

export const WALLET_PAGES = {
  metamask: MetamaskPage,
  coin98: Coin98,
  mathwallet: MathWalletPage,
  trust: TrustWalletPage,
  exodus: ExodusPage,
  phantom: PhantomPage,
  coinbase: CoinbasePage,
  taho: TahoPage,
  gamestop: GameStopPage,
  xdefi: XdefiPage,
};

export const WIDGET_PAGES = {
  ethereum: EthereumPage,
  polygon: PolygonPage,
  kusama: KusamaPage,
  polkadot: PolkadotPage,
  solana: SolanaPage,
};
