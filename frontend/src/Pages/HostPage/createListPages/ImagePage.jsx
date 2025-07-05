import React, { useRef, useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import UploadPhotos from "../../../components/UploadPhotos";
import  { useEffect, useContext } from "react";
import { submitContext } from "../../../utils/submitContext";

const ImagePage = () => {
  const { setSelected } = useContext(submitContext);
  const [coverImage, setCoverImage] = useState(null);
  const [subs, setSubs] = useState([
    { sub1: null },
    { sub2: null },
    { sub3: null },
    { sub4: null },
  ]);

  const fileRef = useRef({});

  const handleClick = (key) => {
    fileRef.current[key].click();
  };

  const handleFileChange = (e, key) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (key === "cover") {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    } else {
      const url = URL.createObjectURL(file);
      setSubs((prevSubs) =>
        prevSubs.map((item) => {
          if (Object.keys(item)[0] === key) {
            return { [key]: url };
          }
          return item;
        })
      );
    }
  };
  useEffect(()=>{
    setSelected(false)
  })

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        method="post"
        encType="multipart/form-data"
      >
        {["cover", "sub1", "sub2", "sub3", "sub4"].map((key) => {
          return (
            <input
              hidden
              type="file"
              key={key}
              ref={(el) => (fileRef.current[key] = el)}
              onChange={(e) => handleFileChange(e, key)}
            />
          );
        })}
        <div className="flex flex-col justify-center items-center">
          <div>
            <button
              className=" w-xl h-120 overflow-hidden rounded-2xl  border-2 border-dashed bg-neutral-500/20  flex  justify-center items-center cursor-pointer"
              onClick={(e) => handleClick("cover")}
            >
              {coverImage ? (
                <img src={coverImage} alt="" className="  object-cover " />
              ) : (
                <FaCameraRetro className="text-6xl" />
              )}
            </button>
          </div>
          {coverImage && (
            <div className="grid grid-cols-2 space-x-4 space-y-4 mt-8">
              <div
                className=" cursor-pointer"
                onClick={(e) => handleClick("sub1")}
              >
                <UploadPhotos imagePreview={subs[0].sub1} />
              </div>
              <div
                className=" cursor-pointer"
                onClick={(e) => handleClick("sub2")}
              >
                <UploadPhotos imagePreview={subs[1].sub2} />
              </div>

              <div
                className=" cursor-pointer"
                onClick={(e) => handleClick("sub3")}
              >
                <UploadPhotos imagePreview={subs[2].sub3} />
              </div>

              <div
                className=" cursor-pointer"
                onClick={(e) => handleClick("sub4")}
              >
                <UploadPhotos imagePreview={subs[3].sub4} />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ImagePage;
