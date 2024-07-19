import { CardMedia } from "@mui/material";
import { Buffer } from "buffer";
import { FC, useState } from "react";
import { TPhotoUploader } from "../payloads/types";

export const PhotoUploader: FC<TPhotoUploader> = ({
  formData,
  setFormData,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Выберите файл для загрузки.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result && typeof reader.result !== "string") {
        console.log(
          "🚀 ~ handleSubmit ~ result:",
          Buffer.from(reader.result).toString("base64"),
        );

        setFormData({
          ...formData,
          avatar: Buffer.from(reader.result).toString("base64"),
        });
      }
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardMedia
        component="img"
        src={`data:image/png;base64, ${formData.avatar}`}
      />
      <input type="file" onChange={handleFileSelect} />
      <button type="submit">Загрузить</button>
    </form>
  );
};

