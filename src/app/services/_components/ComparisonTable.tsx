"use client";

import { Check, X } from "lucide-react";

const comparisonData = [
  {
    category: "Transparency",
    minimal: "Transparent cost structure and material specification",
    typical: "30-50% hike between first quote and final cost",
    price: "Flexible budget suggestions",
  },
  {
    category: "Convenience",
    minimal: "One-stop service point for all interior and exterior needs",
    typical: "You'll need 30–40 vendors to gather everything",
    price: "Comprehensive service package",
  },
  {
    category: "Design",
    minimal: "Personalized design with 3D visuals",
    typical: "Ordinary design and visuals. Compromised functions and utilities",
    price: "Custom design solutions",
  },
  {
    category: "Timelines",
    minimal: "50-day move-in*",
    typical: "Lengthy project period. Surprise delays",
    price: "Efficient project management",
  },
  {
    category: "Communication",
    minimal: "We provide a Gantt chart. Regular updates with project tracking",
    typical: "Irregular updates & follow-up. No proper documentation",
    price: "Transparent communication",
  },
  {
    category: "Quality",
    minimal: "We use branded materials. 154 quality checks",
    typical: "Inferior materials to cut costs. Less than 20 quality checks",
    price: "Premium quality assurance",
  },
  {
    category: "Warranty",
    minimal: "1 year hardware guarantee. 2 years of free service warranty",
    typical: "Lack of commitment. No valid warranty policy",
    price: "Comprehensive warranty coverage",
  },
  {
    category: "After-sales support",
    minimal: "Dedicated team for prompt response",
    typical: "Insufficient capability for quick support",
    price: "Reliable support system",
  },
];

export function ComparisonTable() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="wrapper">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Why Choose Ecoscape?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-[#005f27]">
                  Ecoscape Experience
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Typical Experience
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {row.category}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#64b826]" />
                      <span className="text-sm text-gray-900">
                        {row.minimal}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-600">
                        {row.typical}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
