import { Link, useNavigate, useLocation } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminItemPage() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  // Function to fetch all products
  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  // Fetch products on mount
  useEffect(() => {
    fetchItems();
  }, []);

  // Refetch products if coming back from edit page
  useEffect(() => {
    if (location.state?.updated) {
      fetchItems();
      // Clear the state so it doesn't refetch again unnecessarily
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  // Handle deleting a product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Remove deleted item from state
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete product");
    }
  };

  return (
    <div className="w-full min-h-full p-6 relative text-black">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link to="add" className="flex items-center gap-2">
          <CiCirclePlus size={40} />
          <span className="font-semibold">Add Product</span>
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full border border-gray-300 text-sm bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-3 py-3 text-left">Name</th>
              <th className="border px-3 py-3 text-left">Key</th>
              <th className="border px-3 py-3 text-left">Price</th>
              <th className="border px-3 py-3 text-left">Category</th>
              <th className="border px-3 py-3 text-left">Dimensions</th>
              <th className="border px-3 py-3 text-center">Status</th>
              <th className="border px-3 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No products found
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="border px-3 py-2 font-medium">{item.name}</td>
                  <td className="border px-3 py-2">{item.key}</td>
                  <td className="border px-3 py-2">Rs. {item.price}</td>
                  <td className="border px-3 py-2 capitalize">{item.category}</td>
                  <td className="border px-3 py-2">{item.dimensions}</td>
                  <td className="border px-3 py-2 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.availability
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.availability ? "Available" : "Out of stock"}
                    </span>
                  </td>
                  <td className="border px-3 py-2 text-center">
                    <div className="flex justify-center gap-3">
                      {/* EDIT BUTTON */}
                      <button
                        onClick={() => {
                          navigate(`/admin/items/edit`, { state: item });
                        }}
                        className="p-2 rounded hover:bg-blue-100 text-blue-600"
                        title="Edit"
                      >
                        <FiEdit size={18} />
                      </button>

                      {/* DELETE BUTTON */}
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="p-2 rounded hover:bg-red-100 text-red-600"
                        title="Delete"
                      >
                        <MdDeleteOutline size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
