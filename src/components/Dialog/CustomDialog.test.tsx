import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomDialog, { DialogProps } from "@/components/CustomDialog";

// Mock props for testing
const mockActions = [
  { label: "Cancel", onClick: jest.fn(), variant: "secondary" },
  { label: "Confirm", onClick: jest.fn(), variant: "primary" },
];

const defaultProps: DialogProps = {
  type: "basic",
  title: "Test Dialog Title",
  description: "This is a test dialog description.",
  icon: <span data-testid="icon">Icon</span>,
  actions: mockActions,
  children: <div data-testid="child">Child Content</div>,
};

describe("CustomDialog", () => {
  it("renders the dialog with the correct title, description, and actions", () => {
    render(<CustomDialog {...defaultProps} />);

    // Ensure the trigger button is rendered
    expect(screen.getByText("Open Dialog")).toBeInTheDocument();

    // Open the dialog
    fireEvent.click(screen.getByText("Open Dialog"));

    // Check if title, description, and content are rendered
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByTestId("child")).toBeInTheDocument();

    // Check if actions are rendered
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });

  it("opens and closes the dialog when the trigger and close button are clicked", () => {
    render(<CustomDialog {...defaultProps} />);

    // Ensure the dialog is not visible initially
    expect(screen.queryByText(defaultProps.title)).not.toBeInTheDocument();

    // Open the dialog
    fireEvent.click(screen.getByText("Open Dialog"));
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();

    // Close the dialog
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(screen.queryByText(defaultProps.title)).not.toBeInTheDocument();
  });

  it("displays the correct custom content for confirmChanges type", () => {
    const confirmProps: DialogProps = {
      ...defaultProps,
      type: "confirmChanges",
      customContent: <div data-testid="custom-content">Custom Content</div>,
    };

    render(<CustomDialog {...confirmProps} />);

    // Open the dialog
    fireEvent.click(screen.getByText("Open Dialog"));

    // Check if custom content is rendered
    expect(screen.getByTestId("custom-content")).toBeInTheDocument();
  });

  it("calls the correct action when buttons are clicked", () => {
    render(<CustomDialog {...defaultProps} />);

    // Open the dialog
    fireEvent.click(screen.getByText("Open Dialog"));

    // Click "Cancel" button
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockActions[0].onClick).toHaveBeenCalledTimes(1);

    // Click "Confirm" button
    fireEvent.click(screen.getByText("Confirm"));
    expect(mockActions[1].onClick).toHaveBeenCalledTimes(1);
  });
});
