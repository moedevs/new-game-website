import * as React from "react";
import StackGrid from "react-stack-grid";
import { GuildImage } from "./image";
import aobaLoader from "../../loaders/aobaload.gif";
// import { Loader } from "../../loaders";
import Loader from "react-spinners/PulseLoader";

export const ImageScroller = ({ data, loading, error, setModal }) => {

  if (error) {
    console.log(error);
    return <div>Oops...</div>;
  }

  return (
    <StackGrid
      columnWidth={200}
      gutterWidth={10}
      gutterHeight={10}
      monitorImagesLoaded
      duration={0}
    >
      {data.map((d, i) =>
        <GuildImage
          image={d} key={i}
          setFocus={setModal}
        />)}
      {loading && <Loader/>}
    </StackGrid>
  )
}
