"use client";
import React from "react";
import ProjectInformation from "./projectInfo/ProjectInfomation";
import Devices from "./projectInfo/Devices";
import FilterOptions from "./projectInfo/FilterOptions";
import Regions from "./projectInfo/Regions";
import Specifications from "./projectInfo/Specifications";
import { useStateContext } from "@/utils/stateContext";

const CreateProject = () => {
  const {
    selectedRegions,
    specifications,
    projectInformation,
    filterOptions,
    devices,
  } = useStateContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = {
      projectInformation,
      selectedRegions,
      specifications,
      filterOptions,
      devices,
    };

    const jsonData = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "form_data.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex w-[100%] flex-col gap-y-2 px-body xl:gap-x-14 gap-x-7 md:mb-32 mb-10">
      <div className="w-full flex gap-6">
        <ProjectInformation />
        <div className="flex flex-col gap-4 w-[35%]">
          <Devices />
          <FilterOptions />
        </div>
      </div>
      <Regions />
      <Specifications />
      <div className="bg-white w-full h-fit border border-b-highlights mt-4 p-4 flex gap-3 justify-end">
        <button className=" px-2 py-1 bg-[#dd3f3f] rounded text-white  hover:bg-[#aa4646]">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className=" px-2 py-1 bg-[#0f5f9e] rounded text-white  hover:bg-[#2d516d]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateProject;
