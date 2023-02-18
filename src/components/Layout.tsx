import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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

    > section {
      display: flex;
      gap: 1em;
      align-items: center;

      button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 4px;

        span {
          position: relative;
          top: -3px;
          font-size: 28px;
        }

        &:hover {
          background: #d1d1d1;
        }
      }
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

const Layout: FC<PropsWithChildren<{ id: string }>> = ({ children, id }) => {
  const navigate = useNavigate();

  const { state } = useRoute(id);

  const { t } = useTranslation();

  return (
    <Container>
      <Menu>asdda</Menu>
      <Content>
        <Head>Web Crawlers</Head>
        <main>
          <section>
            {state.back && (
              <button onClick={() => navigate(-1)}>
                <span>←</span>
              </button>
            )}
            <h2>{t(state.title)}</h2>
          </section>
          {children}
        </main>
      </Content>
    </Container>
  );
};
export { Layout };
