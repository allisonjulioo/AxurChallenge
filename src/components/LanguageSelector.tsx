import i18next from 'i18next';
import { useState } from 'react';
import styled from 'styled-components';

const ButtonLanguage = styled.button<{ active: boolean }>`
  border: none;
  background: transparent;
  overflow: hidden;
  cursor: pointer;
  img {
    object-fit: cover;
    height: 20px;
    width: 30px;
    filter: grayscale(${({ active }) => (active ? '0' : '100%')});
  }
`;

const LanguageSelector = () => {
  const [language, setLanguage] = useState(navigator.language);

  const handleSelectLanguage = (lng: string) => {
    setLanguage(lng);
    i18next.changeLanguage(lng);
  };

  return (
    <section>
      <ButtonLanguage
        aria-label='Language to english'
        active={language === 'en-US'}
        onClick={() => handleSelectLanguage('en-US')}
      >
        <img alt='English' src={require('assets/us.png')} />
      </ButtonLanguage>
      <ButtonLanguage
        aria-label='Idioma para português'
        active={language === 'pt-BR'}
        onClick={() => handleSelectLanguage('pt-BR')}
      >
        <img alt='Portuguese' src={require('assets/pt.png')} />
      </ButtonLanguage>
    </section>
  );
};
export { LanguageSelector };
