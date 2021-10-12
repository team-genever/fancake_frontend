import styled from "styled-components";
import EditContainer from "components/UserEdit/EditContainer";

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

const basicInfo = [
  { type: "이름", content: "백건우" },
  { type: "아이디", content: "gwbaik97@naver.com" },
  { type: "전화번호", content: "010-2874-2457", changeLink: "/" },
  { type: "비밀번호", changeLink: "./changepw" },
  {
    type: "계좌정보",
    content: "카카오뱅크 3333-02-035125 백건우",
    changeLink: "/",
  },
];

const deliveryInfo = [
  {
    type: "수령인",
    content: "백건우",
  },
  {
    type: "전화번호",
    content: "010-2874-2457",
  },
  {
    type: "도로명 주소",
    content: "서울시 서초중앙로 24길 43",
  },
  {
    type: "상세주소",
    content: "101동 202호",
  },
  {
    type: "우편번호",
    content: "06603",
  },
];

const UserEdit = () => (
  <Container>
    <Title>회원정보수정</Title>
    <EditContainer title="기본정보" infos={basicInfo} />
    <EditContainer title="배송지 관리" infos={deliveryInfo} isDelivery />
  </Container>
);

export default UserEdit;
