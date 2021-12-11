import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Wrapper, Image } from '@components';
import { getArticleDetail } from '@apis/article';
import { useParams } from 'react-router-dom';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({
    title: '',
    contents: '',
    thumbnailKey: '',
    createdAt: '',
  });

  const getInitialData = async id => {
    try {
      const { data } = await getArticleDetail({ id });
      setArticle({
        title: data.title,
        contents: data.contents,
        thumbnailKey: data.thumbnailKey,
        createdAt: data.createdAt,
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getInitialData(id);
  }, []);

  return (
    <Wrapper>
      <Image
        width="100%"
        height="100%"
        src={article.thumbnailKey}
        alt="미리보기"
      />
      <Container>
        <Title>{article.title}</Title>
        <Date>{article.createdAt}</Date>
      </Container>
      <Paragraph>{article.contents}</Paragraph>
    </Wrapper>
  );
};

export default ArticleDetailPage;

const Title = styled.h1`
  width: 80%;
  height: 100%;
  font-weight: 700;
  font-size: 2.5rem;
`;

const Paragraph = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 8rem;
`;

const Date = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  box-shadow: 0 0.25rem 0.25rem -0.25rem #c4c4c4;
  padding: 0.25rem 0;
`;
