import React from 'react';
import { AppRoutes } from '../../routes';
import { waitFor, screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../../helpers';
import userEvent from '@testing-library/user-event';

describe('Tests the Login Page component', () => {
  it('The correct header is showed', () => {
    renderWithRouterAndRedux(<AppRoutes />);

    const header = screen.getByText(/top trump/i);
    expect(header).toBeInTheDocument();
  });

  it('The form has the correct fields', () => {
    renderWithRouterAndRedux(<AppRoutes />);

    const name = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('There is a button in the screen, and its disabled', () => {
    renderWithRouterAndRedux(<AppRoutes />);

    const login = screen.getByRole('button', { name: /login/i });

    expect(login).toBeInTheDocument();

    expect(login).toBeDisabled();
  });

  it('The button is disabled when the name is too short', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />);

    const name = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const login = screen.getByRole('button', { name: /login/i });

    await user.type(name, 'ad');
    await user.type(email, 'adrancarnavale@email.com');
    await user.type(password, '123456');

    expect(login).toBeDisabled();
  });

  it('The button is disabled when the email is invalid', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />);

    const name = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const login = screen.getByRole('button', { name: /login/i });

    await user.type(name, 'adran');
    await user.type(email, 'adrancarnavaleemail.com');
    await user.type(password, '123456');

    expect(login).toBeDisabled();
  });

  it('The button is disabled when the password is invalid', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />);

    const name = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const login = screen.getByRole('button', { name: /login/i });

    await user.type(name, 'adran');
    await user.type(email, 'adrancarnavale@email.com');
    await user.type(password, '12345');

    expect(login).toBeDisabled();
  });

  it('The button is enabled when the data is correct', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />);

    const name = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const login = screen.getByRole('button', { name: /login/i });

    await user.type(name, 'adran');
    await user.type(email, 'adran.carnavale@email.com');
    await user.type(password, '12345662716271672617267162716276171');

    expect(login).toBeEnabled();
  });

  it('The button click redirects to the correct route', async () => {
    const user = userEvent.setup();

    const { history } = renderWithRouterAndRedux(<AppRoutes />);

    const userName = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const login = screen.getByRole('button', { name: 'Login' });

    await user.type(userName, 'adran');
    await user.type(email, 'adran.carnavale@gmail.com');
    await user.type(password, '123456');

    expect(userName).toHaveValue('adran');

    expect(login).toBeEnabled();

    await user.click(login);

    expect(history.location.pathname).toBe('/game');
  });
});
