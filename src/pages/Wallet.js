// 3 - 나의 지갑

import React from "react";
import styled from "styled-components";
import Videos from "components/Wallet/Videos";
import UserWallet from "components/Wallet/UserWallet";
import { api } from "settings";
import { withCookies } from "react-cookie";
import Loading from "components/Loading";
import { Helmet } from "react-helmet";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 160px 120px 100px 120px;
  @media only screen and (max-width: 1007px) {
    padding: 120px 90px 80px 90px;
  }
  @media screen and (max-width: 640px) {
    padding: 21vw 5vw;
    padding-bottom: 0;
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const VideosContainer = styled.div`
  margin-bottom: 100px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
  @media screen and (max-width: 640px) {
    font-size: 5vw;
    margin-bottom: 5vw;
  }
`;

class Wallet extends React.Component {
  state = {
    loading: true,
    userInfo: {},
    userStocks: [],
    userConfirmStocks: [],
    error: null,
  };
  getUserInfo = async () => {
    const { cookies } = this.props;
    try {
      const responseInfo = await api.get("user", {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
        params: {
          detail: true,
        },
      });
      const responseStock = await api.get("user/stocks", {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
        params: {
          confirm: false,
        },
      });
      const responseConfirmStock = await api.get("user/stocks", {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
        params: {
          confirm: true,
        },
      });
      this.setState({ userInfo: responseInfo.data });
      this.setState({ userStocks: responseStock.data.content });
      this.setState({ userConfirmStocks: responseConfirmStock.data.content });
    } catch {
      this.setState({ error: "정보를 가져오는 동안 오류가 발생했습니다." });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getUserInfo();
  }

  render() {
    const { userInfo, userStocks, userConfirmStocks, loading } = this.state;
    return (
      <Container>
        <Helmet>
          <title>fanCake | 나의 지갑</title>
        </Helmet>
        {loading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <>
            <UserWallet userInfo={userInfo} />
            <VideosContainer>
              <Title>보유 중인 영상</Title>
              <Videos
                videosType="own"
                userStocks={userConfirmStocks}
                creater="all"
              />
            </VideosContainer>
            <VideosContainer>
              <Title>공동구매 중인 영상</Title>
              <Videos videosType="with" userStocks={userStocks} creater="all" />
            </VideosContainer>
          </>
        )}
      </Container>
    );
  }
}

export default withCookies(Wallet);
