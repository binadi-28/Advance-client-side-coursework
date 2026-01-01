import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import { expect, test } from "vitest";

test("filters properties by postcode", () => {
  render(
    <MemoryRouter>
      <SearchPage />
    </MemoryRouter>
  );

  const postcodeInput = screen.getByTestId("postcode-input");
  const searchButton = screen.getByTestId("search-button");

  fireEvent.change(postcodeInput, {
    target: { value: "BR5" },
  });

  fireEvent.click(searchButton);

  expect(screen.getByText(/BR5/i)).toBeInTheDocument();
});
