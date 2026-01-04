import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";
import SearchPage from "../pages/SearchPage";

test("Search page renders without crashing", () => {
  const { container } = render(
    <MemoryRouter>
      <SearchPage />
    </MemoryRouter>
  );

  expect(container).toBeTruthy();
});
