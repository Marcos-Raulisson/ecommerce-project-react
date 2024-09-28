import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Para simular as rotas
import App from '../App';

describe('Testando Rotas no App', () => {
  test('Renderiza a página Home na rota "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}> {/* Simulando a rota "/" */}
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Conteúdo principal/i)).toBeInTheDocument(); // Verificando o conteúdo da HomePage
  });

  test('Renderiza a página Login na rota "/login"', () => {
    render(
      <MemoryRouter initialEntries={['/login']}> {/* Simulando a rota "/login" */}
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Não tem uma conta/i)).toBeInTheDocument(); // Verificando o conteúdo da LoginPage
  });

  test('Renderiza a página Register na rota "/register"', () => {
    render(
      <MemoryRouter initialEntries={['/register']}>
        <App />
      </MemoryRouter>
    );
    const cadastrarButton = screen.getByRole('button', { name: /Cadastrar/i }); // Busca o botão com o texto "Cadastrar"
    expect(cadastrarButton).toBeInTheDocument(); // Verifica se o botão está presente
  });
  ;

  test('Renderiza a página de erro na rota "/error-page"', () => {
    render(
      <MemoryRouter initialEntries={['/error-page']}> {/* Simulando a rota "/error-page" */}
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 - Página não encontrada/i)).toBeInTheDocument(); // Verificando o conteúdo da ErrorPage
  });
});
