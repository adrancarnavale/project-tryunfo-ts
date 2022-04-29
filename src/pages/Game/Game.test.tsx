import React from 'react';
import { AppRoutes } from '../../routes';
import { screen, waitFor } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../../helpers';
import userEvent from '@testing-library/user-event';

describe('Tests the Login Page component', () => {
  it('The correct header is showed', () => {
    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const header = screen.getByText(/top trump deck creator/i);
    expect(header).toBeInTheDocument();
  });

  it('The form has the correct fields', () => {
    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    expect(name).toBeInTheDocument();
    expect(attribute01).toBeInTheDocument();
    expect(attribute02).toBeInTheDocument();
    expect(attribute03).toBeInTheDocument();
    expect(rarity).toBeInTheDocument();
    expect(trunfo).toBeInTheDocument();
  });

  it('The form has a submit button, and its disabled', () => {
    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const button = screen.getByRole('button', { name: /add card/i });

    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();
  });

  it('The button is disabled when name is too short', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'a');
    await user.type(attribute01, '10');
    await user.type(attribute02, '11');
    await user.type(attribute03, '12');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeDisabled();
  });

  it('The button is disabled when attribute 1 is too big', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'adran');
    await user.type(attribute01, '100');
    await user.type(attribute02, '11');
    await user.type(attribute03, '12');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeDisabled();
  });

  it('The button is disabled when attribute 2 is too big', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'adran');
    await user.type(attribute01, '10');
    await user.type(attribute02, '110');
    await user.type(attribute03, '12');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeDisabled();
  });

  it('The button is disabled when attribute 3 is too big', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'adran');
    await user.type(attribute01, '10');
    await user.type(attribute02, '11');
    await user.type(attribute03, '120');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeDisabled();
  });

  it('The button is disabled when attribute 1 is too low', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'adran');
    await user.type(attribute01, '0');
    await user.type(attribute02, '11');
    await user.type(attribute03, '12');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeDisabled();
  });

  it('The button is disabled when attribute 2 is too low', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'adran');
    await user.type(attribute01, '10');
    await user.type(attribute02, '0');
    await user.type(attribute03, '12');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeDisabled();
  });

  it('The button is disabled when attribute 3 is too low', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'adran');
    await user.type(attribute01, '10');
    await user.type(attribute02, '11');
    await user.type(attribute03, '0');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeDisabled();
  });

  it('The button is enabled when data is correct', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'adran');
    await user.type(attribute01, '10');
    await user.type(attribute02, '11');
    await user.type(attribute03, '12');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeEnabled();
  });

  it('The correct card appears in the DOM', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'adran');
    await user.type(attribute01, '10');
    await user.type(attribute02, '11');
    await user.type(attribute03, '12');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeEnabled();

    await user.click(button);

    const image = await screen.findByTestId('adran');

    expect(image).toBeInTheDocument();
  });

  it('The card is correctly removed', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'adran');
    await user.type(attribute01, '10');
    await user.type(attribute02, '11');
    await user.type(attribute03, '12');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeEnabled();

    await user.click(button);

    const image = await screen.findByTestId('adran');

    const deleteButton = await screen.findByRole('button', { name: /x/i });

    await user.click(deleteButton);

    expect(image).not.toBeInTheDocument();
  });

  it('The trunfo input is removed when a trunfo card is added', async () => {
    const user = userEvent.setup();

    renderWithRouterAndRedux(<AppRoutes />, { route: '/game' });

    const name = screen.getByLabelText(/name/i);
    const attribute01 = screen.getByLabelText(/attribute 01/i);
    const attribute02 = screen.getByLabelText(/attribute 02/i);
    const attribute03 = screen.getByLabelText(/attribute 03/i);
    const rarity = screen.getByLabelText(/rarity/i);
    const trunfo = screen.getByLabelText(/trunfo/i);

    const button = screen.getByRole('button', { name: /add card/i });

    await user.type(name, 'adran');
    await user.type(attribute01, '10');
    await user.type(attribute02, '11');
    await user.type(attribute03, '12');
    await user.selectOptions(rarity, 'rare');
    await user.click(trunfo);

    expect(button).toBeEnabled();

    await user.click(button);

    await waitFor(() => expect(trunfo).not.toBeInTheDocument());
  });
});
