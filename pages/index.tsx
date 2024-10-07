import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react'

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} background`}>
      <Head>
        <title>Mobl3 Ecosystem</title>
        <meta
          name="description"
          content='A template for Navigating the Mob Ecosystem wtih Rainbowkit in Next JS'
        />
        <link rel="icon" href="/images/favi.png" />
      </Head>

      <main className={styles.main}>
        <div className="flex items-center gap-4">
          <Link href='#' target='_blank'>
            <Image src='/images/mobl3.png' height={182} width={182} alt='' />
          </Link>
        </div>

        <h1 className={`${styles.title} font-medium`}>
          Democratizing Liquidity For Long-tail Assets
        </h1>

        <h1 className={`${styles.description} font-small`}>
        Mobl3 is a trading-optimised modular L3, Optimizing liquidity on the network level for improved capital efficiency utilized for creating High-performant environment for trading of synthetic markets and generation of Native Yield.
        </h1>
        <div className={`${styles.description} flex items-center gap-2`}>
          <p>Powered by</p>
          
          <a className='pt-2' href="#"><Image src='/images/icon3.png' height={60} width={65} alt='decent icon'/></a>

          <a href="#"> + </a>
          <a className='pt-2' href="#"><Image src='/images/icon.svg' height={40} width={45} alt='decent icon'/></a>

        </div>

        <div className={`${styles.grid} cursor-pointer`}>
          <Link href='/dapps'>
          <div className={styles.card}>
            <h2 className='font-medium'>Testnet Dapps &rarr;</h2>
            <p>Explore the Mobl3 testnet ecosystem.</p>
          </div>
          </Link>

          <a href="https://docs.mobl3.xyz" className={styles.card}>
            <h2 className='font-medium'>Mobl3 Protocol Docs &rarr;</h2>
            <p>Review smart contracts and architecture.</p>
          </a>

          <a href="https://faucet.mobl3.xyz" className={styles.card}>
            <h2 className='font-medium'>Faucet &rarr;</h2>
            <p>Get Testnet ETH on the Mobl3 network.</p>
          </a>

          <a href="https://testnet.mobl3.xyz" className={styles.card}>
            <h2 className='font-medium'>Explorer &rarr;</h2>
            <p>
              {`Utilize our explorer to debug transactions on the network`}
            </p>
          </a>

          <a href="https://faucet.mobl3.xyz" className={styles.card}>
            <h2 className='font-medium'>Build on Mob &rarr;</h2>
            <p>Learn more about integrating your project with Mobl3.</p>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link href='#' target='_blank'>
            <Image src='/images/op.svg' height={180} width={180} alt='link to repository' />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href='https://x.com/mobl3xyz' target='_blank'>
            <Image src='/images/twitter-logo-2.svg' height={22} width={22} alt='link to repository' />
          </Link>
          <Link href='https://github.com/Mobl3xyz' target='_blank'>
            <Image src='/images/github-mark-white.svg' height={22} width={22} alt='link to repository' />
          </Link>
          <Link href='https://discord.com/#' target='_blank'>
            <Image src='/images/DiscordLogo-White-Logo.svg' height={35} width={35} alt='link to repository' />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
