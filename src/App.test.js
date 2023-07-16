import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

describe('Home component', () => {
  test('renders the profile picture', () => {
    render(<Home />);
    const profilePicture = screen.getByAltText('Christy');
    expect(profilePicture).toBeInTheDocument();
  });

  test('renders the "About Me" section heading', () => {
    render(<Home />);
    const aboutHeading = screen.getByText(/About Me/i);
    expect(aboutHeading).toBeInTheDocument();
  });

  test('renders the "section 3" heading', () => {
    render(<Home />);
    const section3Heading = screen.getByText(/section 3/i);
    expect(section3Heading).toBeInTheDocument();
  });

  // More test cases for the Home component can be added here

});

test('navbar shows a border on hover', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
});

test('renders the NavBar component', () => {
  render(<NavBar />);



  // checking logo 
  const logoElement = screen.getByText(/Logo/i);
  expect(logoElement).toBeInTheDocument();

  // Home is rendered correctly
  const homeLinkElement = screen.getByText(/Home/i);
  expect(homeLinkElement).toBeInTheDocument();

  // Tech Stack link is rendered
  const techStackLinkElement = screen.getByText(/Tech Stack/i);
  expect(techStackLinkElement).toBeInTheDocument();

  // Project link is rendered
  const projectLinkElement = screen.getByText(/Project/i);
  expect(projectLinkElement).toBeInTheDocument();

  // About link is rendered
  const aboutLinkElement = screen.getByText(/About/i);
  expect(aboutLinkElement).toBeInTheDocument();

  // Contact link is rendered
  const contactLinkElement = screen.getByText(/Contact/i);
  expect(contactLinkElement).toBeInTheDocument();
});