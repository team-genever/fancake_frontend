import styled from "styled-components";
import Transaction from "../components/History/Transaction";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 11.5vw 8.3vw 18.4vw 8.3vw;
`;

const History = () => (
  <Container>
    <Transaction />
  </Container>
);

export default History;
