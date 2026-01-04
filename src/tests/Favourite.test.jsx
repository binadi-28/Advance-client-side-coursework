// src/tests/Favourite.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Favorites from "../components/Favorites";

const mockProperties = [
  {
    id: 1,
    type: "House",
    bedrooms: 3,
    price: 250000,
    images: ["house1.jpg"],
  },
  {
    id: 2,
    type: "Flat",
    bedrooms: 2,
    price: 180000,
    images: ["flat1.jpg"],
  },
];

test("renders empty favourites message when no favourites", () => {
  render(<Favorites favourites={[]} onRemove={() => {}} onClear={() => {}} onDrop={() => {}} />);

  expect(screen.getByText(/drag a property here or click/i)).toBeInTheDocument();
});

test("displays favourite properties", () => {
  render(
    <Favorites
      favourites={mockProperties}
      onRemove={() => {}}
      onClear={() => {}}
      onDrop={() => {}}
    />
  );

  expect(screen.getByText(/House · 3 Beds/i)).toBeInTheDocument();
  expect(screen.getByText(/Flat · 2 Beds/i)).toBeInTheDocument();
  expect(screen.getByText("£250,000")).toBeInTheDocument();
  expect(screen.getByText("£180,000")).toBeInTheDocument();
});

test("calls onRemove when remove button clicked", () => {
  const onRemove = vi.fn();

  render(
    <Favorites
      favourites={mockProperties}
      onRemove={onRemove}
      onClear={() => {}}
      onDrop={() => {}}
    />
  );

  const removeButtons = screen.getAllByText(/remove/i);
  fireEvent.click(removeButtons[0]); // remove first property

  expect(onRemove).toHaveBeenCalledWith(1); // should pass the first property's id
});

test("calls onClear when clear all button clicked", () => {
  const onClear = vi.fn();

  render(
    <Favorites
      favourites={mockProperties}
      onRemove={() => {}}
      onClear={onClear}
      onDrop={() => {}}
    />
  );

  const clearButton = screen.getByText(/clear all/i);
  fireEvent.click(clearButton);

  expect(onClear).toHaveBeenCalled();
});

test("calls onDrop when property dropped", () => {
  const onDrop = vi.fn();
  const propertyToDrop = { id: 3, type: "Bungalow", bedrooms: 4, price: 300000, images: ["bungalow.jpg"] };

  render(<Favorites favourites={[]} onRemove={() => {}} onClear={() => {}} onDrop={onDrop} />);

  const dropContainer = screen.getByText(/drag a property here or click/i).parentElement;

  // simulate drag and drop
  const dataTransfer = {
    getData: vi.fn(() => JSON.stringify(propertyToDrop)),
  };

  fireEvent.drop(dropContainer, { dataTransfer });

  expect(onDrop).toHaveBeenCalledWith(propertyToDrop);
});
