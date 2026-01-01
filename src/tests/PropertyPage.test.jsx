/* eslint-env jest */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { test, expect } from "@jest/globals";
import PropertyPage from "../pages/PropertyPage";

test("property page renders correctly", () => {
  render(
    <MemoryRouter initialEntries={["/property/prop1"]}>
      <Routes>
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/£/)).toBeInTheDocument();
});

test("renders property details and contact button", () => {
  render(
    <MemoryRouter initialEntries={["/property/prop1"]}>
      <Routes>
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Bedrooms/)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Contact Agent/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(/£/);
});

test("clicking a thumbnail updates the main image", async () => {
  render(
    <MemoryRouter initialEntries={["/property/prop1"]}>
      <Routes>
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </MemoryRouter>
  );

  const thumbnails = screen.getAllByAltText(/Thumbnail/i);
  expect(thumbnails.length).toBeGreaterThan(0);

  const mainImage = screen.getByAltText(/Main Property/i);
  const secondThumb = thumbnails[0];
  const user = userEvent.setup();
  await user.click(secondThumb);

  expect(mainImage).toHaveAttribute("src", secondThumb.getAttribute("src"));
});

test("shows not found message for unknown property id", () => {
  render(
    <MemoryRouter initialEntries={["/property/does-not-exist"]}>
      <Routes>
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Property not found/)).toBeInTheDocument();
});
