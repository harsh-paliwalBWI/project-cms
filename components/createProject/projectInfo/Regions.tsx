"use client";
import React from "react";
import Select from 'react-select';
import { useStateContext } from "@/utils/stateContext";

function Regions() {
  const { selectedRegions, handleRegionChange } = useStateContext();

  const regions = [
    { value: "North America", label: "North America" },
    { value: "Europe", label: "Europe" },
    { value: "Asia", label: "Asia" },
    { value: "South America", label: "South America" },
    { value: "Africa", label: "Africa" },
    { value: "Australia", label: "Australia" },
    { value: "Brazil", label: "Brazil" },
  ];

  const handleChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    const newRegions = selectedValues.filter((region: any) => !selectedRegions.includes(region));
    const removedRegions = selectedRegions.filter(region => !selectedValues.includes(region));

    newRegions.forEach((region: any) => {
      handleRegionChange(region);
    });

    removedRegions.forEach(region => {
      handleRegionChange(region);
    });
  };

  return (
    <div className="bg-complementory w-full h-fit border border-highlights">
      <h2 className="text-xl font-medium bg-white px-4 py-2">REGIONS</h2>
      <div className="px-4 py-2">
        <label className="block text-sm font-medium">Country</label>
        <Select
          isMulti
          value={regions.filter(region => selectedRegions.includes(region.value))}
          onChange={handleChange}
          options={regions}
          className="w-full border border-gray-900 max-h-60"
        />
      </div>
    </div>
  );
}

export default Regions;
