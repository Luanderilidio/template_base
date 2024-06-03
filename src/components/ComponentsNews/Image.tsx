import { Box, Modal } from "@mui/material";
import { useState } from "react";

interface PropsImageNews {
  urlImage: string;
  sizeImage: string;
  fontImage: string;
}

export default function ImageNews({
  urlImage,
  fontImage,
  sizeImage,
}: PropsImageNews) {
  console.log(urlImage, fontImage, sizeImage);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    boxShadow: 24,
  };

  return (
    <div className="flex items-center flex-col" onClick={handleOpen}>
      <div className="overflow-hidden rounded-2xl w-full ">
        <img
          className="w-full h-64 hover:scale-110 transition duration-500 cursor-pointer object-cover  rounded-xl shadow-xl "
          src={urlImage}
        />
      </div>

      <p className="font-light text-[.7rem] text-left leading-none mt-2 opacity-60 text-black">
        {fontImage}
      </p>
      {/* <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <img
          onClick={handleClose}
            className="w-full h-full hover:scale-110 transition duration-500 cursor-pointer object-cover  rounded-xl shadow-xl "
            src={urlImage}
          />
        </Box>
      </Modal> */}
    </div>
  );
}
