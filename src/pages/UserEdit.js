import styled from "styled-components";
import EditContainer from "../components/UserEdit/EditContainer";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 11.5vw 8.3vw 18.4vw 8.3vw;
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 50px;
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
    type: "도로명 주소",
    content: "서울시 서초중앙로 24길 43",
    changeLink: "/",
  },
  {
    type: "상세주소",
    content: "101동 202호",
    changeLink: "/",
  },
  {
    type: "우편번호",
    content: "06603",
    changeLink: "/",
  },
];

const UserEdit = () => (
  <Container>
    <Title>회원정보수정</Title>
    <EditContainer title="기본정보" infos={basicInfo} />
    <EditContainer title="배송지 관리" infos={deliveryInfo} />
  </Container>
);

export default UserEdit;
