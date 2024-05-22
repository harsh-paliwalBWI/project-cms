"use client";
import React from "react";
import { useStateContext } from "@/utils/stateContext";

const projectTypes = ["Type 1", "Type 2", "Type 3"];
const categories = ["Category 1", "Category 2", "Category 3"];
const clients = ["Client 1", "Client 2", "Client 3"];
const clientContacts = ["Contact 1", "Contact 2", "Contact 3"];
const salesPersons = ["Sales Person 1", "Sales Person 2", "Sales Person 3"];
const projectManagers = ["Manager 1", "Manager 2", "Manager 3"];

const ProjectInformation = () => {
  const { projectInformation, handleProjectInfoChange } = useStateContext();

  return (
    <div className="bg-complementory w-[65%] border border-highlights">
      <h2 className="text-xl font-medium bg-white px-4 py-2">PROJECT INFORMATION</h2>
      <div className="grid grid-cols-6 gap-3 p-4">
        <div className="col-span-3">
          <label className="block text-sm font-medium">Project Name</label>
          <input
            type="text"
            className="w-full mt-0.5 p-2 border border-gray-800 text-sm"
            placeholder="Project Name"
            value={projectInformation.projectName}
            onChange={(e) => handleProjectInfoChange('projectName', e.target.value)}
          />
        </div>
        <div className="col-span-3">
          <label className="block text-sm font-medium">Work Order No.</label>
          <input
            type="text"
            className="w-full mt-0.5 p-2 border border-gray-800 text-sm"
            placeholder="Work Order Number"
            value={projectInformation.workOrderNumber}
            onChange={(e) => handleProjectInfoChange('workOrderNumber', e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Project Type</label>
          <select
            className="w-full mt-0.5 p-2 border border-gray-800 text-sm"
            value={projectInformation.projectType}
            onChange={(e) => handleProjectInfoChange('projectType', e.target.value)}
          >
            <option className="text-gray-700">Please Select</option>
            {projectTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Category</label>
          <select
            className="w-full mt-0.5 p-2 border border-gray-800 text-sm"
            value={projectInformation.category}
            onChange={(e) => handleProjectInfoChange('category', e.target.value)}
          >
            <option className="text-gray-700">Please Select</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Client</label>
          <select
            className="w-full mt-0.5 p-2 border border-gray-800 text-sm"
            value={projectInformation.client}
            onChange={(e) => handleProjectInfoChange('client', e.target.value)}
          >
            <option className="text-gray-700">Select a person</option>
            {clients.map((client, index) => (
              <option key={index} value={client}>
                {client}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Client's Contact</label>
          <select
            className="w-full mt-0.5 p-2 border border-gray-800 text-sm"
            value={projectInformation.clientContact}
            onChange={(e) => handleProjectInfoChange('clientContact', e.target.value)}
          >
            <option className="text-gray-700">Please Select</option>
            {clientContacts.map((contact, index) => (
              <option key={index} value={contact}>
                {contact}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Sales Person</label>
          <select
            className="w-full mt-0.5 p-2 border border-gray-800 text-sm"
            value={projectInformation.salesPerson}
            onChange={(e) => handleProjectInfoChange('salesPerson', e.target.value)}
          >
            <option className="text-gray-700">Please Select</option>
            {salesPersons.map((person, index) => (
              <option key={index} value={person}>
                {person}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Project Manager</label>
          <select
            className="w-full mt-0.5 p-2 border border-gray-800 text-sm"
            value={projectInformation.projectManager}
            onChange={(e) => handleProjectInfoChange('projectManager', e.target.value)}
          >
            <option className="text-gray-700">Please Select</option>
            {projectManagers.map((manager, index) => (
              <option key={index} value={manager}>
                {manager}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6">
          <label className="block  text-sm font-medium">
            Project Description
          </label>
          <textarea
            className="w-full mt-0.5 p-2 border border-gray-800  text-sm"
            placeholder="Project Description"
            value={projectInformation.projectDescription}
            onChange={(e) => handleProjectInfoChange('projectDescription', e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProjectInformation;
