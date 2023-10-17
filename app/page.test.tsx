import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import { Search } from "./components/Search";

describe("Components testing", () => {

  it("should render ClearSky logo", async () => {
    render(
      <AppProvider>
        <Header />
      </AppProvider>
    );
    expect(await screen.findByText("ClearSky")).toBeInTheDocument();
  });

  it("should render Search component", async () => {
    render(
      <AppProvider>
        <Search />
      </AppProvider>
    );
    expect(await screen.findByTestId("search_component")).toBeInTheDocument();
  });



});
