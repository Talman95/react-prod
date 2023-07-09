import { render, screen } from '@testing-library/react';
import { Button, VariantButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('render Button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('with variant clear', () => {
    render(<Button variant={VariantButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
