import { Page } from 'playwright';
import { WalletPage } from '@tester223/wallets-testing-wallets';

export interface WidgetPage {
  page: Page | undefined;

  navigate(): Promise<void>;

  connectWallet(walletPage: WalletPage): Promise<void>;

  doStaking(walletPage: WalletPage): Promise<void>;
}
