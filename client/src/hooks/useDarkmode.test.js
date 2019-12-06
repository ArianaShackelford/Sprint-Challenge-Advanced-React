
import {getByText, getByTestId, fireEvent} from '@testing-library/dom';

test('is dark mode working', () => {
    const darkmodeBtn = getByText('Dark Mode');
    const darkModeOn = getByTestId(button, 'toggle toggled');

    fireEvent.cleck(darkmodeBtn);

    expect(darkModeOn).toBeTruthy();
})
