import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "components/Loading";
import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { GetBackendIP } from "settings";
import { api } from "settings";
import styled from "styled-components";
import SockJS from "sockjs-client";
import * as StompJS from "@stomp/stompjs";

const Positioner = styled.div`
  position: relative;
  grid-area: comments;
  width: 100%;
  height: 100%;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1007px) {
    height: max-content;
  }
`;

const CommentsGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  grid-auto-rows: max-content;
  overflow-y: scroll;
  gap: 10px;
  padding: 10px;
  padding-bottom: 70px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 1007px) {
  }
  @media only screen and (max-width: 640px) {
    padding: 2vw;
    padding-bottom: 15vw;
    gap: 2vw;
  }
`;

const NoComment = styled.span`
  display: block;
  text-align: center;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  @media only screen and (max-width: 640px) {
    font-size: 2.5vw;
  }
`;

const Comment = styled.div`
  display: grid;
  background-color: white;
  grid-template-columns: 1fr 5fr;
  gap: 10px;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 20px 15px;
  @media only screen and (max-width: 640px) {
    grid-template-columns: 2fr 5fr;
    padding: 2.5vw 4vw;
    gap: 1vw;
    border-radius: 3vw;
  }
`;

const CommentFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h3 {
    font-size: 18px;
    font-weight: 700;
  }
  & small {
    font-size: 10px;
    color: ${(props) => props.theme.boxGray};
  }
  @media only screen and (max-width: 640px) {
    & h3 {
      font-size: 4.5vw;
    }
    & small {
      font-size: 2.5vw;
    }
  }
`;

const CommentBack = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;
  & span {
    font-size: 15px;
  }
  & svg {
    align-self: center;
    justify-self: center;
    font-size: 15px;
    &:hover {
      color: ${(props) => props.theme.mainPink};
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 640px) {
    & span {
      font-size: 3.5vw;
    }
  }
`;

const CommentInputGrid = styled.div`
  position: absolute;
  bottom: 0;
  display: grid;
  width: 100%;
  height: 10%;
  min-height: 40px;
  grid-template-columns: 5fr 1fr;
  gap: 10px;
  background-color: rgba(237, 237, 237, 0.15);
  backdrop-filter: blur(5px);
  padding: 5px 10px;
  & input {
    border: none;
    border-radius: 15px;
    padding: 0 15px;
    font-size: 16px;
    width: 100%;
  }
  & button {
    width: 100%;
    border: none;
    border-radius: 15px;
    background-color: ${(props) =>
      props.loggedIn ? props.theme.mainPink : props.theme.navBarUnderGray};
    color: white;
    font-weight: 700;
    font-size: 15px;
    &:hover {
      background-color: ${(props) =>
        props.loggedIn
          ? props.theme.mainPinkHover
          : props.theme.navBarUnderGray};
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 3fr 1fr;
    gap: 5px;
    height: 7%;
    padding: 1.5vw 0;
    & input {
      font-size: 3vw;
      padding: 3vw;
    }
    & button {
      font-size: 3.5vw;
    }
  }
`;

const Comments = ({ videoIdx, userIdx }) => {
  const [loading, setLoading] = useState(true);
  const [cookies] = useCookies(["Authorization"]);
  const [loggedIn, setLoggedIn] = useState(cookies.Authorization !== undefined);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  let stompClient = null;

  const getComments = async () => {
    try {
      const response = await api.get(`videos/${videoIdx}/comments`, {});
      setComments(response.data.content);
      console.log(response.data.content);
    } catch (error) {
      window.alert("댓글을 불러오는 도중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const postComments = async () => {
    try {
      console.log(commentInput, cookies.Authorization);
      const response = await api.post(
        `videos/${videoIdx}/comments`,
        { content: commentInput },
        { headers: { Authorization: cookies.Authorization } }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      window.alert("댓글을 업로드 하는 도중 오류가 발생했습니다.");
    }
  };

  const deleteComments = async (commentIdx) => {
    try {
      const response = await api.delete(`videos/${videoIdx}/comments`, {
        headers: { Authorization: cookies.Authorization },
        data: { commentIdx },
      });
      window.alert("정상적으로 삭제되었습니다.");
    } catch (error) {
      window.alert("댓글을 삭제하는 도중 오류가 발생했습니다.");
    }
  };

  const nameAnonymous = (name) => {
    const first = name[0];
    let remain = [];
    for (let i = 1; i < name.length; i++) {
      remain.push("*");
      if (i > 6) {
        break;
      }
    }
    return first + remain.join("");
  };

  const commentTime = (date) => {
    const commentDate = new Date(date);
    const nowDate = new Date();
    const timeGap = nowDate.getTime() - commentDate.getTime();
    if (timeGap < 60000) {
      return "방금";
    } else if (timeGap < 3600000) {
      return `${Math.floor(timeGap / 60000)}분 전`;
    } else if (timeGap < 86400000) {
      return `${Math.floor(timeGap / 3600000)}시간 전`;
    } else {
      return `${Math.floor(timeGap / 86400000)}일 전`;
    }
  };

  const commentSubmit = () => {
    if (commentInput !== "" && loggedIn) {
      postComments();
      setCommentInput("");
    } else if (!loggedIn) {
      window.alert("로그인 후 이용 가능합니다.");
    } else {
      window.alert("내용을 작성해주세요.");
    }
  };

  const getTempToken = async () => {
    let authToken = null;

    try {
      const response = await api.get("users/me/token");
      console.log("token", response);
    } catch (e) {}

    return authToken;
  };

  const connectSocket = async () => {
    let authToken;

    if (cookies.Authorization) {
      authToken = cookies.Authorization;
    } else {
      authToken = getTempToken();
    }

    console.log(GetBackendIP() + "ws/end?authToken=" + authToken);

    stompClient = new StompJS.Client({
      webSocketFactory: () =>
        new SockJS(GetBackendIP() + "ws/end?authToken=" + authToken),
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: (frame) => {
        console.log(`/sub/videos/${videoIdx}/comments`, frame);
        console.log("Connected");
        const sub = stompClient.subscribe(
          `/sub/videos/${videoIdx}/comments`,
          (data) => {
            setComments(JSON.parse(data.body));
            setLoading(false);
          }
        );
        console.log(sub);
      },
    });

    stompClient.activate();
    console.log(stompClient);
  };

  const disconnectSocket = () => {
    stompClient.deactivate();
    console.log("disconnected");
  };

  useEffect(() => {
    connectSocket();
    return () => disconnectSocket();
  }, [videoIdx]);

  useEffect(() => {
    setLoggedIn(cookies.Authorization !== undefined);
  }, [cookies]);

  return (
    <Positioner>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CommentsGrid>
            {comments?.length !== 0 ? (
              comments.map((comment, index) => (
                <Comment key={index}>
                  <CommentFront>
                    <h3>{nameAnonymous(comment.user.name)}</h3>
                    <small>{commentTime(comment.createdDate)}</small>
                  </CommentFront>
                  <CommentBack>
                    <span>{comment.content}</span>
                    {comment.user.userIdx === userIdx ? (
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => {
                          console.log(comment.contentIdx);
                          deleteComments(comment.contentIdx);
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </CommentBack>
                </Comment>
              ))
            ) : (
              <NoComment>
                아직 댓글이 없습니다. 첫 댓글을 작성해보세요!
              </NoComment>
            )}
          </CommentsGrid>

          <CommentInputGrid
            loggedIn={loggedIn}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                commentSubmit();
              }
            }}
          >
            <input
              placeholder={
                loggedIn
                  ? "자유롭게 영상에 대한 의견을 남겨주세요 (최대 200자)"
                  : "로그인 후 댓글 작성 가능"
              }
              type="text"
              maxLength="200"
              value={loggedIn ? commentInput : ""}
              onChange={(e) => {
                if (loggedIn) {
                  setCommentInput(e.target.value);
                }
              }}
            />
            <button onClick={commentSubmit}>게시</button>
          </CommentInputGrid>
        </>
      )}
    </Positioner>
  );
};

export default Comments;
