import Image1 from "../../assets/Logos/logo_rafael.png";
import Image2 from "../../assets/Logos/logo2.png";

export default function Header() {
  return (
    <div className="grid grid-cols-12 h-16 border-b-[1px] px-4 ">
      {/* <div className="col-span-2 flex items-center justify-center">
        <img src={Image2} className="w-10 " alt="" />
      </div> */}
      <div className="col-span-4 " />
      <div className="col-span-4  flex items-center">
        <img src={Image1} className="w-30" alt="" />
      </div>
      <div className="col-span-4  flex items-center justify-end">
        <button className="bg-[#3736FC] font-Montserrat text-xs text-white px-4 py-3 border-b-4 border-red-500 font-bold uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-lg shadow-black/30">
          Doar 🙌🏼
        </button>
      </div>
      {/* <div className="col-span-4 flex justify-end items-center gap-2 font-Roboto pr-2">
        <button className="bg-[#3736FC] text-white text-sm font-bold px-2 py-2 rounded-lg transition ease-in-out hover:scale-105 active:scale-95">
          Inscreva-se
        </button>
        <button className="bg-[#e1e1e1] text-black text-sm font-bold px-2 py-2 rounded-lg transition ease-in-out hover:scale-105 active:scale-95">
          Entrar
        </button>
      </div> */}
    </div>
  );
}
