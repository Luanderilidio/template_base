import { Avatar } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

export default function CardRecommended_v2() {
  return (
    <div className="!bg-transparent px-3">
      <div className="flex justify-between mt-4 mb-2">
        <div className="flex items-center gap-2">
          <Avatar
            variant="rounded"
            sx={{ width: 30, height: 30 }}
            src="https://img.freepik.com/fotos-gratis/retrato-de-pessoa-com-cores-do-arco-iris-simbolizando-pensamentos-do-cerebro-adhd_23-2151475645.jpg?t=st=1717009301~exp=1717012901~hmac=69ef30e84354e11b16a7cb9e165b97af90b0f19e99de5bf04cad2788db2c4995&w=360"
          />
          <p className="font-light text-sm text-black/50">
            By: <span className="underline">Luander Ilidio</span>
          </p>
        </div>
        <div className="flex items-center gap-2 font-light text-sm text-black/50">
          <p className="">Jan 3, 2022</p>°<p className="">3344 views</p>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-2 !h-72 gap-2 ">
        <div className="col-span-7 row-span-2 overflow-hidden relative group rounded-2xl">
          <img
            className="w-full  group-hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-2xl shadow-lg shadow-black"
            src="https://img.freepik.com/fotos-premium/glorioso-por-do-sol-sobre-as-ondas-do-mar_930122-436.jpg?w=740"
          />
        </div>
        <div className="col-span-5 overflow-hidden relative group rounded-2xl">
          <img
            className="w-full  group-hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-2xl shadow-lg shadow-black"
            src="https://img.freepik.com/fotos-premium/glorioso-por-do-sol-sobre-as-ondas-do-mar_930122-436.jpg?w=740"
          />
        </div>
        <div className="col-span-5 overflow-hidden relative group rounded-2xl">
          <img
            className="w-full  group-hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-2xl shadow-lg shadow-black"
            src="https://img.freepik.com/fotos-premium/glorioso-por-do-sol-sobre-as-ondas-do-mar_930122-436.jpg?w=740"
          />
        </div>
      </div>
      <p className="text-left mt-2 font-bold text-2xl leading-tight text-[#2C2C2C]">
        New VR Headsets That Will Shape the Metaverse
      </p>
      <div className=" flex items-center justify-end top-3 right-4 mt-3 gap-1 ">
        <button className="flex items-center justify-center bg-gray-500/10 px-2 py-1 text-gray-400 rounded-md ">
          <BookmarkBorderIcon sx={{ fontSize: 15 }} />
          <p className="text-[.6rem] font-bold">12</p>
        </button>
        <button className="flex items-center justify-center bg-gray-500/10 px-2 py-1 text-gray-400 rounded-md ">
          <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 12 }} />
          <p className="text-[.6rem] font-bold">12</p>
        </button>
        <button className="flex items-center justify-center bg-gray-500/10 px-2 py-1 text-gray-400 rounded-md ">
          <ShareIcon sx={{ fontSize: 12 }} />
          <p className="text-[.6rem] font-bold">12</p>
        </button>
      </div>
    </div>
    // <div className="w-full relative">
    //   <button className="top-3 left-4 absolute text-[0.7rem] bg-white/40 px-2 py-1 text-white/80 font-normal rounded-md">
    //     Tecnology
    //   </button>
    //   <div className="flex flex-col absolute top-3 right-4 gap-1">
    //     <button className="bg-white/40 px-2 py-[7px] leading-none text-white rounded-md flex items-center justify-center transition ease-in-out hover:scale-105 active:scale-95">
    //       <BookmarkBorderIcon sx={{fontSize:10}} />
    //     </button>
    //     <button className="bg-white/40 px-2 py-[7px] leading-none text-white rounded-md flex items-center justify-center transition ease-in-out hover:scale-105 active:scale-95">
    //       <FavoriteBorderIcon sx={{fontSize:10}} />
    //     </button>
    //     <button className="bg-white/40 px-2 py-[7px] leading-none text-white rounded-md flex items-center justify-center transition ease-in-out hover:scale-105 active:scale-95">
    //       <ShareIcon sx={{fontSize:8}} />
    //     </button>
    //   </div>
    //   <img
    //     className="w-full !h-44 group-hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-2xl "
    //     src="https://img.freepik.com/fotos-premium/glorioso-por-do-sol-sobre-as-ondas-do-mar_930122-436.jpg?w=740"
    //   />
    //   <p className="text-left mt-2 font-bold text-2xl leading-tight text-[#2C2C2C]">
    //     New VR Headsets That Will Shape the Metaverse
    //   </p>
    //   <div className="flex justify-between mt-4">
    //     <div className="flex items-center gap-2">
    //       <Avatar
    //         variant="rounded"
    //         sx={{ width: 30, height: 30 }}
    //         src="https://img.freepik.com/fotos-gratis/retrato-de-pessoa-com-cores-do-arco-iris-simbolizando-pensamentos-do-cerebro-adhd_23-2151475645.jpg?t=st=1717009301~exp=1717012901~hmac=69ef30e84354e11b16a7cb9e165b97af90b0f19e99de5bf04cad2788db2c4995&w=360"
    //       />
    //       <p className="font-light text-sm text-black/50">
    //         By: <span className="underline">Luander Ilidio</span>
    //       </p>
    //     </div>
    //     <div className="flex items-center gap-2 font-light text-sm text-black/50">
    //       <p className="">Jan 3, 2022</p>°<p className="">3344 views</p>
    //     </div>
    //   </div>
    // </div>
  );
}
