import { ethers } from "ethers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import {
  DAO_ADDRESS,
  DAO_CONTRACT,
  DAO_TOKEN_CONTRACT,
  getCategory,
  sUSDC_TOKEN_ADDRESS,
} from "../config";

const ViewProposal = () => {
  const {
    data: approveBurnData,
    write: approveBurn,
    error: burnError,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_TOKEN_CONTRACT,
    functionName: "approve",
    args: [DAO_ADDRESS, ethers.utils.parseEther("1")],
  });
  //check balance

  useWaitForTransaction({
    hash: approveBurnData?.hash,
    onSuccess(data) {
      voteProposal?.();
    },
    onError(error) {
      toast.error("Failed!");
    },
  });
  const { id } = useParams();
  const {
    data: voteProposalData,
    error: voteProposalError,
    write: voteProposal,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "voteProposal",
    args: [Number(id)],
  });
  useEffect(() => {
    if (voteProposalError || burnError) {
      toast(voteProposalError?.reason || burnError?.reason);
    }
  }, [voteProposalError, burnError]);

  useWaitForTransaction({
    hash: voteProposalData?.hash,
    onSuccess(data) {
      toast.success("Voted Successfully!");
      navigate("/fund-me");
      setIndex(0);
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const handleVote = () => approveBurn?.();

  const { data: proposal } = useContractRead({
    functionName: "viewProposal",
    ...DAO_CONTRACT,
    args: [Number(id)],
  });

  const {
    data: adminApproveProposalData,

    write: adminApproveProposal,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "approveProposal",
    args: [Number(id)],
  });

  useWaitForTransaction({
    hash: adminApproveProposalData?.hash,
    onSuccess(data) {
      toast.success("Approved Successfully!");
      setIndex(0);
      // navigate("/fund-me");
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const handleApproveProposal = (i) => {
    setIndex(i);

    setTimeout(() => {
      adminApproveProposal?.();
      console.log(i);
    }, 1500);
  };

  return (
    <div className="w-full bg-[#0e2433] pt-8 min-h-screen">
      <div className="p-8 w-[400px] rounded-md pt-[3rem] bg-white  mx-auto font-mono">
        <div className="md:flex ">
          <div className="flex-1">
            <h1 className="text-2xl font-medium flex-1">
              Topic: {proposal?.topic}
            </h1>
            <p className="flex-1">
              AMOUNT:{" "}
              <strong>
                {proposal &&
                  ethers.utils.formatUnits(proposal?.amountProposed?._hex)}{" "}
                sUSDC
              </strong>
              .
            </p>
            <p className="flex-1">
              Total Votes: <strong>{proposal?.votes.toNumber()}</strong>.
            </p>
            <p className="flex-1">
              Category: <strong>{getCategory(proposal?.category)}</strong>.
            </p>

            <div className="underline text-3xl"></div>
            <p className="text-xl"></p>
          </div>
        </div>
        <div className="flex-1 mb-8"></div>
        <p className="text-xs">
          {proposal?.created
            ? "Qourum Reached"
            : "* You should only vote once."}
        </p>
        {/* There will be a conditional rendering here: to vote for reject or support, a rejected proposal or supported proposal */}
        <div className="flex items-center justify-between">
          <button
            disabled={proposal?.created}
            onClick={handleVote}
            className="bg-tertiary w-[100%] px-8 py-2 text-xl rounded"
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProposal;
