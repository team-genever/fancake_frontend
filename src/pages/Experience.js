//2 - 체험하기 페이지

import { getElementError } from "@testing-library/dom";
import React, { Component, useRef } from "react";
import Banner from "components/Experience/Banner";
import CreaterSection from "components/Experience/CreaterSection";
import RequestSection from "components/Experience/RequestSection";
import VideoSection from "components/Experience/VideoSection";

const Experience = () => {
  const myRef = useRef(null);

  const Scroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    console.log(myRef.current);
  };

  return (
    <div>
      <Banner />

      <CreaterSection Scroll={Scroll} />
      <VideoSection />
      <RequestSection myRef={myRef} />
    </div>
  );
};

export default Experience;
