import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import FlipMove from "react-flip-move";
import { TwitterContractAddress } from './config.js';
import { ethers } from 'ethers';
import Twitter from './utils/TwitterContract.json'


function Feed({ personal }) {
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
    let reversedArray = updatedTweets.reverse();
    return reversedArray;
  }

  const getAllTweets = async () => {
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

        let allTweets = await TwitterContract.getAllTweets();
        setPosts(getUpdatedTweets(allTweets, ethereum.selectedAddress));
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(() => {
    getAllTweets();
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
        let allTweets = await TwitterContract.getAllTweets();
        setPosts(getUpdatedTweets(allTweets, ethereum.selectedAddress));
      } else {
        console.log("Ethereum object doesn't exist");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center h-screen">
      <div className='border-x-2 w-[100%] lg:w-2/5'>
        <h1 className='text-2xl font-bold mx-6 my-7'> Home </h1>
        
        {/* Tweet Box */}
        <div>
          <TweetBox />
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
  );
}

export default Feed;
