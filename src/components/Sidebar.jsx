import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authentication } from "../contex/AuthContex";

export default function Sidebar() {
  const { user } = useContext(Authentication);
  const [open, setOpen] = useState(false);

  if (!user) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-[1100] md:hidden bg-[#6f1b1b] text-white p-2 rounded"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-[#6f1b1b] to-[#8b2a2a] text-white shadow-lg z-[1000]
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <ul className="mt-16 md:mt-8 space-y-1">
          <SidebarLink to="/dashboard" label="Dashboard" />

          {/* Washing Points */}
          <Dropdown title="Washing Points">
            <SidebarSubLink to="/AddWashingPoints" label="Add" />
            <SidebarSubLink to="/Washingpoints" label="Manage" />
          </Dropdown>

          <SidebarLink
            to="/Addbooking"
            label="Add Car Wash Booking"
          />

          {/* Car Booking */}
          <Dropdown title="Car Washing Booking">
            <SidebarSubLink to="/Newbooking" label="New Booking" />
            <SidebarSubLink to="/completebookings" label="Completed Booking" />
            <SidebarSubLink to="/carbookings" label="Total Booking" />
          </Dropdown>

          <SidebarLink
            to="/manages_Enquiries"
            label="Manage Enquiries"
          />
        </ul>
      </aside>
    </>
  );
}

/* ---------- Reusable Components ---------- */

const SidebarLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="block px-5 py-3 text-sm font-medium hover:bg-white/10 hover:border-l-4 hover:border-white transition-all"
    >
      {label}
    </Link>
  </li>
);

const Dropdown = ({ title, children }) => (
  <li className="group relative">
    <div className="flex justify-between items-center px-5 py-3 cursor-pointer hover:bg-white/10">
      <span className="text-sm font-medium">{title}</span>
      <span className="transition-transform group-hover:rotate-180">▾</span>
    </div>

    {/* Dropdown Menu */}
    <ul className="absolute left-full top-0 hidden group-hover:block min-w-[200px] bg-white text-gray-700 shadow-xl rounded-r-lg border-l-4 border-[#6f1b1b]">
      {children}
    </ul>
  </li>
);

const SidebarSubLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="block px-5 py-3 text-sm hover:bg-gray-100 hover:text-[#6f1b1b] transition-all"
    >
      {label}
    </Link>
  </li>
);
