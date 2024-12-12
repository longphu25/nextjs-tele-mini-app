"use server";

import { BlockfrostProvider, MeshWallet } from "@meshsdk/core";

export const someAction = async () => {
  const APIKEY = process.env.PROJECT_ID!;
  const blockchainProvider = new BlockfrostProvider(APIKEY);
  const wallet = new MeshWallet({
    networkId: 0,
    fetcher: blockchainProvider,
    submitter: blockchainProvider,
    key: {
      type: "mnemonic",
      words: [
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
        "solution",
      ],
    },
  });

  const address = wallet.getChangeAddress();
  console.log(address);
};
