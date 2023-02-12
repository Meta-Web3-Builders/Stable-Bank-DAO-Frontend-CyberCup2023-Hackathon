import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ConnectionButton } from "./ConnectionButton";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();

  return (
    <Fragment>
      {pathname === "/" ? null : (
        <div className="flex justify-between items-center nav__bar text-white py-4 lg:px-16 md:px-8 px-8">
          <Link to={"/"} className="nav_logo font-bold font-mono text-2xl">
            StableBankDAO
          </Link>

          <ul className="md:flex font-mono items-center text-lg font-medium hidden ">
            <li className="mr-4">
              <Link to={"/projects"}>Projects</Link>
            </li>
            {/* <li className="mr-4">
                <Link to={'/join-dao'}>Join DAO</Link>
            </li> */}
            <li className="mr-4">
              <Link to={"/create-proposal"}>Create Proposal</Link>
            </li>
            <li className="mr-4 hidden lg:block">
              <Link to={"/vote-proposal"}>Vote Proposal</Link>
            </li>
            <li className="">
              <ConnectionButton />
            </li>
          </ul>

          <div className="md:hidden">
            <FiMenu className="text-2xl" onClick={() => setIsOpen(!isOpen)} />
          </div>

          {isOpen && (
            <div
              className="animate__animated animate__fadeInRight absolute right-0 top-0 nav__bar w-[80%] h-screen z-50"
              style={{ zIndex: "9999" }}
            >
              <AiOutlineClose
                onClick={() => setIsOpen(false)}
                size={24}
                className={
                  "absolute cursor-pointer top-5 right-5 text-white font-bold"
                }
              />

              <ul className="mt-20 flex flex-col justify-center items-center text-lg font-semibold font-mono mx-auto w-[100%]">
                <li className="mr-4 mb-4">
                  <Link to={"/projects"}>Projects</Link>
                </li>
                <li className="mr-4 mb-4">
                  <Link to={"/join-dao"}>Join DAO</Link>
                </li>
                <li className="mr-4 mb-4">
                  <Link to={"/create-proposal"}>Create Proposal</Link>
                </li>
                <li className="mr-4 mb-4">
                  <Link to={"/vote-proposal"}>Vote Proposal</Link>
                </li>
                <li className="mr-4 mb-4">
                  <Link to={"/approve-member"}>Approve DAO Member</Link>
                </li>
                <li className="">
                  <ConnectionButton />
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
