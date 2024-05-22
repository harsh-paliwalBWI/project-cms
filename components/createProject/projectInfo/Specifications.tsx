"use client";
import React from 'react';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import { useStateContext } from '@/utils/stateContext';

function Specifications() {
  const { specifications, handleInputChange, handleCloneRow, handleRemoveRow } = useStateContext();

  return (
    <div className="bg-complementory w-full h-fit border border-highlights mt-4">
      <h2 className="text-xl font-medium bg-white px-4 py-2">SPECIFICATIONS</h2>
      <div className="px-4 py-2">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-[#0f5f9e] text-white">
            <tr>
              <th className="px-4 py-2">Sel.</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Language</th>
              <th className="px-4 py-2">Target Group</th>
              <th className="px-4 py-2">CPI($)</th>
              <th className="px-4 py-2">LOI(MIN.)</th>
              <th className="px-4 py-2">IR(%)</th>
              <th className="px-4 py-2">Completes</th>
            </tr>
          </thead>
          <tbody>
            {specifications.map((spec, index) => (
              <tr key={spec.id} className={index % 2 === 0 ? 'bg-[#dddddd]' : 'bg-white'}>
                <td className="px-4 py-2 text-center">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-4 py-2">{spec.country}</td>
                <td className="px-4 py-2">{spec.language}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={spec.targetGroup}
                      onChange={(e) => handleInputChange(spec.id, 'targetGroup', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-800 text-sm"
                    />
                    <button
                      className="ml-2 text-green-500"
                      onClick={() => handleCloneRow(spec.id)}
                    >
                      <FaPlusCircle />
                    </button>
                    <button
                      className="ml-2 text-red-500"
                      onClick={() => handleRemoveRow(spec.id)}
                    >
                      <FaTimesCircle />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={spec.cpi}
                    onChange={(e) => handleInputChange(spec.id, 'cpi', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-800 text-sm"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={spec.loi}
                    onChange={(e) => handleInputChange(spec.id, 'loi', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-800 text-sm"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={spec.ir}
                    onChange={(e) => handleInputChange(spec.id, 'ir', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-800 text-sm"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={spec.completes}
                    onChange={(e) => handleInputChange(spec.id, 'completes', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-800 text-sm"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Specifications;
