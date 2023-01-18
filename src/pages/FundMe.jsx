import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/project.jpeg";
import Giver from "../assets/giver.png";
import { useContractRead, useContractReads } from "wagmi";
import { CROWDFUND_FACTORY_CONTRACT } from "../config";
import { ethers } from "ethers";
import { crowdfund } from "../utils/abi/CrowdFund";

const FundMe = () => {
  const { data: returnCrowdfund, isLoading: returnCrowdfundLoading } =
    useContractRead({
      ...CROWDFUND_FACTORY_CONTRACT,
      functionName: "returnCrowdfund",
    });

  const init_tx_data = [];

  if (returnCrowdfund?.length > 0) {
    for (let i = 0; i < returnCrowdfund?.length; i++) {
      init_tx_data.push(
        {
          address: returnCrowdfund[i],
          abi: crowdfund,
          functionName: "name",
        },
        {
          address: returnCrowdfund[i],
          abi: crowdfund,
          functionName: "targetAmount",
        },
        {
          address: returnCrowdfund[i],
          abi: crowdfund,
          functionName: "amountRaised",
        }
      );
    }
  }

  const { data: proposal } = useContractReads({
    contracts: init_tx_data,
  });

  const [proposals, setProposals] = useState([proposal]);

  console.log({proposals});

  return (
    <div className="bg-[#0e2433] lg:px-16 md:px-8 px-8 pt-12">
      <div className="lg:flex justify-between">
        <div className="lg:mt-8 lg:flex-1 text-white_variant">
          <div className="md:text-4xl text-4xl font-medium text-center lg:text-left">
            "Charity is the one thing that cannot be taken away from us, and the
            one thing that will never disappear".
          </div>

          <p className="text-center lg:text-left mt-6 text-2xl md:text-3xl">
            Make someone's life better by giving of yours!
          </p>

          <div className="flex justify-center lg:justify-start  mt-[4rem] lg:mb-0">
            <Link
              to={"#"}
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium"
            >
              Fund a project
            </Link>
            <Link
              to={"/projects"}
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium ml-32"
            >
              View all funding
            </Link>
            {/* <button className="bg-tertiary px-5 py-2 text-xl rounded font-medium ml-4">
              
            </button> */}
          </div>
        </div>
        <div className="lg:flex-1">
          <img src={Giver} width="200%" height={"200%"} alt="charity" />
        </div>
      </div>

      <div className="text-white_variant font-mono mt-48 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {Array.isArray(proposals) &&
            proposals?.length > 0 &&
            proposals?.map((proposal, i) => {
              return (
                <div
                  key={i}
                  className="border-2 border-tertiary text-xl rounded-3xl"
                >
                  <div className="border-b-2 border-tertiary pb-2">
                    <img
                      src={Banner}
                      className="rounded-t-3xl w-[100%] h-[250px]"
                      alt="banner"
                    />
                  </div>
                  <Link to={`/proposal/${i}`}>
                    <div className="p-6">
                      <h1 className="text-2xl font-medium mb-2">
                        {proposal && proposal[0]}
                      </h1>
                      {/* <p className="mb-2">Agriculture Category</p> */}
                      <p className="mb-6">
                        <strong>
                          {proposal &&
                            ethers.utils.formatUnits(
                              proposal[2]?._hex,
                              18
                            )}{" "}
                          MATIC
                        </strong>{" "}
                        OF{" "}
                        <strong>
                          {proposal &&
                            ethers.utils.formatUnits(
                              proposal[1]?._hex,
                              18
                            )}{" "}
                          MATIC
                        </strong>{" "}
                        RAISED.
                      </p>

                      {/* <ProgressBar percentage={"40"} />
                      <div className="flex justify-end text-base">40%</div> */}
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FundMe;
