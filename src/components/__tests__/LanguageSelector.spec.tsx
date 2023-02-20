import { fireEvent, render } from '@testing-library/react';
import i18next from 'i18next';
import { LanguageSelector } from '../LanguageSelector';

describe('LanguageSelector component', () => {
  it('should change language to English when English button is clicked', () => {
    const { getByAltText } = render(<LanguageSelector />);
    const englishButton = getByAltText('English');
    fireEvent.click(englishButton);
    expect(i18next.language).toBe('en-US');
  });

  it('should change language to Portuguese when Portuguese button is clicked', () => {
    const { getByAltText } = render(<LanguageSelector />);
    const portugueseButton = getByAltText('Portuguese');
    fireEvent.click(portugueseButton);
    expect(i18next.language).toBe('pt-BR');
  });
});
