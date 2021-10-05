import Banner from "components/Home/Banner";
import FAQSection from "components/Home/FAQSection";
import Introduction1 from "components/Home/Introduction1";
import Introduction2 from "components/Home/Introduction2";
import Introduction3 from "components/Home/Introduction3";
import NotificationSection from "components/Home/NotificationSection";
import VideoSection from "components/Home/VideoSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <VideoSection />
      <Introduction1 />
      <Introduction2 />
      <Introduction3 />
      <FAQSection />
      <NotificationSection />
    </div>
  );
}
