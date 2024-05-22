"use client";
import React, { useState, useEffect, FC } from "react";
import MenuOptions from "../menuOptions/MenuOptions";
import CreateProject from "../createProject/CreateProject";
import { StateProvider } from "@/utils/stateContext";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <StateProvider>
      <div className="flex w-[100%] gap-1 md:flex-row justify-between flex-col bg-secondary">
        <MenuOptions
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <div className="w-[80%] py-4 px-8">
          {selectedTab === "create-project" && <CreateProject />}
        </div>
      </div>
    </StateProvider>
  );
};

export default Home;
