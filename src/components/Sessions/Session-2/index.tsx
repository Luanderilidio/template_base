import Arte1_rafael from "../../../assets/Arte1_rafael.png"
import Arte2_rafael from "../../../assets/Arte2_rafael.png"
import Caceres from "../../../assets/fundo_rafael.png"


export default function Session2() {
    return (
        <div style={{ backgroundImage: `url(${Caceres})` }} className="flex flex-col items-center justify-center gap-3 h-[600px] bg-cover bg-center">
            <img className="w-9/12 " src={Arte2_rafael} alt="" />
            <img className="w-11/12" src={Arte1_rafael} alt="" />
        </div>
    )
    
}