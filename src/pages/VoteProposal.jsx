import { ethers } from "ethers";
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import Banner from "../assets/project.jpeg";
import Loader from "../components/Loader";
import {
  DAO_ADDRESS,
  DAO_CONTRACT,
  DAO_TOKEN_CONTRACT,
  imagesArray,
} from "../config";

const VoteProposal = () => {
  const navigate = useNavigate();
  const { address } = useAccount();

  const [index, setIndex] = useState(0);
  const { data: adminAddress, isLoading: adminAddressLoading } =
    useContractRead({
      ...DAO_CONTRACT,
      functionName: "Admin",
    });
  const { data: getAllProposals } = useContractRead({
    ...DAO_CONTRACT,
    functionName: "getAllProposals",
  });

  const {
    data: approveBurnData,
    isLoading: approveBurnLoading,
    write: approveBurn,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_TOKEN_CONTRACT,
    functionName: "approve",
    args: [DAO_ADDRESS, ethers.utils.parseEther("1")],
  });

  const { isLoading: approveBurnWaitLoading } = useWaitForTransaction({
    hash: approveBurnData?.hash,
    onSuccess(data) {
      voteProposal?.();
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const {
    data: voteProposalData,
    error: voteProposalError,
    isLoading: voteProposalLoading,
    write: voteProposal,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "voteProposal",
    args: [Number(index)],
  });
  useEffect(() => {
    if (voteProposalError) {
      toast(voteProposalError?.reason);
    }
  }, [voteProposalError]);

  const { isLoading: voteProposalWaitLoading } = useWaitForTransaction({
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

  const handleVote = (i) => {
    setIndex(i);

    approveBurn?.();
  };

  const {
    data: adminApproveProposalData,
    isError: adminApproveProposalError,
    isLoading: adminApproveProposalLoading,
    write: adminApproveProposal,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "approveProposal",
    args: [Number(index)],
  });

  const { isLoading: adminApproveProposalWaitLoading } = useWaitForTransaction({
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

  const {
    error: rejectAdminError,
    data: adminRejectProposalData,
    write: adminRejectProposal,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "rejectProposal",
    args: [Number(index)],
  });

  useWaitForTransaction({
    hash: adminRejectProposalData?.hash,
    onSuccess(data) {
      toast.success("Rejected Successfully!");
      setIndex(0);
      // navigate("/fund-me");
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const handleCancelProposal = (i) => {
    setIndex(i);

    setTimeout(() => {
      adminApproveProposal?.();
    }, 1500);
  };
  const x = useCallback((selectedImage) => {
    return Math.floor(Math.random() * selectedImage.length);

    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (rejectAdminError) {
      toast(error.reason);
    }
  }, [rejectAdminError]);
  return (
    <div className="bg-[#0e2433] min-h-screen lg:px-16 md:px-8 px-8 pt-12">
      {approveBurnLoading ||
        approveBurnWaitLoading ||
        voteProposalLoading ||
        (voteProposalWaitLoading && <Loader />)}
      <div className="text-white_variant font-mono t-12 pb-32">
        <div className="mb-12 text-xl">
          Members of Stable Bank DAO. Our mission is to support people's live
          and make them better. We scrutinize proposals/projects and vote the
          right project so that the general public can fund these projects.
        </div>

        {address === adminAddress ? (
          <div className="my-16">
            {Array.isArray(getAllProposals) &&
              getAllProposals.length > 0 &&
              getAllProposals.map((proposal, i) => {
                return (
                  <div key={i}>
                    {!proposal?.approved ? (
                      <div className="flex justify-between items-center text-xl rounded-3xl mb-3">
                        <h1 className="text-2xl font-medium flex-1">
                          {proposal && proposal?.topic}
                        </h1>
                        <p className="flex-1">
                          AMOUNT:{" "}
                          <strong>
                            {proposal &&
                              ethers.utils.formatUnits(
                                proposal?.amountProposed?._hex
                              )}{" "}
                            MATIC
                          </strong>
                          .
                        </p>
                        <div className="flex-1 justify-end flex">
                          <button
                            onClick={() => handleCancelProposal(i)}
                            className="bg-tertiary px-8 py-2 text-xl rounded"
                          >
                            Cancel
                          </button>

                          <button
                            onClick={() => handleApproveProposal(i)}
                            className="bg-tertiary px-8 py-2 text-xl rounded ml-6"
                          >
                            Approve
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {Array.isArray(getAllProposals) &&
            getAllProposals.length > 0 &&
            getAllProposals.map((proposal, i) => {
              const { topic, amountProposed, category } = proposal;
              const vote = proposal?.votes.toNumber();
              console.log();
              const selectedImage = imagesArray[category];

              return (
                <div key={i}>
                  {!proposal?.created ? (
                    <div className="border-2 border-tertiary text-xl rounded-3xl">
                      <div className="border-b-2 border-tertiary pb-2">
                        <img
                          src={selectedImage[x(selectedImage)]}
                          className="rounded-t-3xl w-[100%] h-[250px]"
                          alt="banner"
                        />
                      </div>
                      <div className="p-6">
                        <h1
                          title={topic}
                          className="text-2xl font-medium mb-2 whitespace-nowrap text-ellipsis overflow-hidden ..."
                        >
                          {topic}
                        </h1>
                        <p className="mb-6 ">
                          This project is proposed to raise{" "}
                          <strong>
                            {ethers.utils.formatUnits(amountProposed?._hex)}{" "}
                            USDC
                          </strong>
                          .
                        </p>

                        <div className="flex items-center justify-between">
                          <Link to={`/vote-proposal/${i}`} className="w-full">
                            <button
                              // disabled={proposal?.created}
                              // onClick={() => navigate()}
                              className="bg-tertiary w-[100%] px-8 py-2 text-xl rounded"
                            >
                              View Proposal
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default VoteProposal;
