/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        filesize: "0.9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        filesize: "0.9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
  ];
  useState();
  return (
    <div ref={ref} className="fixed top-0 left-0  z-[3] w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
