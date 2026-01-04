import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PropertyPage from "../pages/PropertyPage";
import { describe, test, vi, expect } from "vitest";

// Mock the JSON data correctly
vi.mock("../data/properties.json", () => ({
  default: {
    properties: [
      {
        id: "prop1",
        type: "House",
        price: 750000,
        bedrooms: 2,
        postcode: "BR5",
        added: "2022-10-12",
        images: [
          "/images/house1/house1.png",
          "/images/house1/h1indoor1.png",
          "/images/house1/h1indoor2.png",
        ],
        description:
          "A spacious three-bedroom family house in Petts Wood featuring bright living areas, modern kitchen, private garden, and high-quality finishes. Perfect for families.",
        floorPlan: "/images/house1/floorplan1.png",
        mapUrl: "https://www.google.com/maps?q=BR5&output=embed",
      },
    ],
  },
}));

const renderWithRouter = (id) => {
  render(
    <MemoryRouter initialEntries={[`/property/${id}`]}>
      <Routes>
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("PropertyPage", () => {
  test("renders property details correctly", () => {
    renderWithRouter("prop1");

    // Use role to get the heading (avoids duplicate text in description)
    expect(
      screen.getByRole("heading", { level: 2, name: "House" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 3, name: "£750,000" })
    ).toBeInTheDocument();

    expect(screen.getByText("🛏 2 Bedrooms")).toBeInTheDocument();
    expect(screen.getByText("📍 BR5")).toBeInTheDocument();
    expect(screen.getByText("📅 2022-10-12")).toBeInTheDocument();

    // Description
    expect(
      screen.getByText(
        /A spacious three-bedroom family house in Petts Wood featuring bright living areas/i
      )
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Contact Agent/i })).toBeInTheDocument();
  });

  test("thumbnail click updates main image", () => {
    renderWithRouter("prop1");

    const mainImage = screen.getByAltText("Main Property");
    const thumbnail = screen.getByTestId("thumbnail-1");

    expect(mainImage).toHaveAttribute("src", "/images/house1/house1.png");

    fireEvent.click(thumbnail);

    expect(mainImage).toHaveAttribute("src", "/images/house1/h1indoor1.png");
  });

  test("shows 'Property not found' for invalid ID", () => {
    renderWithRouter("invalid-id");

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Property not found"
    );
  });
});
