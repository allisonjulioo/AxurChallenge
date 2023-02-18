import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useRoute } from 'router/useRoute';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Menu = styled.div`
  background: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2em 0;
  min-height: 100vh;
  width: 200px;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 1em;
  main {
    width: 100%;
    max-width: 1024px;
    padding: 3em 0;
    margin: 0 auto;

    > h2 {
      margin-bottom: 2em;
    }
  }
`;

const Head = styled.div`
  width: 100%;
  height: 48px;
  padding: 1em 0;
  margin: 0 0 1em;
  border-bottom: 1px solid hsla(0, 0%, 58%, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { state } = useRoute();

  const { t } = useTranslation();

  return (
    <Container>
      <Menu></Menu>
      <Content>
        <Head>Web Crawlers</Head>
        <main>
          <h2>{t(state.title)}</h2>
          {children}
        </main>
      </Content>
    </Container>
  );
};
export { Layout };
