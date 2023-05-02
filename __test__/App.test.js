import { render, screen, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import App from '../src/App.svelte';

describe('App', () => {
  it('adds a teacher when the form is submitted', async () => {
    render(App);

    const nameInput = screen.getByPlaceholderText('Name');
    const addButton = screen.getByText('Add Teacher');

    await fireEvent.input(nameInput, { target: { value: 'Bob' } });
    await fireEvent.click(addButton);

    expect(screen.queryByText('No teachers found')).not.toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('deletes a teacher when the delete button is clicked', async () => {
    render(App);

    const deleteButtons = screen.getAllByText('Delete');

    await fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText('John Smith')).not.toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();

    await fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText('Jane Doe')).not.toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();

    await fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText('Bob')).not.toBeInTheDocument();
    expect(screen.getByText('No teachers found')).toBeInTheDocument();
  });
});
