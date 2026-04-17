import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App routes", () => {
  test("renders home page at /", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /home page/i })).toBeInTheDocument();
  });

  test("renders shop page at /shop", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /shop page/i })).toBeInTheDocument();
  });

  test("renders admin portal page at /admin", () => {
    render(
      <MemoryRouter initialEntries={["/admin"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /admin portal page/i })).toBeInTheDocument();
  });
});