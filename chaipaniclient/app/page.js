"use client";
import abi from "./../data/Chapani.json";
import { useState, useEffect } from "react";

import { ethers } from "./../node_modules/ethers/dist/ethers.min.js";
import BuyChai from "@/components/BuyChai";
import Memos from "@/components/Memos";

export default function Home() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xa5e19b0a4b77d8d5aaa594067115010014e1b296";
      const contractAbi = abi.abi;
      try {
        const { ethereum } = window;
        // console.log(ethereum);
        if (ethereum) {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.BrowserProvider(ethereum);
          console.log(provider);
          // const provider = new ethers.providers.JsonRpcProvider();
          const signer = await provider.getSigner();
          console.log(signer);
          const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
          console.log(contract);
          setState({
            provider,
            signer,
            contract,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  // console.log(abi);
  // const chaipani = chaipaniData();
  console.log(state);
  console.log(state);
  return (
    <main className=" flex flex-col mx-32 my-10 justify-between ">
      <h1>Hello Blockchain...</h1>
      <BuyChai state={state} />
      <Memos state={state} />
    </main>
  );
}
