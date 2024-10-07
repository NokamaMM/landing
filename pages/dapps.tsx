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
        <title>Mobl3 Dapps</title>
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
          Explore the Mob Collective!
        </h1>

        <h1 className={`${styles.description} font-small`}>
        
        </h1>
        <div className={`${styles.description} flex items-center gap-2`}>
          <p>Powered by</p>
          
          <a className='pt-2' href="#"><Image src='/images/icon3.png' height={60} width={65} alt='decent icon'/></a>

          <a href="#"> + </a>
          <a className='pt-2' href="#"><Image src='/images/icon.svg' height={40} width={45} alt='decent icon'/></a>

        </div>

        <div className={`${styles.grid} cursor-pointer`}>
          <Link href='#'>
          <div className={styles.card}>
            <h2 className='font-medium'>Mobperp &rarr;</h2>
            <p>Coming Soon</p>
          </div>
          </Link>

<a href="https://testnet-bridge.mobl3.xyz" className={styles.card}>
            <h2 className='font-medium'>Mollie &rarr;</h2>
            <p>Mobl3 Primary Bridge</p>
          </a>

          <a href="https://testnets.relay.link/mob-devnet-0etlye77td" className={styles.card}>
            <h2 className='font-medium'>Mob Relay Bridge &rarr;</h2>
            <p>Mobl3 Secondary Bridge</p>
          </a>

          <a href="#" className={styles.card}>
            <h2 className='font-medium'>Mob ID &rarr;</h2>
            <p>Mint Your Mob ID!</p>
          </a>

          <a href="#" className={styles.card}>
            <h2 className='font-medium'>Mob.fun &rarr;</h2>
            <p>Coming Soon</p>
          </a>

          <a href="#" className={styles.card}>
            <h2 className='font-medium'>M-Aave &rarr;</h2>
            <p>
              {`Coming Soon`}
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2 className='font-medium'>MLP Vaults &rarr;</h2>
            <p>Coming Soon</p>
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
