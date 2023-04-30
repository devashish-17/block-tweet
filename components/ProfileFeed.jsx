import React, { useState, useEffect, forwardRef } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import FlipMove from "react-flip-move";
import { TwitterContractAddress } from './config.js';
import { ethers } from 'ethers';
import Twitter from './utils/TwitterContract.json'
import { UserIcon } from "@heroicons/react/24/outline";

function ProfileFeed() {
  const [posts, setPosts] = useState([]);

  const getUpdatedTweets = (allTweets, address) => {
    let updatedTweets = [];
    // Here we set a personal flag around the tweets
    for (let i = 0; i < allTweets.length; i++) {
      if (allTweets[i].username.toLowerCase() == address.toLowerCase()) {
        let tweet = {
          'id': allTweets[i].id,
          'tweetText': allTweets[i].tweetText,
          'isDeleted': allTweets[i].isDeleted,
          'username': allTweets[i].username,
          'personal': true
        };
        updatedTweets.push(tweet);
      } else {
        let tweet = {
          'id': allTweets[i].id,
          'tweetText': allTweets[i].tweetText,
          'isDeleted': allTweets[i].isDeleted,
          'username': allTweets[i].username,
          'personal': false
        };
        updatedTweets.push(tweet);
      }
    }
    return updatedTweets;
  }

  const getMyTweets = async () => {
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

        let allTweets = await TwitterContract.getMyTweets();
        setPosts(getUpdatedTweets(allTweets, ethereum.selectedAddress));
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMyTweets();
  }, []);

  const deleteTweet = key => async () => {
    console.log(key);

    // Now we got the key, let's delete our tweet
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TwitterContract = new ethers.Contract(
          TwitterContractAddress,
          Twitter.abi,
          signer
        );

        let deleteTweetTx = await TwitterContract.deleteTweet(key, true);
        let allTweets = await TwitterContract.getMyTweets();
        setPosts(getUpdatedTweets(allTweets, ethereum.selectedAddress));
      } else {
        console.log("Ethereum object doesn't exist");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center">
      <div className='border-x-2 w-2/5'>

        <div className="border-y-2">
          <div className="h-32 bg-slate-200 relative">
            <div className="absolute h-40 w-40 bg-white border-2 rounded-full top-10 left-5">
              <UserIcon className="h-40 w-40 p-2" />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="border-2 border-orange-500 rounded-full py-1 px-3 mt-2 mr-2 hover:bg-orange-500 hover:text-white">Edit Profile</button>
          </div>

          <div className="mt-6 mx-5">
            <div className="grid">
              <span className="font-bold text-xl"> You </span>
              <span className="text-sm font-semibold text-gray-500">@UserName</span>
            </div>

          <p className="my-3">bio, Lorem, ipsum dolor sit amet consectbis sun luptate non beata</p>

          <div className="flex gap-2 mb-4">
            <div className="text-sm"> <span className="font-semibold"> 0 </span> <span className="text-gray-500"> Following </span> </div>
            <div className="text-sm"> <span className="font-semibold"> 0 </span> <span className="text-gray-500"> Followers </span> </div>
          </div>
        </div>
          </div>

        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.id}
              displayName={post.username}
              text={post.tweetText}
              personal={post.personal}
              onClick={deleteTweet(post.id)}
            />
          ))}
        </FlipMove>

      </div>
    </div>
  )
}

export default ProfileFeed