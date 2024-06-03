import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export interface PropsCitation {
  text: string;
  author: string;
}

export default function Citation({ text, author }: PropsCitation) {
  console.log(text, author)
  return (
    <div className="relative border-y-2 border-red-600  mt-4">
      <p className="text-black text-xl transition ease-in-out hover:scale-105 font-Roboto font-bold leading-tight p-5">{text}</p>
      <p className="w-full text-end font-normal opacity-90 text-black">- {author}</p>
    </div>
  );
}
