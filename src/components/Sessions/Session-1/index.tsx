// @ts-nocheck

import { ChangeEvent, useState } from "react";
import { Base } from "../../Base";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Autocomplete,
  Avatar,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import LinkIcon from "@mui/icons-material/Link";
import { VisuallyHiddenInput } from "../../../utils/VisuallyHiddenInput";
import { NewsItem } from "../../Creator";
import FormCreator from "../../FormsCreator";

const categories = ["Geral", "Ciencia", "Technologia", "Noticia", "Anexo"];
const colunistas = ["Luander Ilidio", "Mario", "Joao", "Brenda"];

export const Session1 = () => {
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);

  const [content, setContent] = useState([]);


  const addContentItem = (newItem) => {
    const newArray = [...content, newItem];
    setContent(newArray);
  };

  const Font = ReactQuill.Quill.import("formats/font");
  Font.whitelist = ["roboto", "anton"];
  ReactQuill.Quill.register(Font, true);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge", "medium", "extra-huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: Font.whitelist }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      <Base>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-7  text-black">
            <div className="rounded-xl p-4 border-2 bg-white flex flex-col gap-4">
              
              <FormCreator addContent={addContentItem} />
              
            </div>
          </div>
          <div className="col-span-5 bg-white rounded-lg p-5">
            <div className="mt-5" dangerouslySetInnerHTML={{ __html: value }} />
            <div className=" col-span-5 flex flex-col gap-3">
              {content.map((item, index) => (
                <NewsItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};
