import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
} from "wagmi";
import Avatar1 from "../assets/avatar1.jpeg";
import { JoinDAOModal, MintModal } from "../components/Modal";
import { DAO_CONTRACT, shortAccount, sUSDC_MINTING_CONTRACT } from "../config";

const JoinDAO = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMint, setIsMint] = useState(false);
  const { address } = useAccount();

  const {
    data: mintUSDCData,
    write: mintUSDCToken,
    error: mintError,
    isLoading: mintUSDCLoading,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...sUSDC_MINTING_CONTRACT,
    functionName: "mintToken",
    onError(error) {
      toast.error(`Failed ${mintError.reason}`);
    },
  });
  const { data: allMembers } = useContractRead({
    functionName: "showAllDAOMemberDetails",
    ...DAO_CONTRACT,
  });

  // transaction for USDC
  useWaitForTransaction({
    hash: mintUSDCData?.hash,
    onSuccess() {
      toast.success("Mint Successful!");
    },
    onError() {
      toast.error("Failed!");
    },
  });

  const { data: adminAddressDetails } = useContractRead({
    ...DAO_CONTRACT,
    functionName: "Admin",
  });
  const [members, setMembers] = useState([]);
  useEffect(() => {
    setMembers(allMembers);
  }, [allMembers]);

  const handleMintUSDC = () => mintUSDCToken?.();
  return (
    <>
      {isOpen && <JoinDAOModal setIsOpen={setIsOpen} />}
      <div className="bg-[#0e2433] text-white_variant lg:px-16 md:px-8 px-8 pt-7 min-h-screen">
        <div className="mb-3 flex justify-end">
          {adminAddressDetails === address && (
            <Link
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium"
              to={"/approve-dao-member"}
            >
              Approve DAO Member
            </Link>
          )}
        </div>
        <div className="">
          <div className="text-center max-w-[800px] mx-auto">
            <div className="text-4xl">
              The governance of Stable Bank DAO is a decentralized autonomous
              organization governed by its members via a set of rules and
              protocols. Stable Bank DAO was founded and is managed by members
              who share a common goal or purpose. Stable Bank DAO was
              established to assist in the development of an open-source
              software project, as well as to fund and manage a charitable
              organization.
            </div>
            {/* <div className="text-xl mt-4">
              Join our DAO to be part of the <i>Decisions Maker</i>
            </div> */}
          </div>

          <div className="mt-12 flex justify-center items-center">
            <button
              onClick={() => setIsOpen(true)}
              // disabled={mintLoading}
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium"
            >
              Join DAO
            </button>
          </div>
        </div>

        {/* The part where approved user can mint token dao, this is will be visible only when the user has been approved */}
        {/* if this section is available, the one above will disappear and vice versa */}

        <div className="md:mt-12 mt-12">
          <div className="text-center">
            <div className="text-2xl max-w-[500px] mx-auto">
              You are a member of Stable Bank DAO, mint token in order to be
              able to vote on a proposal
            </div>
          </div>

          <div className="mt-12 flex-1 flex justify-center items-center gap-4">
            <button
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium"
              onClick={() => setIsMint(true)}
            >
              Mint DAO Token
            </button>
            <button
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium"
              onClick={handleMintUSDC}
              disabled={mintUSDCLoading}
            >
              {mintUSDCLoading ? "Minting" : "Mint USDC"}
            </button>
          </div>
        </div>

        <div className="text-white_variant font-mono mt-16 pb-32">
          <div className="mb-10 text-center text-3xl underline">
            DAO MEMBERS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {members?.length > 0 ? (
              members.map((member, index) => {
                const { memberAddress, name } = member;
                return (
                  <div
                    key={index}
                    className=" border-[3px]  rounded-b-md border-tertiary"
                  >
                    <img
                      src={Avatar1}
                      className=" w-full"
                      alt="member of dao"
                    />
                    <div className="p-3">
                      <p className="font-bold text-[1.6rem]" title={name}>
                        {name}
                      </p>
                      <p
                        title={memberAddress}
                        className="text-[1.2rem] font-medium"
                      >
                        {shortAccount(memberAddress)}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No Member</p>
            )}
          </div>
        </div>
      </div>
      {isMint && <MintModal setIsOpen={setIsMint} />}
    </>
  );
};

export default JoinDAO;
