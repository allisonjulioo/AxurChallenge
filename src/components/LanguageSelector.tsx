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
  const [language, setLanguage] = useState('pt');

  const handleSelectLanguage = (lng: string) => {
    setLanguage(lng);
    i18next.changeLanguage(lng);
  };

  return (
    <section>
      <ButtonLanguage
        active={language === 'en'}
        onClick={() => handleSelectLanguage('en')}
      >
        <img alt='English' src={require('assets/us.png')} />
      </ButtonLanguage>
      <ButtonLanguage
        active={language === 'pt'}
        onClick={() => handleSelectLanguage('pt')}
      >
        <img alt='Portuguese' src={require('assets/pt.png')} />
      </ButtonLanguage>
    </section>
  );
};
export { LanguageSelector };
