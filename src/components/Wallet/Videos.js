import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OwningVideo from "./OwningVideo";
import WithVideo from "./WithVideo";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    white-space: normal;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
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

const VideoLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const NotFound = styled.span`
  display: block;
  margin-bottom: 40px;
  @media screen and (max-width: 640px) {
    margin-bottom: 4vw;
  }
`;

const Videos = ({ videosType, userStocks, creater }) => {
  const [filteredStocks, setStocks] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(window.innerWidth > 640 ? 8 : 4);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMaxPage(window.innerWidth > 640 ? 8 : 4);
    });
    let stocks = userStocks;
    if (videosType !== "own") {
      stocks = userStocks.filter((stock) => {
        if (creater === "all") return true;
        if (creater === stock.video.channel.channelTitle) return true;
        return false;
      });
    }
    setTotalPage(stocks.length <= 0 ? 1 : Math.ceil(stocks.length / maxPage));
    setStocks(stocks.slice((currentPage - 1) * maxPage, currentPage * maxPage));
  }, [maxPage, currentPage, creater, videosType]);
  return (
    <Container>
      {videosType === "own" ? (
        userStocks && userStocks.length !== 0 ? (
          <VideosGrid>
            {filteredStocks.map((stock, index) => (
              <OwningVideo
                key={index}
                videoId={stock.video.videoId}
                title={stock.video.title}
                channelTitle={stock.video.channel.channelTitle}
                totalAmount={stock.video.totalAmount}
                size={stock.size}
                totalPrice={
                  stock.video.pricePerShare * stock.video.currentAmount
                }
              />
            ))}
            {() => {
              for (let i = 0; i < maxPage - filteredStocks.length; i = i + 1) {}
            }}
          </VideosGrid>
        ) : (
          <NotFound>보유한 영상이 없습니다.</NotFound>
        )
      ) : userStocks && userStocks.length !== 0 ? (
        <VideosGrid>
          {filteredStocks.map((stock, index) => (
            <VideoLink
              key={index}
              to={`/experience/detail/${stock.video.videoId}`}
            >
              <WithVideo
                types={[
                  {
                    id: "youtube",
                    name:
                      stock.video.channel.channelUrl.includes("youtube") &&
                      "유튜브",
                  },
                  { id: "onsale", name: "판매중" },
                ]}
                title={stock.video.title}
                videoId={stock.video.videoId}
                channelTitle={stock.video.channel.channelTitle}
                totalAmount={stock.video.totalAmount}
                currentAmount={stock.video.currentAmount}
                price={stock.video.pricePerShare}
                expirationDate={stock.video.expirationDate}
              />
            </VideoLink>
          ))}
        </VideosGrid>
      ) : (
        <NotFound>구매중인 영상이 없습니다.</NotFound>
      )}
      <VideosPage currentPage={currentPage} totalPage={totalPage}>
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
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
          }}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </VideosPage>
    </Container>
  );
};

export default Videos;
