"use client";
import React, { useState, FC } from "react";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

interface MenuOptionsProps {
  setSelectedTab: any;
  selectedTab: any;
}

const MenuOptions: FC<MenuOptionsProps> = ({ setSelectedTab, selectedTab }) => {
  const [isProjectMenuOpen, setProjectMenuOpen] = useState(false);

  const toggleProjectMenu = () => {
    setProjectMenuOpen(!isProjectMenuOpen);
  };

  return (
    <>
      <div className="  lg:w-[20%] md:w-[30%] sm:w-[40%] w-[100%]  min-h-[100vh] bg-[#0f5f9e]  ">
        <div
          className="cursor-pointer py-2 px-4 flex justify-between items-center "
          onClick={toggleProjectMenu}
        >
          <div className="flex gap-4 items-center">
            <div className="text-white text-base">
              <BsRocketTakeoffFill />
            </div>
            <h1 className="text-white text-xl">Project</h1>
          </div>
          <div className="text-white text-xl font-medium">
            {isProjectMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
          </div>
        </div>
        {isProjectMenuOpen && (
          <div className=" flex flex-col  bg-[#F3F7FA] py-4 px-7 gap-2">
            <div
              className={`lg:text-sm text-xs font-semibold  cursor-pointer ${
                selectedTab === "create-project" ? "text-primary" : "text-black"
              }`}
              onClick={() => setSelectedTab("create-project")}
            >
              <div className="">Create Project</div>
            </div>

            <div
              className={`lg:text-sm text-xs font-semibold  cursor-pointer  ${
                selectedTab === "manage-project"
                  ? "text-primary"
                  : "text-black"
              }`}
              onClick={() => setSelectedTab("manage-project")}
            >
              <div>Manage Project</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuOptions;
