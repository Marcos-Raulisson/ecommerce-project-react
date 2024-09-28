import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../../../pages/HomePage/HomePage';
import Header from '../../../components/Header/Header';

describe('Testando a renderização da HomePage', () => {
  test('Verifica se a página Home renderiza corretamente', () => {
    // Envolve o HomePage com o MemoryRouter para simular o ambiente de roteamento
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    // Verifica se o Header está sendo renderizado corretamente
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Verifica se o texto "Conteúdo principal" está na página
    expect(screen.getByText(/Conteúdo principal/i)).toBeInTheDocument();

    // Verifica se o Footer também está sendo renderizado
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // O role 'contentinfo' é padrão para footers
  });
});
