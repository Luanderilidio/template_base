import moment from "moment";
import "moment/locale/pt-br";
import { useEffect, useState } from "react";

moment.locale("pt-br");

interface PropsCategory {
  category: string | null | undefined;
}

export default function Category({ category }: PropsCategory) {
  const [dataAtual, setDataAtual] = useState("");

  useEffect(() => {
    moment.locale("pt-br");
    setDataAtual(moment().format("LLL"));
  }, []);

  return (
    <div className="flex items-center justify-between">
      <button className="w-fit text-black/80 hover:bg-red-200/30 hover:border-[1px] border-red-200 hover:shadow-lg hover:text-red-500 px-2 py-2 rounded-lg text-md font-Roboto leading-none font-normal hover:font-bold transition ease-in-out hover:scale-105 active:scale-95">
        <span className="font-semibold text-red-500">#</span>{category}
      </button>
      <p className="text-sm text-black">{dataAtual}</p>
    </div>
  );
}
