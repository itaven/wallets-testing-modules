import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { prepareNodeModule } from '../../commons';
import {
  COIN98_COMMON_CONFIG,
  MATHWALLET_COMMON_CONFIG,
  METAMASK_COMMON_CONFIG,
  COINBASE_COMMON_CONFIG,
  EXODUS_COMMON_CONFIG,
} from '@tester513/wallets-testing-wallets';
import { POLYGON_WIDGET_CONFIG } from '@tester513/wallets-testing-widgets';
import { BrowserModule } from '../../browser/browser.module';
import { BrowserService } from '../../browser/browser.service';
import { MATIC_TOKEN } from './consts';
import { test } from '@playwright/test';

test.describe('Polygon', () => {
  let app: INestApplication;
  let browserService: BrowserService;

  test.beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [prepareNodeModule(), BrowserModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    browserService = moduleFixture.get<BrowserService>(BrowserService);
  });

  test(`Metamask stake`, async () => {
    await browserService.setupWithNode(
      METAMASK_COMMON_CONFIG,
      POLYGON_WIDGET_CONFIG,
      {
        stakeAmount: 100,
        tokenAddress: MATIC_TOKEN,
        mappingSlot: 0,
      },
    );
    await browserService.stake();
  });

  test(`Coin98 connect`, async () => {
    await browserService.setup(COIN98_COMMON_CONFIG, POLYGON_WIDGET_CONFIG);
    await browserService.connectWallet();
  });

  test(`Mathwallet connect`, async () => {
    await browserService.setup(MATHWALLET_COMMON_CONFIG, POLYGON_WIDGET_CONFIG);
    await browserService.connectWallet();
  });

  test('Exodus connect', async () => {
    await browserService.setup(EXODUS_COMMON_CONFIG, POLYGON_WIDGET_CONFIG);
    await browserService.connectWallet();
  });

  test('Coinbase connect', async () => {
    await browserService.setup(COINBASE_COMMON_CONFIG, POLYGON_WIDGET_CONFIG);
    await browserService.connectWallet();
  });

  test.afterEach(async () => {
    await browserService.teardown();
  });
});
