import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});


;

test('render something',()=>{
  render(<App/>)
  const elementLink=screen.getAllByText('link')
  expect(elementLink).toBeInTheDocument()
})