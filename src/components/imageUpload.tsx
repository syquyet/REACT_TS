

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { useState } from "react";
import { storage } from "../frirebase/config";

export default function ImageUpload() {
  const [imageInput, setImageInput] = useState<File>();
  const [url, setUrl] = useState<string>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    if (event.target.files) {
      setImageInput(event.target.files[0]);
    }
  };
  const handleUpload = () => {
    if (imageInput) {
      const nameImg = imageInput?.name.split(".").shift();
      const storageRef = ref(storage, `avatars/${nameImg}`);
      uploadBytes(storageRef, imageInput)
        .then(async (snapshot) => {
          console.log("Uploaded file thanh cong", snapshot);
          const newUrl = await getDownloadURL(storageRef);

          console.log(newUrl);
          setUrl(newUrl);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      {url ? (
        <img src={url} alt="anh" width={200} height={200} />
      ) : (
        <>
          <input type="file" onChange={handleChange} />
          <button onClick={handleUpload}>upload</button>{" "}
        </>
      )}
    </div>
  );
}
