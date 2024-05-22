"use client";
import React from "react";
import { useStateContext } from "@/utils/stateContext";

const FilterOptions = () => {
  const { filterOptions, handleFilterOptionsChange } = useStateContext();

  return (
    <div className="bg-complementory border border-highlights">
      <h2 className="text-xl font-medium bg-white px-4 py-2">FILTER OPTIONS</h2>
      <div className="flex flex-col p-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={filterOptions.gatesurvey}
            onChange={(e) => handleFilterOptionsChange("gatesurvey", e.target.checked)}
          />
          <span className="ml-2">Gate Survey</span>
        </label>
        <label className="inline-flex items-center mt-2">
          <input
            type="checkbox"
            checked={filterOptions.fraudDetection}
            onChange={(e) => handleFilterOptionsChange("fraudDetection", e.target.checked)}
          />
          <span className="ml-2">Fraud Detection</span>
        </label>
      </div>
    </div>
  );
};

export default FilterOptions;
