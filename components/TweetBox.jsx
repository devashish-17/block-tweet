import React, { useState, useEffect } from "react";
import { TwitterContractAddress } from './config.js';
import { ethers } from 'ethers';
import Twitter from './utils/TwitterContract.json'
import {
  CalendarDaysIcon,
  ListBulletIcon,
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
  MapPinIcon,
  UserIcon
} from '@heroicons/react/24/outline'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const addTweet = async () => {
    let tweet = {
      'tweetText': tweetMessage,
      'isDeleted': false
    };

    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TwitterContract = new ethers.Contract(
          TwitterContractAddress,
          Twitter.abi,
          signer
        )

        let twitterTx = await TwitterContract.addTweet(tweet.tweetText, tweet.isDeleted);

        console.log(twitterTx);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log("Error submitting new Tweet", error);
    }
  }

  const sendTweet = (e) => {
    e.preventDefault();

    addTweet();

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="border-y-2 border-gray-300">
      <form className="mb-3 mx-4">
        
        <div className="flex">
        <div className="h-16 w-16 mr-2 mt-4"><UserIcon className="h-14 w-14 bg-slate-300 text-white rounded-full p-2" /></div>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
            className="h-20 w-full text-xl outline-none placeholder:text-xl"
          />
        </div>
        {/* <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        /> */}
        <div className='flex items-center'>
          <div className='flex space-x-2 text-orange-500 flex-1 ml-20'>
            <PhotoIcon className='postBtn' />
            <GifIcon className='postBtn' />
            <ListBulletIcon className='postBtn' />
            <FaceSmileIcon className='postBtn' />
            <CalendarDaysIcon className='postBtn' />
            <MapPinIcon className='postBtn' />
          </div>

          <button
            onClick={sendTweet}
            type="submit"
            className="bg-orange-500 text-white px-5 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!tweetMessage}
          >
            Tweet
          </button>
        </div>


      </form>
    </div>
  );
}

export default TweetBox;
