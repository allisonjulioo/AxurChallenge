import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRoute } from 'router/useRoute';
import styled from 'styled-components';
import { LanguageSelector } from './LanguageSelector';
import { Logo } from './Logo';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 1em;
  main {
    width: 100%;
    max-width: 1024px;
    padding: 3em 0;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpointMD}) {
      padding: 1em 0;
    }
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

const Head = styled.nav`
  width: 100%;
  height: 48px;
  padding: 1em 0;
  margin: 0 0 1em;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  section,
  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
`;

const Layout: FC<PropsWithChildren<{ id: string }>> = ({ children, id }) => {
  const navigate = useNavigate();

  const { state } = useRoute(id);

  const { t } = useTranslation();

  return (
    <Container>
      <Content>
        <Head>
          <Logo />
          <LanguageSelector />
        </Head>
        <main>
          <section>
            {state.back && (
              <button onClick={() => navigate(-1)} aria-label='Botão voltar'>
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
