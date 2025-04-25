// src/components/Table.jsx
import React from "react";
import "../App.css";

const customers = [
  { name: "Jane Cooper",    company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com",    country: "United States", status: "Active"   },
  { name: "Floyd Miles",     company: "Yahoo",     phone: "(205) 555-0100", email: "floyd@yahoo.com",      country: "Kiribati",       status: "Inactive" },
  { name: "Ronald Richards", company: "Adobe",     phone: "(302) 555-0107", email: "ronald@adobe.com",     country: "Israel",         status: "Inactive" },
  { name: "Marvin McKinney", company: "Tesla",     phone: "(252) 555-0126", email: "marvin@tesla.com",     country: "Iran",           status: "Active"   },
  { name: "Jerome Bell",     company: "Google",    phone: "(629) 555-0129", email: "jerome@google.com",    country: "Réunion",        status: "Active"   },
  { name: "Kathryn Murphy",  company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao",        status: "Active"   },
  { name: "Jacob Jones",     company: "Yahoo",     phone: "(208) 555-0112", email: "jacob@yahoo.com",      country: "Brazil",         status: "Active"   },
  { name: "Kristin Watson",  company: "Facebook",  phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
];

export default function Table() {
  return (
    <div className="bg-blue-400">
      {/* horizontal scroll on small devices */}
     <div className="overflow-x-auto">
     <div className="h-[500px] overflow-hidden   hide-scrollbar shadow-md sm:rounded-lg">
        <table className="md:w-4xl w-3xs table-auto text-sm text-left text-gray-500">
          <thead className="text-xs uppercase">
            <tr className="text-gray-500 border-b-2 border-gray-800">
              <th className="py-2 px-3">Customer Name</th>
              <th className="py-2 px-3">Company</th>
              <th className="py-2 px-3">Phone Number</th>
              <th className="py-2 px-3">Email</th>
              <th className="py-2 px-3">Country</th>
              <th className="py-2 px-3">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {customers.map((cust, idx) => (
              <tr key={idx} className="hover:bg-blue-300">
                <td className="py-3 px-3 text-gray-900">{cust.name}</td>
                <td className="py-3 px-3">{cust.company}</td>
                <td className="py-3 px-3">{cust.phone}</td>
                <td className="py-3 px-3">{cust.email}</td>
                <td className="py-3 px-3">{cust.country}</td>
                <td className="py-3 px-3">
                  <span
                    className={`py-1 px-2 inline-block text-xs font-medium rounded ${
                      cust.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {cust.status}
                  </span>
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
