//2 - 체험하기 페이지

import React, { Component } from "react";
import Banner from "../components/Experience/Banner";
import CreaterSection from "../components/Experience/CreaterSection";
import RequestSection from "../components/Experience/RequestSection";
import VideoSection from "../components/Experience/VideoSection";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <Banner />
        <CreaterSection />
        <VideoSection />
        <RequestSection />
      </div>
    );
  }
}
