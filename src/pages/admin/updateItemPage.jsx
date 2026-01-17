import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateItemPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // 🛑 Safety check
  if (!state) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        No product data found. Please go back and select a product.
      </div>
    );
  }

  const [productKey] = useState(state.Key); // primary identifier
  const [productName, setProductName] = useState(state.name);
  const [productPrice, setProductPrice] = useState(state.price);
  const [productCategory, setProductCategory] = useState(state.category);
  const [productDimensions, setProductDimensions] = useState(state.dimensions);
  const [productDescription, setProductDescription] = useState(state.description);
  const [loading, setLoading] = useState(false);

  async function handleUpdateItem() {
    if (!productName || !productPrice) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You are not logged in!");
      return;
    }

    setLoading(true);

    try {
      await axios.put(
        `http://localhost:3000/api/products/${productKey}`, // ✅ USE KEY
        {
          name: productName,
          price: Number(productPrice),
          category: productCategory,
          dimensions: productDimensions,
          description: productDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Product updated successfully!");
      navigate("/admin/items");

    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-lg font-bold mb-4">Update Product</h1>

      <div className="w-[400px] border p-4 flex flex-col gap-3 rounded-md">

        <input
          disabled
          value={productKey}
          className="w-full p-2 border rounded bg-gray-100"
        />

        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Audio">Audio</option>
          <option value="Lights">Lights</option>
        </select>

        <input
          value={productDimensions}
          onChange={(e) => setProductDimensions(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button
          onClick={handleUpdateItem}
          disabled={loading}
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          {loading ? "Updating..." : "Update Product"}
        </button>

        <button
          onClick={() => navigate("/admin/items")}
          className="w-full p-2 bg-red-700 text-white rounded"
        >
          Cancel
        </button>

      </div>
    </div>
  );
}
