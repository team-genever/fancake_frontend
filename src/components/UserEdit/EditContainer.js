import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { api } from "settings";
import { useCookies } from "react-cookie";
import { SmallLoading } from "components/Loading";

const Container = styled.div`
  width: 100%;
  margin-bottom: 80px;
  @media only screen and (max-width: 1007px) {
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 640px) {
    margin-bottom: 5vw;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  @media only screen and (max-width: 1007px) {
    margin-bottom: 12px;
  }
  @media only screen and (max-width: 640px) {
    margin-bottom: 3vw;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  @media only screen and (max-width: 1007px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 4vw;
  }
`;

// const EditButton = styled.button`
//   border: none;
//   text-decoration: underline;
//   color: ${(props) => props.theme.linkBlue};
//   font-size: 20px;
//   font-weight: bold;
//   background-color: transparent;
//   margin-right: 10%;
//   &:hover {
//     cursor: pointer;
//   }
//   @media only screen and (max-width: 1007px) {
//     font-size: 17px;
//   }
//   @media only screen and (max-width: 640px) {
//     font-size: 3vw;
//     margin: 0;
//   }
// `;

const DarkLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  @media only screen and (max-width: 640px) {
    height: 1px;
  }
`;

const UserEditContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(72px, max-content);
  grid-template-columns: 70%;
  justify-content: center;
  @media only screen and (max-width: 1007px) {
    grid-auto-rows: minmax(64px, max-content);
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 100%;
    grid-auto-rows: minmax(13vw, max-content);
  }
`;

const UserEdit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0;
  & span {
    display: block;
    min-width: max-content;
    font-size: 18px;
    font-weight: 500;
  }
  & .type {
    color: ${(props) => props.theme.borderGray};
  }
  & div {
    display: flex;
    align-items: center;
  }
  & .input-container {
    display: inline-block;
    text-align: center;
    height: 40px;
    margin-right: 18px;
  }
  & input {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    border: none;
    padding: 5px 3px;
    display: block;
    background-color: transparent;
    border-bottom: 1px solid ${(props) => props.theme.boxLightGray};
    & :hover,
    :active,
    :focus {
      outline: none;
    }
    & :hover + .input-border,
    :active + .input-border,
    :focus + .input-border {
      width: 100%;
    }
  }
  & .input-border {
    display: inline-block;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.mainPink};
    position: relative;
    bottom: 19px;
    z-index: 3;
    transition: all 0.2s ease-in-out;
  }
  & .changeBtn {
    min-width: max-content;
    padding: 7px 10px;
    border: none;
    background-color: ${(props) => props.theme.mainPink};
    border-radius: 5px;
    display: block;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 12px;
    color: white;
    font-weight: bold;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.mainPinkHover};
    }
  }
  & .changeBtn:last-child {
    margin-left: 3px;
  }
  & .changeLink {
    min-width: max-content;
    all: unset;
    display: block;
    margin-left: 18px;
    font-size: 12px;
    line-height: 12px;
    padding: 7px 10px;
    border-radius: 5px;
    font-weight: 500;
    color: black;
    background-color: ${(props) => props.theme.fontSmallGray};
    text-decoration: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.boxVeryLightGray};
    }
  }
  @media only screen and (max-width: 1007px) {
    padding: 15px 0;
    & span {
      font-size: 17px;
    }
    & .input-container {
      height: 30px;
      margin-right: 15px;
    }
    & input {
      font-size: 17px;
      padding: 2px 2px;
    }
    & .input-border {
      bottom: 19px;
    }
    & .changeBtn {
      border-radius: 5px;
      font-size: 12px;
      line-height: 12px;
    }
    & .changeLink {
      margin-left: 15px;
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 640px) {
    padding: 2vw 0;
    & span {
      font-size: 3vw;
    }
    & .input-container {
      height: 7vw;
      margin-right: 2.5vw;
    }
    & input {
      font-size: 3vw;
      padding: 1vw 0.2vw;
    }
    & .input-border {
      bottom: 19px;
    }
    & .changeBtn {
      padding: 1.2vw 2vw;
      border-radius: 1vw;
      font-size: 2.5vw;
      line-height: 2.5vw;
    }
    & .changeBtn:last-child {
      margin-left: 0.5vw;
    }
    & .changeLink {
      padding: 1.2vw 2vw;
      margin-left: 1vw;
      font-size: 2.5vw;
    }
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
`;

const DeleteAccount = styled.div`
  padding-top: 15px;
  width: 80%;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.boxGray};
  @media only screen and (max-width: 1007px) {
    padding-top: 13px;
    font-size: 13px;
  }
  @media only screen and (max-width: 640px) {
    padding-top: 2vw;
    font-size: 2.3vw;
  }
`;

const DeleteButton = styled.span`
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 1007px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 2.3vw;
  }
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.errorRed};
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const EditContainer = ({ title, infos, isDelivery }) => {
  const findContent = (type) =>
    infos.find((info) => info.type === type).content;

  const [editMode, setEditMode] = useState(null);
  const [input, setInput] = useState("");
  const [inputTemp, setInputTemp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cookies, _, removeCookie] = useCookies(["Authorization"]);

  const noText = "추가해주세요";

  useEffect(() => {
    if (editMode) {
      setInput(editMode.content);
      setInputTemp(editMode.content);
    }
  }, [editMode]);

  useEffect(
    () =>
      setTimeout(() => {
        setError(null);
      }, 5000),
    [error]
  );

  const putUserInfo = async (paramsSchema) => {
    setLoading(true);
    try {
      const res = await api.put("users/me", paramsSchema, {
        headers: {
          Authorization: cookies.Authorization,
        },
      });
      console.log(res);
      setEditMode(null);
    } catch (error) {
      setError("회원정보를 수정하는 동안 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <DarkLine />
      <UserEditContainer>
        {infos.map((info, index) => (
          <UserEdit key={index}>
            <span className="type">{info.type}</span>
            {editMode && editMode.type === info.type ? (
              loading ? (
                <SmallLoading />
              ) : (
                <DataContainer>
                  <div>
                    <div className="input-container">
                      <input
                        type="input"
                        value={input ? input : ""}
                        onChange={(e) => {
                          setInput(e.target.value);
                        }}
                        placeholder="수정내용 입력"
                      />
                      <span className="input-border"></span>
                    </div>
                    <button
                      className="changeBtn"
                      onClick={async () => {
                        info.content = input;
                        if (isDelivery) {
                          const deliverySchema = {
                            addressRecipient: findContent("수령인"),
                            address: findContent("도로명 주소"),
                            addressPhoneNumber: findContent("전화번호"),
                            addressDetail: findContent("상세주소"),
                            zipCode: findContent("우편번호"),
                          };
                          if (info.type === "전화번호") {
                            const regPhone =
                              /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
                            if (
                              !regPhone.test(info.content) &&
                              info.content.length !== 0
                            ) {
                              setError(
                                "전화번호 형식을 맞춰주세요. (예시: 010-0000-0000)"
                              );
                            } else {
                              putUserInfo(deliverySchema);
                            }
                          } else if (info.type === "우편번호") {
                            const regZip = /([0-9]{5})$/;
                            if (
                              (!regZip.test(info.content) &&
                                info.content.length !== 0) ||
                              info.content.length > 5
                            ) {
                              setError(
                                "우편번호 형식을 맞춰주세요. (숫자 5자리)"
                              );
                            } else {
                              putUserInfo(deliverySchema);
                            }
                          } else {
                            putUserInfo(deliverySchema);
                          }
                        } else if (info.type === "전화번호") {
                          const regPhone =
                            /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
                          if (
                            !regPhone.test(info.content) &&
                            info.content.length !== 0
                          ) {
                            setError(
                              "전화번호 형식을 맞춰주세요. (예시: 010-0000-0000)"
                            );
                          } else {
                            putUserInfo({
                              phoneNumber: encodeURIComponent(info.content),
                            });
                          }
                        } else if (info.type === "계좌정보") {
                          const regAccount =
                            /([ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+) ([0-9]+) ([ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+)/;
                          if (
                            !regAccount.test(info.content) &&
                            info.content.length !== 0
                          ) {
                            setError(
                              "계좌정보 형식을 맞춰주세요. (형식: 은행이름 계좌번호 계좌명의)"
                            );
                          } else {
                            const account = info.content.split(" ");
                            const [accountName, accountNumber, accountOwner] =
                              account;
                            putUserInfo({
                              accountName,
                              accountNumber,
                              accountOwner,
                            });
                          }
                        }
                      }}
                    >
                      수정
                    </button>
                    <button
                      className="changeBtn"
                      onClick={() => {
                        info.content = inputTemp;
                        setEditMode(null);
                      }}
                    >
                      취소
                    </button>
                  </div>
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </DataContainer>
              )
            ) : (
              <div>
                <span className="content">
                  {info.content
                    ? info.content
                    : info.type !== "비밀번호"
                    ? noText
                    : ""}
                </span>
                {info.changeLink ? (
                  info.type === "비밀번호" ? (
                    <Link className="changeLink" to={info.changeLink}>
                      변경
                    </Link>
                  ) : (
                    <button
                      className="changeLink"
                      onClick={(e) =>
                        setEditMode({ type: info.type, content: info.content })
                      }
                    >
                      {info.content ? "변경" : "추가"}
                    </button>
                  )
                ) : (
                  ""
                )}
              </div>
            )}
          </UserEdit>
        ))}
        {!isDelivery && (
          <DeleteAccount>
            더 이상 서비스 이용을 원하시지 않나요?{" "}
            <DeleteButton
              onClick={async () => {
                const reallyDelete = window.confirm(
                  "정말 탈퇴하시겠습니까?\n개인정보 및 영상 구매 내역은 전부 폐기처리 됩니다."
                );
                if (reallyDelete) {
                  try {
                    const response = await api.delete("users/me", {
                      headers: {
                        Authorization: cookies.Authorization,
                      },
                    });
                    console.log(response);
                    window.alert("탈퇴 처리가 정상적으로 완료되었습니다.");
                    removeCookie("Authorization", {
                      expires: "Thu, 01 Jan 1970 00:00:00 UTC",
                      path: "/",
                    });
                  } catch (error) {
                    window.alert("탈퇴 처리를 하는 도중 오류가 발생했습니다.");
                  }
                }
              }}
            >
              탈퇴하기
            </DeleteButton>
          </DeleteAccount>
        )}
      </UserEditContainer>
    </Container>
  );
};

export default EditContainer;
