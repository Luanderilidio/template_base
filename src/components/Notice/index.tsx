import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

export default function Notice() {
  return (
    <div className="px-3 grid grid-cols-12 row-span-3 gap-2 bg-transparent">
      <div className="col-span-7 row-span-3 flex flex-col justify-between">
        <div>
          <div className="justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                variant="rounded"
                sx={{ width: 20, height: 20 }}
                src="https://img.freepik.com/fotos-gratis/retrato-de-pessoa-com-cores-do-arco-iris-simbolizando-pensamentos-do-cerebro-adhd_23-2151475645.jpg?t=st=1717009301~exp=1717012901~hmac=69ef30e84354e11b16a7cb9e165b97af90b0f19e99de5bf04cad2788db2c4995&w=360"
              />
              <p className="font-light text-xs text-black/50">
                By: <span className="underline">Luander Ilidio </span>
                <span className="ml-2 font-bold "> 5 horas atrás</span>
              </p>
            </div>
          </div>
          <div className="flex font-thin text-xs gap-3 mt-3">
            <p>❤️2</p>
            <p>❤️2</p>
            <p>❤️2</p> 
          </div>
          <p className=" text-left font-bold text-2xl font-Roboto leading-tight text-[#2C2C2C]">
            New VR Headsets That Will Shape the Metaverse Luander
          </p>
          
        </div>
        <div className=" flex items-center justify-end top-3 right-4 gap-1 ">
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

      <div className="col-span-5 row-span-3 overflow-hidden relative group rounded-2xl mt-3">
        <img
          className="w-full !h-40 group-hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-2xl shadow-lg shadow-black"
          src="https://img.freepik.com/fotos-premium/glorioso-por-do-sol-sobre-as-ondas-do-mar_930122-436.jpg?w=740"
        />

        <div className="absolute rounded-xl bg-gradient-to-t from-black via-black/40 to-black/10 w-full h-full overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <button className="z-50 top-3 left-4 absolute text-[0.7rem] bg-white/40 px-2 py-1 text-white/80 font-normal rounded-md">
          Tecnology
        </button>
      </div>
      <div className="hidden  font-bold text-sm font-Roboto text-orange-500 mt-2">
        CÁCERES - MT | <span className="font-light italic">4 HORAS ATRÁS</span>
      </div>
    </div>
  );
}
