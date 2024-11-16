import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tabs from "@/components/Tabs";

// Mock props for testing
const mockTabs = [
  { label: "Tab 1", value: "tab1" },
  { label: "Tab 2", value: "tab2" },
  { label: "Tab 3", value: "tab3" },
];

const mockOnValueChange = jest.fn();

describe("Tabs Component", () => {
  it("renders correctly with default props", () => {
    render(
      <Tabs
        tabs={mockTabs}
        defaultValue="tab1"
        onValueChange={mockOnValueChange}
      />
    );

    // Check if all tabs are rendered
    mockTabs.forEach(tab => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });

    // Check if default content is rendered
    expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
  });

  it("renders the correct number of tabs and content", () => {
    render(
      <Tabs
        tabs={mockTabs}
        defaultValue="tab1"
        onValueChange={mockOnValueChange}
      />
    );

    // Ensure the correct number of tab triggers
    expect(screen.getAllByRole("tab")).toHaveLength(mockTabs.length);

    // Ensure the correct content is displayed
    expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
  });

  it("switches tabs when a tab trigger is clicked", () => {
    render(
      <Tabs
        tabs={mockTabs}
        defaultValue="tab1"
        onValueChange={mockOnValueChange}
      />
    );

    // Click on "Tab 2"
    fireEvent.click(screen.getByText("Tab 2"));

    // Ensure the correct tab content is displayed
    expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();

    // Ensure "Content for Tab 1" is no longer displayed
    expect(screen.queryByText("Content for Tab 1")).not.toBeInTheDocument();
  });

  it("calls onValueChange callback when a tab is selected", () => {
    render(
      <Tabs
        tabs={mockTabs}
        defaultValue="tab1"
        onValueChange={mockOnValueChange}
      />
    );

    // Click on "Tab 3"
    fireEvent.click(screen.getByText("Tab 3"));

    // Ensure the callback is called with the correct value
    expect(mockOnValueChange).toHaveBeenCalledWith("tab3");
  });

  it("applies correct size classes to tabs", () => {
    const { rerender } = render(
      <Tabs tabs={mockTabs} defaultValue="tab1" size="small" />
    );

    // Check size classes for "small"
    expect(screen.getByText("Tab 1")).toHaveClass("text-xs px-2 py-1");

    // Rerender with "medium"
    rerender(<Tabs tabs={mockTabs} defaultValue="tab1" size="medium" />);
    expect(screen.getByText("Tab 1")).toHaveClass("text-sm px-4 py-2");

    // Rerender with "large"
    rerender(<Tabs tabs={mockTabs} defaultValue="tab1" size="large" />);
    expect(screen.getByText("Tab 1")).toHaveClass("text-base px-6 py-3");
  });
});
