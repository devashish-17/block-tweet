import type { NextPage } from 'next'
import Head from 'next/head'
import { CSSProperties, useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
// import Sidebar from '../components/Sidebar'
// import Feed from '../components/Feed'
// import Widgets from '../components/Widgets'
import Link from 'next/link';
import PuffLoader from 'react-spinners/PuffLoader';
import { RocketLaunchIcon } from '@heroicons/react/24/outline'


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

      <main className=''>

        <div className="flex items-center justify-center h-screen">
          <div className="flex-col">
        <RocketLaunchIcon className='h-16 w-16 my-4 ml-8 text-orange-600' />
        <p className='text-orange-600 font-bold text-xl font-mono mb-8'>Dev-Twitter</p>

            {currentAccount === '' ? (
              <div>
                  <PuffLoader color="rgba(234, 88, 12, 1)" size={120} />
                  <p> Connecting Wallet... </p>
              </div>
            ) : (
              <Link href={'/home'}>
                <button className='text-xl font-bold py-3 px-10 bg-orange-500 rounded-full mb-10 hover:scale-105 transition duration-500 ease-in-out' onClick={connectWallet}>
                  Wallet Connected
                </button>
              </Link>
            )}

          </div>
        </div>
      </main >

    </div >
  )
}

export default Home
