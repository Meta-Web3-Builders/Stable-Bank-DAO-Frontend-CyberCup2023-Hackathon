import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { DAO_ADDRESS, DAO_CONTRACT, DAO_TOKEN_CONTRACT } from "../config";

const ApproveDAOMember = () => {
  const [address, setAddress] = useState("");

  const { data: memberDetails, isLoading: memberDetailsLoading } =
    useContractRead({
      ...DAO_CONTRACT,
      functionName: "showAllDAOMemberDetails",
    });

  const {
    data: approveBurnData,
    isError: approveBurnError,
    isLoading: approveBurnLoading,
    write: approveBurn,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_TOKEN_CONTRACT,
    functionName: "approve",
    args: [DAO_ADDRESS, ethers.utils.parseEther("10")],
  });

  const { isLoading: approveBurnWaitLoading } = useWaitForTransaction({
    hash: approveBurnData?.hash,
    onSuccess(data) {
      rejectMember?.();
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const {
    data: approveMemberData,
    error: approveMemberDataError,
    write: approveMember,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "approveApplicant",
    args: [address ?? "0x0"],
  });

  const { isLoading: approveDAOWaitLoading } = useWaitForTransaction({
    hash: approveMemberData?.hash,
    onSuccess(data) {
      toast.success("Successful!");
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const {
    data: rejectMemberData,
    error: rejectMemberError,
    write: rejectMember,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "rejectApplicant",
    args: [address ?? "0x0"],
  });
  useEffect(() => {
    if (rejectMemberError || approveMemberDataError) {
      toast(rejectMemberError?.reason || approveMemberDataError?.reason);
    }
  }, [rejectMemberError, approveMemberDataError]);
  useWaitForTransaction({
    hash: rejectMemberData?.hash,
    onSuccess() {
      toast.success("Successful!");
    },
    onError() {
      toast.error("Failed!");
    },
  });

  const handleReject = (address) => {
    setAddress(address);

    setTimeout(() => {
      approveBurn?.();
    }, 1500);
  };

  const handleApprove = (address) => {
    setAddress(address);

    setTimeout(() => {
      approveMember?.();
    }, 1500);
  };

  return (
    <div className="bg-[#0e2433] text-white_variant lg:px-16 md:px-8 px-8 pt-12 min-h-screen">
      <h2 className="text-xl md:text-2xl font-mono mb-4">
        List of people requested to join DAO
      </h2>
      {Array.isArray(memberDetails) && memberDetails.length > 0 ? (
        memberDetails.map((member, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-between mb-4 flex-wrap"
            >
              <div className="text-xl font-medium">{member?.memberAddress}</div>
              <div className="flex items-center">
                <button
                  onClick={() => handleReject(member?.memberAddress)}
                  className="bg-red px-4 py-1 text-xl rounded"
                >
                  Reject
                </button>
                <button
                  onClick={() => handleApprove(member?.memberAddress)}
                  className="bg-green px-4 py-1 text-xl rounded ml-4"
                >
                  Approve
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="">No Member available</div>
      )}
    </div>
  );
};

export default ApproveDAOMember;
