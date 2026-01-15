import { GoGraph } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";
import { FaListUl, FaUserShield } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";
import AdminItemPage from "./adminItems";
import AddItemPage from "./addItemPage";

export default function AdminPage() {
  return (
    <div className="w-full h-screen flex">

      {/* Sidebar */}
      <div className="w-[350px] h-full bg-green-200 flex flex-col">
        <Link to="/admin" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center gap-2">
          <GoGraph /> Dashboard
        </Link>
        <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center gap-2">
          <FaListUl /> Items
        </Link>
        <Link to="/admin/booking" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center gap-2">
          <FiBookOpen /> Bookings
        </Link>
        <Link to="/admin/users" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center gap-2">
          <FaUserShield /> Users
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 bg-blue-200 text-white p-5">
        <Routes>
          <Route path="" element={<h1>Dashboard Home</h1>} />
          <Route path="items" element={<AdminItemPage/>} />
          <Route path="items/add" element={<AddItemPage/>} />

          <Route path="booking" element={<h1>Booking Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </div>

    </div>
  );
}
