// @ts-nocheck

import Attachment from "./ComponentsNews/Attachment";
import Author from "./ComponentsNews/Author";
import Category from "./ComponentsNews/Category";
import Citation from "./ComponentsNews/Citation";
import ImageNews from "./ComponentsNews/Image";
import Slides from "./ComponentsNews/Slides";
import TitleNews from "./ComponentsNews/Title";
import Video from "./ComponentsNews/Video";

export const NewsItem = ({ item }: any) => {
  switch (item.type) {
    case "Imagem":
      return (
        <ImageNews
          urlImage={item.urlImage}
          fontImage={item.fontImage}
          sizeImage={item.sizeImage}
        />
      );
    case "Titulo":
      return (
        <TitleNews
          title={item.title}
          size={item.size}
          weight={item.weight}
          color={item.color}
        />
      );
    case "Citação":
      return <Citation author={item.author} text={item.text} />;
    case "Anexo":
      return (
        <>
          {item.attachment.map((element) => (
            <Attachment
              key={element.id}
              title={element.title}
              link={element.link}
              type={element.type}
            />
          ))}
        </>
      );
    case "Paragrafos":
      return (
        <div
          className="mt-5 text-black"
          dangerouslySetInnerHTML={{ __html: item.paragraph }}
        />
      );
    case "Categoria":
      return <Category category={item.category} />;
    case "Autor":
      return <Author colunista={item.colunista} />;
    case "Video":
      return <Video fontVideo={item.fontVideo} urlVideo={item.urlVideo} />;
    case "Slide":
      return <Slides slides={item.slides} />;
    default:
      return "defalt value";
  }
};
