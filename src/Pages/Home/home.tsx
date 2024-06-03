import { Container, Divider } from "@mui/material";
import { Session1 } from "../../components/Sessions/Session-1";
import Header from "../../components/header";
import { Base } from "../../components/Base";
import Recommendeds from "../../components/Recommended";
import CategoriesFilter from "../../components/CategoriesFilter";
import Recommended_v2 from "../../components/Recommended_v2";
import Notice from "../../components/Notice";
import Session2 from "../../components/Sessions/Session-2";
import Session3 from "../../components/Sessions/Session-3";

export default function Home() {
  return (
    <Base>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Session2 />
        </div>
        <div className="col-span-12 mt-5">
          <Session3 />
        </div>
        <div className="col-span-12 mt-5">
          <p className="ml-2 mb-2 col-span-12 text-2xl font-bold text-[#2C2C2C]">
            Veja Minhas realizações 💪🏼
          </p>
          <Recommended_v2 />
        </div>
        <div className="col-span-12 mt-5">
          <p className="ml-2 mb-2 col-span-12 text-2xl font-bold text-[#2C2C2C]">
            Recomendados 📰
          </p>
          <Recommendeds />
        </div>
        <div className="col-span-12 my-6">
          <Divider />
        </div>
        <div className="col-span-12">
          <CategoriesFilter />
        </div>
        <div className="col-span-12 mt-5 bg-transparent flex flex-col gap-8">
          {[1, 1, 1, 1].map((item, index) => (
            <Notice />
          ))}
        </div>
      </div>
    </Base>
  );
}
