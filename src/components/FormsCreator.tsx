import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
import LinkIcon from "@mui/icons-material/Link";
import React, { useState } from "react";
import ImageNews from "./ComponentsNews/Image";
import TitleNews from "./ComponentsNews/Title";
import Attachment, { PropsAttachment } from "./ComponentsNews/Attachment";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Category from "./ComponentsNews/Category";
import Author from "./ComponentsNews/Author";
import Video from "./ComponentsNews/Video";
import Slides, { PropsSlides } from "./ComponentsNews/Slides";
import { toolbarOptions } from "../utils/toolbarOptions";
import Citation from "./ComponentsNews/Citation";

const types = [
  "Imagem",
  "Video",
  "Titulo",
  "Citação",
  "Autor",
  "Anexo",
  "Paragrafos",
  "Categoria",
  "Slide",
];

const colunistas = ["Luander Ilidio de Arruda", "Brenda Caroline"];

const colors = [
  "text-black/80",
  "text-slate-500",
  "text-gray-500",
  "text-zinc-500",
  "text-neutral-500",
  "text-stone-500",
  "text-red-500",
  "text-orange-500",
  "text-amber-500",
  "text-yellow-500",
  "text-lime-500",
  "text-green-500",
  "text-emerald-500",
  "text-teal-500",
  "text-cyan-500",
  "text-sky-500",
  "text-blue-500",
  "text-indigo-500",
  "text-violet-500",
  "text-purple-500",
  "text-fuchsia-500",
  "text-pink-500",
  "text-rose-500",
];

const categories = [
  "Política",
  "Economia",
  "Tecnologia",
  "Esportes",
  "Entretenimento",
  "Saúde",
  "Ciência",
  "Educação",
  "Meio Ambiente",
  "Cultura",
];

const FormsCreator: React.FC = ({ addContent }: any) => {
  const [type, setType] = useState<string | null>();
  const [urlImage, setUrlImage] = useState("");
  const [fontImage, setFontImage] = useState("");
  const [sizeImage, setSizeImage] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [fontVideo, setFontVideo] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState<string | null>();
  const [category, setCategory] = useState<string | null>();
  const [colunista, setColunista] = useState<string | null>();
  const [content, setContent] = useState();
  const [paragraph, setParagraph] = useState("");

  const [authorCitation, setAuthorCitation] = useState("Escreva o autor");
  const [textCitation, setTextCitation] = useState("Escreva a frase aqui");
  const [slideSubTitle, setSubTitle] = useState("");
  const [slideLink, setLink] = useState("");
  const [attachment, setAttachment] = useState<PropsAttachment[]>([
    { id: uuidv4(), type: "", title: "", link: "" },
  ]);
  const [slide, setSlide] = useState<PropsSlides[]>([
    {
      id: uuidv4(),
      urlImage: "",
      title: "",
      description: "",
      subtitle: "",
      link: "",
    },
  ]);

  const handleAddAttachment = () => {
    setAttachment([
      ...attachment,
      { id: uuidv4(), type: "", title: "", link: "" },
    ]);
  };

  const handleInputChange = (
    id: string,
    newValue: string,
    field: keyof PropsAttachment
  ) => {
    setAttachment(
      attachment.map((att) =>
        att.id === id ? { ...att, [field]: newValue } : att
      )
    );
  };

  const handleAddSlide = () => {
    setSlide([
      ...slide,
      {
        id: uuidv4(),
        urlImage: "",
        title: "",
        description: "",
        subtitle: "",
        link: "",
      },
    ]);
  };

  const handleInputSlide = (
    id: string,
    newValue: string,
    field: keyof PropsSlides
  ) => {
    setSlide(
      slide.map((att) => (att.id === id ? { ...att, [field]: newValue } : att))
    );
  };

  const module = {
    toolbar: toolbarOptions,
  };

  const renderContent: () => JSX.Element = () => {
    switch (type) {
      case "Imagem":
        return (
          <div className="grid grid-cols-12 gap-5">
            <TextField
              className="col-span-9"
              label="Link da Imagem"
              size="small"
              value={urlImage}
              onChange={(e) => setUrlImage(e.target.value)}
            />
            <FormControl disabled fullWidth className="col-span-3">
              <InputLabel>Tamanho</InputLabel>
              <Select
                value={sizeImage}
                label="Tamanho"
                size="small"
                onChange={(e) => setSizeImage(e.target.value)}
              >
                <MenuItem value="w-[190] h-[90]">19:9</MenuItem>
                <MenuItem value="w-[40] h-[30]">4:3</MenuItem>
                <MenuItem value="w-[90] h-[160]">9:16</MenuItem>
                <MenuItem value="w-[50] h-[50]">1:1</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className="col-span-12"
              label="Font da Imagem"
              size="small"
              value={fontImage}
              onChange={(e) => setFontImage(e.target.value)}
            />
            <div className="col-span-12 flex justify-between">
              <div />
              <Button
                onClick={() => {
                  addContent({
                    id: uuidv4(),
                    type: type,
                    urlImage: urlImage,
                    fontImage: fontImage,
                    sizeImage: sizeImage,
                  });
                }}
                variant="contained"
              >
                Adicionar
              </Button>
            </div>
            <div className="col-span-12">
              <ImageNews
                fontImage={fontImage}
                sizeImage={sizeImage}
                urlImage={urlImage}
              />
            </div>
          </div>
        );
      case "Video":
        return (
          <div className="grid grid-cols-12 gap-5">
            <TextField
              className="col-span-12"
              label="Link do Vídeo"
              size="small"
              value={urlVideo}
              onChange={(e) => setUrlVideo(e.target.value)}
            />
            <TextField
              className="col-span-12"
              label="Descrição do Video"
              size="small"
              value={fontVideo}
              onChange={(e) => setFontVideo(e.target.value)}
            />
            <div className="col-span-12 flex justify-between">
              <div />
              <Button
                onClick={() => {
                  addContent({
                    id: uuidv4(),
                    type: type,
                    urlVideo: urlVideo,
                    fontVideo: fontVideo,
                  });
                }}
                variant="contained"
              >
                Adicionar
              </Button>
            </div>
            <div className="col-span-12">
              <Video fontVideo={fontVideo} urlVideo={urlVideo} />
            </div>
          </div>
        );
      case "Titulo":
        return (
          <div className="p-5 flex flex-col gap-5">
            <div className="flex gap-5">
              <FormControl fullWidth>
                <InputLabel>Tamanho</InputLabel>
                <Select
                  value={size}
                  label="Tamanho"
                  onChange={(e) => setSize(e.target.value)}
                >
                  <MenuItem value={"text-[.8rem]"}>
                    <div>xxs</div>
                  </MenuItem>
                  <MenuItem value={"text-xs"}>
                    <div>xs</div>
                  </MenuItem>
                  <MenuItem value={"text-sm"}>
                    <div>sm</div>
                  </MenuItem>
                  <MenuItem value={"text-base"}>
                    <div>base</div>
                  </MenuItem>
                  <MenuItem value={"text-lg"}>
                    <div>lg</div>
                  </MenuItem>
                  <MenuItem value={"text-xl"}>
                    <div>xl</div>
                  </MenuItem>
                  <MenuItem value={"text-2xl"} className="text-2xl">
                    <div>2xl</div>
                  </MenuItem>
                  <MenuItem value={"text-3xl"} className="text-2xl">
                    <div>3xl</div>
                  </MenuItem>
                  <MenuItem value={"text-4xl"} className="text-2xl">
                    <div>4xl</div>
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Bold</InputLabel>
                <Select
                  value={weight}
                  label="Bold"
                  onChange={(e) => setWeight(e.target.value)}
                >
                  <MenuItem value={"font-normal"}>
                    <div className="font-normal">Normal</div>
                  </MenuItem>
                  <MenuItem value={"font-medium"}>
                    <div className="font-medium">Medium</div>
                  </MenuItem>
                  <MenuItem value={"font-semibold"} className="text-2xl">
                    <div className="font-semibold">Semibold</div>
                  </MenuItem>
                  <MenuItem value={"font-bold"} className="text-2xl">
                    <div className="font-bold">Bold</div>
                  </MenuItem>
                  <MenuItem value={"font-extrabold"} className="text-2xl">
                    <div className="font-extrabold">Extrabold</div>
                  </MenuItem>
                  <MenuItem value={"font-black"} className="text-2xl">
                    <div className="font-black">Black</div>
                  </MenuItem>
                </Select>
              </FormControl>
              <Autocomplete
                disablePortal
                fullWidth
                size="medium"
                value={color}
                options={colors}
                renderInput={(params) => <TextField {...params} label="Cor" />}
                onChange={(event: any, newValue: string | null) => {
                  setColor(newValue);
                }}
              />
            </div>
            <TextField
              label="Titulo"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TitleNews
              title={title}
              size={size}
              weight={weight}
              color={color}
            />
            <div className="flex justify-between">
              <div />
              <Button
                onClick={() => {
                  addContent({
                    id: uuidv4(),
                    type: type,
                    title: title,
                    size: size,
                    weight: weight,
                    color: color,
                  });
                }}
                variant="contained"
              >
                Adicionar
              </Button>
            </div>
          </div>
        );
      case "Citação":
        return (
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12">
              <Citation author={authorCitation} text={textCitation} />
            </div>
            <div className="col-span-12 flex justify-between">
              <div />
              <Button
                onClick={() => {
                  addContent({
                    id: uuidv4(),
                    type: type,
                    text: textCitation,
                    author: authorCitation,
                  });
                }}
                variant="contained"
              >
                Adicionar
              </Button>
            </div>
            <TextField
              className="col-span-12"
              label="Frase"
              multiline
              rows={5}
              size="small"
              value={textCitation}
              onChange={(e) => setTextCitation(e.target.value)}
            />
            <TextField
              className="col-span-12"
              label="Autor"
              size="small"
              value={authorCitation}
              onChange={(e) => setAuthorCitation(e.target.value)}
            />
            
          </div>
        );
      case "Anexo":
        return (
          <div>
            <div className="flex justify-between">
              <div />
              <Button onClick={handleAddAttachment} startIcon={<AddIcon />}>
                Link
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              {attachment.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-3">
                  <FormControl className="col-span-2">
                    <InputLabel>Tipo</InputLabel>
                    <Select
                      size="small"
                      value={item.type}
                      onChange={(e) =>
                        handleInputChange(
                          item.id,
                          e.target.value as string,
                          "type"
                        )
                      }
                      label="Tipo"
                    >
                      <MenuItem value={10}>PDF</MenuItem>
                      <MenuItem value={20}>EXCEL</MenuItem>
                      <MenuItem value={30}>DOCS</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    className="col-span-5"
                    size="small"
                    value={item.title}
                    onChange={(e) =>
                      handleInputChange(
                        item.id,
                        e.target.value as string,
                        "title"
                      )
                    }
                    label="Titulo"
                  />
                  <TextField
                    className="col-span-5"
                    size="small"
                    value={item.link}
                    onChange={(e) =>
                      handleInputChange(
                        item.id,
                        e.target.value as string,
                        "link"
                      )
                    }
                    label="Link"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <LinkIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <div />
              <Button
                onClick={() => {
                  addContent({
                    id: uuidv4(),
                    type: type,
                    attachment: attachment,
                  });
                }}
                variant="contained"
              >
                Adicionar
              </Button>
            </div>
          </div>
        );
      case "Paragrafos":
        return (
          <div>
            <ReactQuill
              modules={module}
              theme="snow"
              value={paragraph}
              onChange={setParagraph}
              className="bg- rounded-2xl p-1"
            />
            <div className="flex justify-between mt-2">
              <div />
              <Button
                onClick={() => {
                  addContent({
                    id: uuidv4(),
                    type: type,
                    paragraph: paragraph,
                  });
                }}
                variant="contained"
              >
                Adicionar
              </Button>
            </div>
          </div>
        );
      case "Categoria":
        return (
          <div className="flex flex-col gap-5 p-5">
            <Autocomplete
              disablePortal
              fullWidth
              size="medium"
              value={category}
              options={categories}
              renderInput={(params) => (
                <TextField {...params} label="Categoria" />
              )}
              onChange={(event: any, newValue: string | null) => {
                setCategory(newValue);
              }}
            />
            <div className="flex justify-between">
              <div />
              <Button
                onClick={() => {
                  addContent({
                    type: type,
                    id: uuidv4(),
                    category: category,
                  });
                }}
                variant="contained"
              >
                Adicionar
              </Button>
            </div>
            <Category category={category} />
          </div>
        );
      case "Autor":
        return (
          <div className="flex flex-col gap-5">
            <Autocomplete
              disablePortal
              fullWidth
              size="medium"
              value={colunista}
              options={colunistas}
              renderInput={(params) => (
                <TextField {...params} label="Colunista" />
              )}
              onChange={(event: any, newValue: string | null) => {
                setColunista(newValue);
              }}
            />
            <div className="flex justify-between">
              <div />
              <Button
                onClick={() => {
                  addContent({
                    id: uuidv4(),
                    type: type,
                    colunista: colunista,
                  });
                }}
                variant="contained"
              >
                Adicionar
              </Button>
            </div>
            <Author colunista={colunista} />
          </div>
        );
      case "Slide":
        return (
          <div>
            <div className="flex justify-between">
              <div />
              <Button onClick={handleAddSlide} startIcon={<AddIcon />}>
                Slide
              </Button>
            </div>
            <Slides slides={slide} />
            <div className="flex justify-between my-4">
              <div />
              <Button
                className=""
                onClick={() => {
                  addContent({
                    id: uuidv4(),
                    type: type,
                    slides: slide,
                  });
                }}
                variant="contained"
              >
                Adicionar Slide
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              {slide.map((item, index) => (
                <Accordion key={item.id}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Slide [{index}]
                  </AccordionSummary>

                  <AccordionDetails className="grid grid-cols-12 gap-3">
                    <TextField
                      className="col-span-12"
                      label="Url Image"
                      size="small"
                      value={item.urlImage}
                      onChange={(e) =>
                        handleInputSlide(
                          item.id,
                          e.target.value as string,
                          "urlImage"
                        )
                      }
                    />
                    <TextField
                      className="col-span-6"
                      label="Titulo"
                      size="small"
                      value={item.title}
                      onChange={(e) =>
                        handleInputSlide(
                          item.id,
                          e.target.value as string,
                          "title"
                        )
                      }
                    />
                    <TextField
                      className="col-span-6"
                      label="Subtítulo"
                      size="small"
                      value={item.subtitle}
                      onChange={(e) =>
                        handleInputSlide(
                          item.id,
                          e.target.value as string,
                          "subtitle"
                        )
                      }
                    />

                    <TextField
                      className="col-span-12"
                      label="Link"
                      size="small"
                      value={item.link}
                      onChange={(e) =>
                        handleInputSlide(
                          item.id,
                          e.target.value as string,
                          "link"
                        )
                      }
                    />
                    <TextField
                      className="col-span-12"
                      label="Descrição"
                      multiline
                      rows={4}
                      size="small"
                      value={item.description}
                      onChange={(e) =>
                        handleInputSlide(
                          item.id,
                          e.target.value as string,
                          "description"
                        )
                      }
                    />
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        );
      // return <Slides />;
      default:
        return <div>Default Case</div>;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {type}
      <Autocomplete
        disablePortal
        fullWidth
        size="medium"
        value={type}
        options={types}
        renderInput={(params) => <TextField {...params} label="Categoria" />}
        onChange={(event: any, newValue: string | null) => {
          setType(newValue);
        }}
      />
      {renderContent()}
    </div>
  );
};

export default FormsCreator;
