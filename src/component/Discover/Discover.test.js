import { getByRole, render, screen, waitFor } from '@testing-library/react';
import Discover from './Discover';
describe('Discover component', () => {
    test("Discover Rendering", () => {
        render(<Discover count={2} />);
        const discoverGrid = screen.getByTestId("discover-grid");
        expect(discoverGrid).toBeInTheDocument();
    })
})