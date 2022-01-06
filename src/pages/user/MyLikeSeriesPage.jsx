import React from 'react';
import { Wrapper, CardList, Loading } from '@components';
import { getMyLikes } from '@apis/user';
import styled from '@emotion/styled';
import { useFetch } from '@hooks';

const MyLikeSeriesPage = () => {
  const { values, isLoading } = useFetch({
    initialValues: {},
    apiName: getMyLikes,
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Header>
            <H1>관심 시리즈</H1>
          </Header>
          {values.length ? (
            <CardList list={values} />
          ) : (
            <p>데이터가 존재하지 않습니다.</p>
          )}
        </Container>
      )}
    </Wrapper>
  );
};
export default MyLikeSeriesPage;

const Container = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 2rem;
`;
