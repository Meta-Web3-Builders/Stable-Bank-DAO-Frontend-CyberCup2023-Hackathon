import { ethers } from "ethers";
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import {
  DAO_ADDRESS,
  DAO_CONTRACT,
  DAO_TOKEN_CONTRACT,
  sUSDC_CONTRACT,
  sUSDC_TOKEN_ADDRESS,
} from "../config";
import LoadingBtn from "./LoadingBtn";
import { crowdfund } from "../utils/abi/CrowdFund";

export const DonateModal = ({
  setIsOpenDonateModal,
  setIsApreciationModal,
  crowdFundAddress,
}) => {
  const [amount, setAmount] = useState(0);

  const {
    data: approveData,
    isLoading: approveLoading,
    write: approve,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...sUSDC_CONTRACT,
    functionName: "approve",
    args: [crowdFundAddress, amount ? ethers.utils.parseEther(amount) : "0"],
  });
  const { address } = useAccount();
  const {
    data: tokenBalance,
    // write: getTokenBalance,
    // isLoading: mintLoading,
  } = useContractRead({
    mode: "recklesslyUnprepared",
    ...sUSDC_CONTRACT,
    functionName: "balanceOf",
    args: [address ?? "0x0"],
  });

  const { isLoading: approveWaitLoading } = useWaitForTransaction({
    hash: approveData?.hash,
    onSuccess(data) {
      donateFund?.();
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const {
    data: donateFundData,
    error: donateFundError,
    isLoading: donateFundLoading,
    write: donateFund,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: crowdFundAddress,
    abi: crowdfund,
    functionName: "donateFund",
    args: [amount],
  });

  const { isLoading: donateFundWaitLoading } = useWaitForTransaction({
    hash: donateFundData?.hash,
    onSuccess(data) {
      setIsApreciationModal(true);
      setIsOpenDonateModal(false);
    },
    onError(error) {
      toast.error(`Failed! ${error?.reason}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    approve?.();
  };
  useEffect(() => {
    if (donateFundError) {
      toast.error(donateFundError.reason);
    }
  }, [donateFundError]);
  console.log(tokenBalance);
  return (
    <Fragment>
      <div className="the__modal__wrapper grid place-items-center z-10 fixed h-screen w-screen top-0 right-0">
        <div className="the__modal__item min-h-[400px] p-4 max-w-[450px] w-[100%] rounded-md text-white_variant font-mono">
          <div className="flex justify-end items-center ">
            <button onClick={() => setIsOpenDonateModal(false)}>
              <AiOutlineClose size={"24"} />
            </button>
          </div>

          {/* <div className="text-2xl font-medium">Food Bank</div> */}

          <p className="text-lg mt-2">
            Donate your money to support this honourable project.
          </p>
          <p className="text-lg font-bold">
            Token Balance: {tokenBalance?.toString() / 1e18}
            {/* {ethers.utils.parseEther(tokenBalance)} */}
          </p>
          <form
            className="mt-5 max-w-[650px] mx-auto border border-white p-4 rounded md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="">
              <div className="md:relative">
                <label className="md:hidden font-medium">Amount</label>
                <input
                  type={"number"}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder=" "
                  className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
                />
                <label className="hidden md:block pointer-events-none p-3 absolute top-0 left-0 opacity-50 text-[#6059f7] font-semibold">
                  Amount
                </label>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setIsOpenDonateModal(false)}
                  className="bg-red px-8 py-2 text-xl rounded font-semibold"
                >
                  Close
                </button>
                <LoadingBtn
                  loading={
                    approveWaitLoading ||
                    approveLoading ||
                    donateFundLoading ||
                    donateFundWaitLoading
                  }
                  loadingCopy={"Donating..."}
                  copy={"Donate"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export const AppreciationModal = ({ setIsApreciationModal, name }) => {
  return (
    <div className="the__modal__wrapper grid place-items-center z-10 fixed h-screen w-screen top-0 right-0">
      <div className="the__modal__item min-h-[300px] p-4 max-w-[450px] w-[100%] rounded-md text-white_variant font-mono">
        <div className="flex justify-end items-center ">
          <button onClick={() => setIsApreciationModal(false)}>
            <AiOutlineClose size={"24"} />
          </button>
        </div>

        <div className="text-2xl font-medium mt-6">
          Thank You for donating to {name}
        </div>

        {/* <p className="text-lg mt-2">
          Check your appreciation NFT on <a href="#">Opensea.</a>
        </p> */}

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setIsApreciationModal(false)}
            className="bg-red px-8 py-2 text-xl rounded font-semibold mt-8 items-end"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const JoinDAOModal = ({ setIsOpen }) => {
  const [name, setName] = useState("");

  const {
    data: approveDAOData,
    error: joinError,
    isLoading: approveDAOLoading,
    write: approveDAO,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...sUSDC_CONTRACT,
    functionName: "approve",
    args: [DAO_ADDRESS, ethers.utils.parseEther("15")],
  });

  const { isLoading: approveDAOWaitLoading } = useWaitForTransaction({
    hash: approveDAOData?.hash,
    onSuccess(data) {
      joinDAO?.();
    },
    onError(error) {
      console.log(err);
      toast.error("Failed!");
    },
  });

  const {
    data: joinDAOData,
    error,
    isLoading: joinDAOLoading,
    write: joinDAO,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "joinDAO",
    args: [name],
  });

  const { isLoading: joinDAOWaitLoading } = useWaitForTransaction({
    hash: joinDAOData?.hash,
    onSuccess(data) {
      toast.success("Successful!");
      setName("");
      setIsOpen(false);
    },
    onError(error) {
      console.log(error);
      toast.error("Failed!");
    },
  });
  useEffect(() => {
    toast.error(error?.reason);
  }, [error]);
  useEffect(() => {
    toast.error(joinError?.reason);
  }, [joinError]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    approveDAO?.();
    // if (error || joinError) toast(error?.reason);
  };

  return (
    <Fragment>
      <div className="the__modal__wrapper grid place-items-center z-10 fixed h-screen w-screen top-0 right-0">
        <div className="the__modal__item min-h-[350px] p-4 max-w-[450px] w-[100%] rounded-md text-white_variant font-mono">
          <div className="flex justify-end items-center ">
            <button onClick={() => setIsOpen(false)}>
              <AiOutlineClose size={"24"} />
            </button>
          </div>

          <div className="text-2xl font-medium">Join Stable Bank DAO</div>

          <form
            className="mt-5 max-w-[650px] mx-auto border border-white p-4 rounded md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="">
              <div className="md:relative">
                <label className="md:hidden font-medium">Name</label>
                <input
                  type={"text"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" "
                  className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
                />
                <label className="hidden md:block pointer-events-none p-3 absolute top-0 left-0 opacity-50 text-[#6059f7] font-semibold">
                  Name
                </label>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-red px-8 py-2 text-xl rounded font-semibold"
                >
                  Close
                </button>
                <LoadingBtn
                  loading={
                    approveDAOLoading ||
                    approveDAOWaitLoading ||
                    joinDAOLoading ||
                    joinDAOWaitLoading
                  }
                  loadingCopy={"Joining..."}
                  copy={"Join"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export const MintModal = ({ setIsOpen }) => {
  const [amount, setAmount] = useState("");
  const { address } = useAccount();
  const {
    data: mintDAOData,
    write: mintToken,
    isLoading: mintLoading,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "purchaseDAOToken",
    args: [amount ? ethers.utils.parseEther(amount) : "0"],
    onError(error) {
      toast.error(`Failed ${error.reason}`);
    },
  });
  const {
    data: tokenBalance,
    // write: getTokenBalance,
    // isLoading: mintLoading,
  } = useContractRead({
    mode: "recklesslyUnprepared",
    ...DAO_TOKEN_CONTRACT,
    functionName: "balanceOf",
    args: [address ?? "0x0"],
    onError(error) {
      toast.error(`Failed ${error.reason}`);
    },
  });

  console.log(tokenBalance);
  // waiting for transaction
  useWaitForTransaction({
    hash: mintDAOData?.hash,
    onSuccess() {
      toast.success("Mint Successful!");
    },
    onError(error) {
      console.log(error);
      toast.error("Failed!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // mintToken?.();
  };
  const balance = tokenBalance?.toString() / 1e18;

  return (
    <Fragment>
      <div className="the__modal__wrapper grid place-items-center z-10 fixed h-screen w-screen top-0 right-0">
        <div className="the__modal__item min-h-[350px] p-4 max-w-[450px] w-[100%] rounded-md text-white_variant font-mono">
          <div className="flex justify-end items-center ">
            <button onClick={() => setIsOpen(false)}>
              <AiOutlineClose size={"24"} />
            </button>
          </div>

          <div className="text-2xl font-medium">Mint DAO Token</div>

          <form
            className="mt-5 max-w-[650px] mx-auto border border-white p-4 rounded md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="">
              <div className="md:relative">
                <label className="md:hidden font-medium">Amount</label>
                <input
                  type={"number"}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder=" "
                  className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
                />
                <label className="hidden md:block pointer-events-none p-3 absolute top-0 left-0 opacity-50 text-[#6059f7] font-semibold">
                  Amount
                </label>
              </div>

              <p className="text-red">Maxinum of Ten DAO Token is allowed</p>
              <p className="text-sm text-bold mt-2">
                {balance ? ` Your currrent balance is ${balance} ` : 0}
              </p>
              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-red px-8 py-2 text-xl rounded font-semibold"
                >
                  Close
                </button>
                <LoadingBtn
                  loading={mintLoading}
                  loadingCopy={"Minting..."}
                  copy={"Mint"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
