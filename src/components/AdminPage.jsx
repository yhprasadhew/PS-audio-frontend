 import { MdBluetoothAudio } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
 export default function AdminPage() {
  return (
   <div className="w-full h-screen flex">
      <div className="w-[350px] h-full bg-green-200">
     
     <button className = "w-full h-[40px] text[25px] font-bold flex justify-center items-center">  <GoGraph /> dashboard</button>
     <button className = "w-full h-[40px] text[25px] font-bold flex justify-center items-center  "> <FaListUl />  Items</button>
     <button className = "w-full h-[40px] text[25px] font-bold flex justify-center items-center ">  <FiBookOpen /> Bookings</button>
     <button className = "w-full h-[40px] text[25px] font-bold flex justify-center items-center "> <FaUserShield /> Users</button>
    </div>
 <MdBluetoothAudio className='text-[300px]' />
    </div>

  )
}
