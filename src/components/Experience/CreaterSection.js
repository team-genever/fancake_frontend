import React from "react";
import styled, { css } from "styled-components";

const Positioner = styled.div`
  width: 100%;
  display: flex;
  //position: relative;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Box = styled.div`
  min-width: max-content;
  padding: 5px;
  padding-right: 20px;
  height: 55px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  ${(props) =>
    props.name === "all" &&
    css`
      padding-left: 20px;
    `}
  ${(props) =>
    props.creater === props.name
      ? css`
          border: 1px solid ${(props) => props.theme.mainPink};
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
        `
      : css`
          border: 1px solid ${(props) => props.theme.boxGray};
          box-shadow: none;
        `}
  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
  @media only screen and (max-width: 640px) {
    padding: 1vw;
    padding-right: 4vw;
    height: 10vw;
    border-radius: 5vw;
    ${(props) =>
      props.name === "all" &&
      css`
        padding-left: 4vw;
      `}
  }
`;

const Image = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  margin-right: 10px;
  @media only screen and (max-width: 640px) {
    margin-right: 2vw;
  }
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 14px;
  min-width: max-content;

  @media only screen and (max-width: 640px) {
    font-size: 2.5vw;
  }
`;

const CreaterSection = ({ creators, creater, setCreater, setCurrentVideo }) => {
  // const scrollRef = useRef(null);

  // const [isDrag, setIsDrag] = useState(false);
  // const [startX, setStartX] = useState(0);

  // const onDragStart = (e) => {
  //   e.preventDefault();

  //   setIsDrag(true);
  //   setStartX(e.pageX + scrollRef.current.scrollLeft);
  // };

  // const onDragEnd = () => {
  //   setIsDrag(false);
  // };

  // const onDragMove = (e) => {
  //   if (isDrag) {
  //     scrollRef.current.scrollLeft = startX - e.pageX;
  //   }
  // };

  const onCreatorClick = (e) => {
    const target = e.currentTarget.getAttribute("name");
    const stepTwo = document.getElementById("step_two");
    setCreater(target);
    setCurrentVideo(null);
    stepTwo &&
      stepTwo.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
  };

  return (
    <Positioner>
      <Container
      // ref={scrollRef}
      // onMouseDown={onDragStart}
      // onMouseMove={onDragMove}
      // onMouseUp={onDragEnd}
      // onMouseLeave={onDragEnd}
      >
        <Box onClick={onCreatorClick} name="all" creater={creater}>
          <Name>전체</Name>
        </Box>
        {creators.map((creator, index) => (
          <Box
            key={index}
            onClick={onCreatorClick}
            name={creator.channelTitle}
            creater={creater}
          >
            <Image
              src={creator.thumbnailUrl}
              alt={`${creator.channelTitle} 채널 프로필 이미지`}
            ></Image>
            <Name>{creator.channelTitle}</Name>
          </Box>
        ))}
      </Container>
    </Positioner>
  );
};

export default CreaterSection;
