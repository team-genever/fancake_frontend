import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OwningVideo from "./OwningVideo";
import WithVideo from "./WithVideo";
import ReactGA from "react-ga";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalPage = styled.span`
  display: block;
  font-size: 15px;
  align-self: flex-start;
  margin-bottom: 10px;
  font-weight: 500;
  & strong {
    color: ${(props) => props.theme.mainPink};
  }
`;

const VideosGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 3vw;
  }
`;

const VideosPage = styled.div`
  display: flex;
  background-color: white;
  border-radius: 30px;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
  gap: 10px;
  & button {
    background-color: transparent;
    border: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    &:first-child {
      color: ${(props) =>
        props.currentPage > 1 ? "black" : props.theme.boxLightGray};
      :hover {
        cursor: ${(props) => (props.currentPage > 1 ? "pointer" : "default")};
        ${(props) =>
          props.currentPage > 1 ? `color: ${props.theme.mainPink};` : ""}
      }
    }
    &:last-child {
      color: ${(props) =>
        props.currentPage < props.totalPage
          ? "black"
          : props.theme.boxLightGray};
      :hover {
        cursor: ${(props) =>
          props.currentPage < props.totalPage ? "pointer" : "default"};
        ${(props) =>
          props.currentPage < props.totalPage
            ? `color: ${props.theme.mainPink};`
            : ""}
      }
    }
  }
  & span {
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
  }
  @media screen and (max-width: 1007px) {
    border-radius: 25px;
    width: 140px;
    height: 45px;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    gap: 10px;
    & button {
      font-size: 20px;
    }
    & span {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 640px) {
    border-radius: 15vw;
    width: 25vw;
    height: 9vw;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    gap: 2vw;
    & button {
      font-size: 4vw;
    }
  }
`;

const NotFound = styled.span`
  display: block;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 13px;
  @media screen and (max-width: 640px) {
    margin-bottom: 4vw;
    font-size: 2.5vw;
  }
`;

const Videos = ({
  videosType,
  videos,
  creater,
  setCurrentVideo,
  setVideoInfo,
  isWallet,
}) => {
  const getMaxPage = (width) => {
    if (width > 1693) {
      return 10;
    } else if (width > 1374) {
      return 8;
    } else if (width > 1056) {
      return 6;
    } else if (width > 737) {
      return 4;
    } else {
      return 4;
    }
  };

  const [filteredStocks, setStocks] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [totalVideos, setTotalVideos] = useState(videos.length);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(getMaxPage(window.innerWidth));
  useEffect(() => setCurrentPage(1), [creater]);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMaxPage(getMaxPage(window.innerWidth));
    });
    let stocks = videos;
    if (videosType !== "own" && isWallet !== true) {
      stocks = videos.filter((stock) => {
        if (creater === "all") return true;
        if (creater === stock.channel.channelTitle) return true;
        return false;
      });
    }
    setTotalVideos(stocks.length);
    setTotalPage(stocks.length <= 0 ? 1 : Math.ceil(stocks.length / maxPage));
    setStocks(stocks.slice((currentPage - 1) * maxPage, currentPage * maxPage));
    return () => {
      window.removeEventListener("resize", () => {
        setMaxPage(window.innerWidth > 640 ? 8 : 4);
      });
    };
  }, [maxPage, currentPage, creater, videosType, totalVideos]);
  return (
    <Container>
      <TotalPage>
        전체 영상: <strong>{totalVideos}</strong>개
      </TotalPage>
      {videosType === "own" ? (
        videos && videos.length !== 0 ? (
          <VideosGrid>
            {filteredStocks.map((stock, index) => (
              <OwningVideo
                key={index}
                videoId={stock.video.videoId}
                title={stock.video.title}
                channelTitle={stock.video.channel.channelTitle}
                totalAmount={stock.video.totalAmount}
                size={stock.size}
                price={stock.video.pricePerShare}
              />
            ))}
            {() => {
              for (let i = 0; i < maxPage - filteredStocks.length; i = i + 1) {}
            }}
          </VideosGrid>
        ) : (
          <NotFound>보유한 영상이 없습니다.</NotFound>
        )
      ) : videos && videos.length !== 0 ? (
        <VideosGrid>
          {filteredStocks.map((stock_, index) => {
            const size = stock_.size;
            const stock = isWallet ? stock_.video : stock_;
            return (
              <div
                key={index}
                onClick={() => {
                  if (setCurrentVideo) {
                    setCurrentVideo(stock.videoIdx);
                    setVideoInfo(stock);
                    setTimeout(() => {
                      const stepThree = document.getElementById("step_three");
                      stepThree &&
                        stepThree.scrollIntoView({
                          behavior: "smooth",
                        });
                    }, 100);
                  }

                  ReactGA.event({
                    category: "Step2",
                    action: `Select ${stock.title}`,
                  });

                }}
              >
                <WithVideo
                  types={[
                    {
                      id: "youtube",
                      name:
                        stock.channel.channelUrl.includes("youtube") &&
                        "유튜브",
                    },
                    {
                      id: "onsale",
                      name: stock.onSale
                        ? "판매중"
                        : stock.auctionState === "CANCEL"
                        ? "판매취소"
                        : "판매완료",
                    },
                  ]}
                  isWallet={isWallet}
                  size={size}
                  title={stock.title}
                  videoId={stock.videoId}
                  channelTitle={stock.channel.channelTitle}
                  totalAmount={stock.totalAmount}
                  currentAmount={stock.currentAmount}
                  price={stock.pricePerShare}
                  expirationDate={stock.expirationDate}
                />
              </div>
            );
          })}
        </VideosGrid>
      ) : (
        <NotFound>
          {isWallet ? "구매중인 영상이 없습니다." : "판매중인 영상이 없습니다."}
        </NotFound>
      )}
      <VideosPage currentPage={currentPage} totalPage={totalPage}>
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
            const stepTwo = document.getElementById("step_two");
            stepTwo.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <span>
          {currentPage} / {totalPage}
        </span>
        <button
          onClick={() => {
            if (currentPage < totalPage) {
              setCurrentPage(currentPage + 1);
            }
            const stepTwo = document.getElementById("step_two");
            stepTwo.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </VideosPage>
    </Container>
  );
};

export default Videos;
