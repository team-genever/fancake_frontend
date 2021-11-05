//없는 url 입력 시 오류 페이지
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  max-height: max-content;
  padding: 160px 120px 200px 120px;
  @media only screen and (max-width: 1007px) {
    padding: 120px 90px 300px 90px;
  }
  @media only screen and (max-width: 640px) {
    padding: 21vw 5vw;
    padding-bottom: 0;
    height: 95vh;
  }
`;

export default function Error() {
  return (
    <div>
      <Helmet>
        <title>fanCake | 페이지 오류</title>
      </Helmet>
      <Container>
        <h1>404 Error</h1>
      </Container>
    </div>
  );
}
