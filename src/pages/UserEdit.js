import styled from "styled-components";
import EditContainer from "components/UserEdit/EditContainer";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { api } from "settings";
import Loading from "components/Loading";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 160px 120px 200px 120px;
  @media only screen and (max-width: 1007px) {
    padding: 120px 90px 150px 90px;
  }
  @media only screen and (max-width: 640px) {
    padding: 21vw 5vw;
    padding-bottom: 15vw;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  @media only screen and (max-width: 1007px) {
    font-size: 32px;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 5vw;
    margin-bottom: 5vw;
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

// const basicInfo = [
//   { type: "이름", content: "백건우" },
//   { type: "아이디", content: "gwbaik97@naver.com" },
//   { type: "전화번호", content: "010-2874-2457", changeLink: "/" },
//   { type: "비밀번호", changeLink: "./changepw" },
//   {
//     type: "계좌정보",
//     content: "카카오뱅크 3333-02-035125 백건우",
//     changeLink: "/",
//   },
// ];

// const deliveryInfo = [
//   {
//     type: "수령인",
//     content: "백건우",
//   },
//   {
//     type: "전화번호",
//     content: "010-2874-2457",
//   },
//   {
//     type: "도로명 주소",
//     content: "서울시 서초중앙로 24길 43",
//   },
//   {
//     type: "상세주소",
//     content: "101동 202호",
//   },
//   {
//     type: "우편번호",
//     content: "06603",
//   },
// ];

const UserEdit = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cookies] = useCookies(["Authorization"]);
  const [basicInfo, setBasicInfo] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState([]);

  const getUserInfo = async () => {
    try {
      const response = await api.get("user", {
        headers: {
          Authorization: cookies.Authorization,
        },
        params: {
          detail: true,
        },
      });
      setInfo(response.data);
    } catch (e) {
      console.log(e);
      setError("정보를 가져오는 동안 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const setInfo = (info) => {
    const noText = "추가해주세요";
    setBasicInfo([
      { type: "이름", content: info.name ? info.name : noText },
      { type: "아이디", content: info.userID && info.userID },
      {
        type: "전화번호",
        content: info.phoneNumber ? info.phoneNumber : noText,
        changeLink: true,
      },
      { type: "비밀번호", changeLink: "./changepw" },
      {
        type: "계좌정보",
        content:
          info.account.accountName &&
          info.account.accountNumber &&
          info.account.accountOwner
            ? `${info.account.accountName} ${info.account.accountNumber} ${info.account.accountOwner}`
            : noText,
        changeLink: true,
      },
    ]);
    setDeliveryInfo([
      {
        type: "수령인",
        content: info.address.addressRecipient
          ? info.address.addressRecipient
          : noText,
      },
      {
        type: "전화번호",
        content: "010-2874-2457",
      },
      {
        type: "도로명 주소",
        content: info.address.address ? info.address.address : noText,
      },
      {
        type: "상세주소",
        content: info.address.addressDetail
          ? info.address.addressDetail
          : noText,
      },
      {
        type: "우편번호",
        content: info.address.addressZipCode
          ? info.address.addressZipCode
          : noText,
      },
    ]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getUserInfo();
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : error ? (
        <LoadingContainer>
          <span>{error}</span>
        </LoadingContainer>
      ) : (
        <>
          <Title>회원정보수정</Title>
          <EditContainer title="기본정보" infos={basicInfo} />
          <EditContainer title="배송지 관리" infos={deliveryInfo} isDelivery />
        </>
      )}
    </Container>
  );
};

export default UserEdit;
