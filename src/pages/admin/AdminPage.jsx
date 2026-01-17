import { GoGraph } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";
import { FaListUl, FaUserShield } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";

import AdminItemPage from "./adminItems";
import AddItemPage from "./addItemPage";
import UpdateItemPage from "./updateItemPage";


export default function AdminPage() {
  return (
    <div className="w-full min-h-screen flex">

      {/* Sidebar */}
      <div className="w-[350px] min-h-screen bg-green-200 flex flex-col">
        <Link
          to="/admin"
          className="w-full h-[50px] text-[22px] font-bold flex justify-center items-center gap-2 hover:bg-green-300"
        >
          <GoGraph /> Dashboard
        </Link>

        <Link
          to="/admin/items"
          className="w-full h-[50px] text-[22px] font-bold flex justify-center items-center gap-2 hover:bg-green-300"
        >
          <FaListUl /> Items
        </Link>

        <Link
          to="/admin/booking"
          className="w-full h-[50px] text-[22px] font-bold flex justify-center items-center gap-2 hover:bg-green-300"
        >
          <FiBookOpen /> Bookings
        </Link>

        <Link
          to="/admin/users"
          className="w-full h-[50px] text-[22px] font-bold flex justify-center items-center gap-2 hover:bg-green-300"
        >
          <FaUserShield /> Users
        </Link>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-blue-200 text-black p-5 overflow-y-auto">
        <Routes>
          <Route path="" element={<h1 className="text-xl font-bold">Dashboard Home</h1>} />
          <Route path="items" element={<AdminItemPage />} />
          <Route path="items/add" element={<AddItemPage />} />
          
          <Route path="booking" element={<h1 className="text-xl font-bold">Booking Page</h1>} />
          <Route path="users" element={<h1 className="text-xl font-bold">Users Page</h1>} />
          <Route path="*" element={<h1 className="text-xl font-bold">404 NOT FOUND</h1>} />
           <Route path="items/edit" element={<UpdateItemPage/>} />

        </Routes>
      </div>

    </div>
  );
}
