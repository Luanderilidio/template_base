// @ts-nocheck
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import TableViewOutlinedIcon from "@mui/icons-material/TableViewOutlined";
import LaunchIcon from "@mui/icons-material/Launch";

import { Button, Link } from "@mui/material";


export interface PropsAttachment {
  id: string;
  title: string;
  type: string;
  link: string;
}

export default function Attachment({ id, title, type, link }: PropsAttachment) {
 
  return (
    <div>
      <Button startIcon={
        <>
        {type == 10 && <PictureAsPdfOutlinedIcon />}
        {type == 20 && <TableViewOutlinedIcon />}
        {type == 30 && <ArticleOutlinedIcon />}
        </>
      } href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </Button>
    </div>
  );
}
