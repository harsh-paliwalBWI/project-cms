"use client";
import React from "react";
import { useStateContext } from "@/utils/stateContext";

const Devices = () => {
  const { devices, handleDevicesChange } = useStateContext();

  return (
    <div className="bg-complementory border border-highlights">
      <h2 className="text-xl font-medium bg-white px-4 py-2">DEVICES</h2>
      <div className="flex flex-col p-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={devices.mobile}
            onChange={(e) => handleDevicesChange("mobile", e.target.checked)}
          />
          <span className="ml-2">Mobile</span>
        </label>
        <label className="inline-flex items-center mt-2">
          <input
            type="checkbox"
            checked={devices.tablet}
            onChange={(e) => handleDevicesChange("tablet", e.target.checked)}
          />
          <span className="ml-2">Tablet</span>
        </label>
        <label className="inline-flex items-center mt-2">
          <input
            type="checkbox"
            checked={devices.desktop}
            onChange={(e) => handleDevicesChange("desktop", e.target.checked)}
          />
          <span className="ml-2">Desktop</span>
        </label>
      </div>
    </div>
  );
};

export default Devices;
