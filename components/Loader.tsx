import React from "react";
import { ColorRing } from "react-loader-spinner";

type Props = {};

export default function Loader({}: Props) {
  return (
    <>
      <div className="stkbnx-container md:py-14 xl:py-13 lg:py-14 py-4 flex justify-center h-[50vh]">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#00b144", "#33CCFF", "#0C2038", "#187695", "#4cc6ee"]}
        />
      </div>
    </>
  );
}

