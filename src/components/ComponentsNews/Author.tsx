import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Avatar } from "@mui/material";

interface AuthorProps {
    colunista: string | null | undefined
}

export default function Author({ colunista }: AuthorProps) {
  console.log(colunista)
  return (
    <div className="flex justify-between my-3">
      <div className="flex items-center justify-start gap-2">
        <Avatar
          sx={{ width: 40, height: 40 }}
          className="shadow-lg"
          src="https://img.freepik.com/fotos-gratis/mulher-de-altura-media-a-fazer-dj-com-oculos-de-realidade-aumentada_23-2151425643.jpg?t=st=1716329396~exp=1716332996~hmac=64834b6dbafa478f92bb9658b618df2e6775457f233140b209b3bd59726d0111&w=740"
        />
        <div className="font-Roboto text-black/70">
          <p className="text-sm font-semibold leading-none ">{colunista}</p>
          <p className="leading-none mt-1 text-xs">
            <span className="italic text-xs">Journal </span>. há 3 dias
          </p>
        </div>
      </div>
      <div className="flex h-fit gap-2  ">
        <button className="border-2 flex items-center justify-center gap-2 rounded-full px-3 py-2  text-black/80">
          <ThumbUpOutlinedIcon sx={{ fontSize: 15 }} />
          <p className="font-semibold text-xs leading-none">123</p>
        </button>
        <button className="border-2 flex items-center justify-center gap-2 rounded-full px-3 py-2 text-black/80">
          <RemoveRedEyeOutlinedIcon sx={{ fontSize: 15 }} />
          <p className="font-semibold text-sm leading-none">123</p>
        </button>
        <button className="border-2 flex items-center justify-center gap-2 rounded-full px-3 py-2 text-black/80">
          <ShareOutlinedIcon sx={{ fontSize: 15 }} />
          <p className="font-semibold text-sm leading-none">123</p>
        </button>
      </div>
    </div>
  );
}
