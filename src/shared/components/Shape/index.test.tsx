import { render } from '@testing-library/react';
import { Shape } from '.';

test('to render with childern', () => {
    render(
        <Shape>
            <div id="shape-test">
            </div>
        </Shape>
    );
    const testElement = document.getElementById('shape-test');
    expect(testElement).toBeInTheDocument();
});
