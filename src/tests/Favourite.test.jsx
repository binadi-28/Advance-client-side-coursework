import { render, screen, fireEvent } from "@testing-library/react";
import { it, expect } from "@jest/globals";
import FavouriteList from "../components/FavouriteList";

it("add favourite only once", () => {
  render(<FavouriteList />);
  fireEvent.click(screen.getByText(/add/i));
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getAllByText(/House/i).length).toBe(1);
});

it("remove favourite", () => {
  render(<FavouriteList />);
  fireEvent.click(screen.getByText(/remove/i));
  expect(screen.queryByText(/House/i)).not.toBeInTheDocument();
});

it("clear favourites", () => {
  render(<FavouriteList />);
  fireEvent.click(screen.getByText(/clear/i));
  expect(screen.queryByText(/House/i)).not.toBeInTheDocument();
});
