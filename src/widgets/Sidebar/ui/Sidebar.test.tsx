import { fireEvent, screen } from '@testing-library/react';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId('sidebar-id')).toBeInTheDocument();
  });

  test('render Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(screen.getByTestId('sidebar-id')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar-id')).toHaveClass('collapsed');
  });
});
