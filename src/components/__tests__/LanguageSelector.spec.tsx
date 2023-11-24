import { fireEvent, render, screen } from '@testing-library/react';
import i18next from 'i18next';
import { LanguageSelector } from '../LanguageSelector';

describe('LanguageSelector component', () => {
  it('should change language to English when English button is clicked', () => {
    render(<LanguageSelector />);
    const englishButton = screen.getByAltText('English');
    fireEvent.click(englishButton);
    expect(i18next.language).toBe('en-US');
  });

  it('should change language to Portuguese when Portuguese button is clicked', () => {
    render(<LanguageSelector />);
    const portugueseButton = screen.getByAltText('Portuguese');
    fireEvent.click(portugueseButton);
    expect(i18next.language).toBe('pt-BR');
  });
});
