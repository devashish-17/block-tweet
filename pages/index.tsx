import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import Link from 'next/link';

declare global {
  interface Window {
    ethereum: any
  }
}

const Home: NextPage = () => {

  const [currentAccount, setCurrentAccount] = useState('');

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Found account', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }
  useEffect(() => {
    connectWallet();
  });

  return (
    <div className="">
      <Head>
        <title>DevTwitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='hidden lg:block'>

      <div className="flex items-center justify-center h-screen">


        {currentAccount === '' ? (
          "Connect Wallet Here"
        ) : (
         <Link href={'/home'}>
          <button className='text-xl font-bold py-3 px-10 bg-orange-500 rounded-full mb-10 hover:scale-105 transition duration-500 ease-in-out' onClick={connectWallet}>
            Wallet Connected
          </button>
        </Link>
        )}

        </div>
      </main>

    </div>
  )
}

export default Home
