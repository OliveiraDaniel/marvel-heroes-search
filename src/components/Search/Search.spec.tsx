import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './index';

let setSearchValue: jest.Mock<any, any>;
let onSearchChange: jest.Mock<any, any>;

describe('Search Component', () => {
  beforeEach(() => {
    setSearchValue = jest.fn();
    onSearchChange = jest.fn();
  });

  test('updates input value on change', () => {
    render(<Search placeholder="Procure por heróis" setSearchValue={setSearchValue} onSearchChange={onSearchChange} />);
    const input = screen.getByPlaceholderText('Procure por heróis');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  test('calls setSearchValue with input value longer than 3 characters', () => {
    render(<Search placeholder="Procure por heróis" setSearchValue={setSearchValue} onSearchChange={onSearchChange} />);
    const input = screen.getByPlaceholderText('Procure por heróis');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(setSearchValue).toHaveBeenCalledWith('test');
  });

  test('does not call setSearchValue for input value shorter than 4 characters (excluding empty string)', () => {
    render(<Search placeholder="Procure por heróis" setSearchValue={setSearchValue} onSearchChange={onSearchChange} />);
    const input = screen.getByPlaceholderText('Procure por heróis');
    fireEvent.change(input, { target: { value: 'tes' } });
    expect(setSearchValue).not.toHaveBeenCalled();
  });
});