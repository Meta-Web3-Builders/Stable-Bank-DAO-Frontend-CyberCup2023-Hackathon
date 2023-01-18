import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import { sUSDC_MINTING_CONTRACT } from "../config";

const Home = () => {
  // const {
  //   data: mintsUSDCData,
  //   isError: mintsUSDCError,
  //   isLoading: mintsUSDCLoading,
  //   writeAsync: mintsUSDC,
  // } = useContractWrite({
  //   mode: "recklesslyUnprepared",
  //   ...sUSDC_MINTING_CONTRACT,
  //   functionName: "mintToken",
  // });

  // const { isLoading: mintsUSDCWaitLoading } = useWaitForTransaction({
  //   hash: mintsUSDCData?.hash,
  //   onSuccess(data) {
  //     toast.success("Minted Successfully!");
  //   },
  //   onError(error) {
  //     toast.error("Failed!");
  //   },
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   mintsUSDC?.();
  // };

  return (
    <div className="bg-[#0e2433]">
      <div className="text-center text-white py-7 lg:px-16 md:px-8 px-8">
        <div className="font-bold font-mono text-4xl">StableBankDAO</div>
      </div>
      <div className="lg:px-16 md:px-8 px-8 pt-12">
        <div className="">
          <p className="max-w-[800px] mx-auto text-center text-white_variant mt-6 text-2xl md:text-3xl">
            The Stable Bank DAO FundMe is a crowd-funding platform where people
            can donate money to help a cause. When a proposal is approved by a
            majority of the DAO's members, it is automatically opened to the
            public for contributions, and members of the Stable Bank DAO can
            make contributions to the DAO to help fund the project.
          </p>

          <div className="mt-32 justify-center flex text-white_variant">
            <Link
              to={"/fund-me"}
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium"
            >
              Fund Me
            </Link>
            <Link
              to={"/join-dao"}
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium ml-6"
            >
              Join DAO
            </Link>
          </div>
        </div>

        <div className="text-white_variant font-mono mt-32 pb-32">
          <div className="mb-6 text-center text-3xl underline">WHAT WE DO</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="border-2 border-tertiary p-6 text-xl rounded">
              Stable Bank DAO is an initiative raised up to raise funds for
              people to set up a project for a greater good and purpose.
            </div>
            <div className="border-2 border-tertiary p-6 text-xl rounded">
              Stable Bank DAO aspires to be a pioneer in blockchain-based
              charitable organizations.
            </div>
            <div className="border-2 border-tertiary p-6 text-xl rounded">
              Stable Bank DAO is a platform founded by people who want to use
              crowdfunding to address global issues by using blockchain
              technology to help charitable causes.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
