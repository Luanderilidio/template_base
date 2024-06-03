import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

export default function CardRecommended() {
  return (
    <div className="w-full relative">
      <button className="z-50 top-3 left-4 absolute text-[0.7rem] bg-white/40 px-2 py-1 text-white/80 font-normal rounded-md">
        Tecnology
      </button>
      <div className="z-50 flex flex-col absolute top-3 right-4 gap-1">
        <button className="bg-white/40 px-2 py-[7px] leading-none text-white rounded-md flex items-center justify-center transition ease-in-out hover:scale-105 active:scale-95">
          <BookmarkBorderIcon sx={{ fontSize: 10 }} />
        </button>
        <button className="bg-white/40 px-2 py-[7px] leading-none text-white rounded-md flex items-center justify-center transition ease-in-out hover:scale-105 active:scale-95">
          <FavoriteBorderIcon sx={{ fontSize: 10 }} />
        </button>
        <button className="bg-white/40 px-2 py-[7px] leading-none text-white rounded-md flex items-center justify-center transition ease-in-out hover:scale-105 active:scale-95">
          <ShareIcon sx={{ fontSize: 8 }} />
        </button>
      </div>
      <div className="overflow-hidden relative group rounded-2xl">
        <img
          className="w-full !h-44 group-hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-2xl shadow-lg shadow-black"
          src="https://img.freepik.com/fotos-premium/glorioso-por-do-sol-sobre-as-ondas-do-mar_930122-436.jpg?w=740"
        />
      </div>
      <p className="text-left mt-2 font-bold text-2xl leading-tight text-[#2C2C2C]">
        New VR Headsets That Will Shape the Metaverse
      </p>
      <div className="flex justify-between mt-4">
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
    </div>
    // <div className="overflow-hidden rounded-2xl w-full h-[400px] relative group">
    //   <img
    //     className="w-full group-hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-2xl "
    //     src="https://img.freepik.com/fotos-premium/glorioso-por-do-sol-sobre-as-ondas-do-mar_930122-436.jpg?w=740"
    //   />
    //   <div className="absolute rounded-xl bg-gradient-to-t from-black via-black/40 to-black/10 w-full h-full overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    //   <p className=" !z-50 absolute top-6 left-4 text-left !leading-none  font-Roboto text-sm font-bold text-white">
    //     Technology
    //   </p>
    //   <div className="!z-50 absolute bottom-16 left-6 w-11/12 ">
    //     <p className="text-left !leading-none  font-Roboto bottom-28 left-5 text-5xl font-bold text-white">
    //       New VR Headsets That Will Shape the Metaverse
    //     </p>
    //     <p className="ml-2 w-4/5 mt-2 leading-tight font-Roboto  left-5 text-md text-left font-light text-white">
    //    ° {item.description}
    //   </p>
    //   </div>
    //   {item.link && (
    //     <button className="transition ease-in-out font-bold hover:scale-105 active:scale-95 text-white text-sm font-Roboto  !z-50 absolute bottom-5 right-5 bg-gray-300/50 px-4 py-2 rounded-full ">
    //       Saiba Mais
    //     </button>
    //   )}
    // </div>
  );
}
