import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test("App Rendering", () => {
    render(<App />); // Rendering the App
    const navBar = screen.getByTestId("nav-bar");
    const discoverGrid = screen.getByTestId("discover-grid");
    const navBarLink = screen.getByTestId('nav-bar-refresh');
    expect(navBar).toBeInTheDocument();
    expect(discoverGrid).toBeInTheDocument();
    expect(navBarLink).toBeInTheDocument();
  })

  test("App switchs to favorites after clicking on Favorites nav bar link", () =>{
    render(<App />); 
    const navBarLink = screen.getByTestId('nav-bar-favorites');
    fireEvent.click(navBarLink);
    const favoritesGrid = screen.getByTestId("favorites-grid");
    expect(favoritesGrid).toBeInTheDocument();    
  })

  test("App refresh after clicking on refresh nav bar link", () =>{
    render(<App />); 
    const navBarDiscover = screen.getByTestId('nav-bar-discover'); 
    fireEvent.click(navBarDiscover);
    const navBarLink = screen.getByTestId('nav-bar-refresh');
    fireEvent.click(navBarLink);
    const discoverGrid = screen.getByTestId("discover-grid");
    expect(discoverGrid).toBeInTheDocument();    
  })
})