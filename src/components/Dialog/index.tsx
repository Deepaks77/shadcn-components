/**
 * CustomDialog Component
 *
 * A reusable dialog component that supports various dialog types and configurable actions.
 * This component can be used to show modal dialogs with a title, description, optional icon,
 * custom content, and configurable actions (buttons).
 *
 * @component
 * @example
 * // Basic usage example
 * <CustomDialog
 *   type="basic"
 *   title="Dialog Title"
 *   description="This is a dialog description."
 *   actions={[
 *     { label: "Cancel", onClick: () => console.log("Cancelled"), variant: "secondary" },
 *     { label: "Confirm", onClick: () => console.log("Confirmed"), variant: "primary" },
 *   ]}
 * />
 *
 * **Props:**
 *
 * - `type`: (Required) The type of the dialog, can be one of:
 *   - `"basic"`: A simple dialog.
 *   - `"missingInfo"`: A dialog indicating missing information.
 *   - `"cancelTrip"`: A dialog for confirming cancellation of a trip.
 *   - `"confirmChanges"`: A dialog for confirming changes, with custom content.
 * - `title`: (Required) The title of the dialog.
 * - `description`: (Required) The description of the dialog.
 * - `icon`: (Optional) An icon to display at the top of the dialog.
 * - `actions`: (Required) An array of action objects. Each action has:
 *   - `label`: The text label for the button.
 *   - `onClick`: The function to be called when the button is clicked.
 *   - `variant`: (Optional) Defines the button style, either `"primary"` or `"secondary"`. Default is `"secondary"`.
 * - `children`: (Optional) Extra content to display within the dialog.
 * - `customContent`: (Optional) Custom content for advanced dialog types like `"confirmChanges"`.
 *
 * **Usage Notes:**
 * - The `DialogTrigger` component is used to open the dialog when clicked.
 * - The dialog's layout, size, and style are customizable.
 * - The `cn` utility is used to conditionally merge classes for button styles.
 *
 * @see https://www.tailwindcss.com/docs
 */

/**
 * <Autocomplete>
 * @author Deepak Sindhwani <deepak@parcel.money>
 * @description Creates a Generic Autocomplete  dropdown with search suggestion.
 * @link https://www.figma.com/file/pCDc3mdQ3yQRmptQN415Zf/Parcel-V2-Components?node-id=1030%3A4008
 * @comments - this is a general component to search and select single string with dropdown.
 
 * @param   {<string>} label <label for Autocomplete [optional parameter]>
 * @param   {<string>} name <html name for Autocomplete [optional]>
 * @param   {<string>} value <state variable to behave component like controlled-component [string]>
 * @param   {<JSX.Element>} startIcon <Sets the start icon as prefix in AutoComplete component [optional] - can be passed as filter icon>
 * @param   {<string>} helperText <Sets the helper text for label [optional] >
 * @param   {<string>} type <different variant of AutoComplete available as per design "primary" | "secondary" | "error" >
 * @param   {<string>} size <size of AutoComplete , "large"|"regular">
 * @param   {<string>} infoText <this is used to display any extra info and error just below the AutocompleteSearchToken component[optional] >
 * @param   {<boolean>} disabled <disabled flag for AutoComplete component>
 * @param   {<[menuoptions]>} options <options that can be passed for dropdown , see menuoptions types for more info>
 * @param   {<boolean>} seperator <creates a seperator b/w MenuItems>
 * @param   {<string>} placeholder <placeholder text when nothing has been selected in AutocompleteSearchToken , default value = "Select Token">
 * @param   {<Func>} onChange <its a callback function that returns two argument , event & newValue , newValue = "selected object">
 * @return  {<JSX.Element>}  <AutoComplete comp will be returned according to the props provided>
 */

import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils"; // Utility for conditional class merging if needed.

interface DialogAction {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export type DialogProps = {
  type: "basic" | "missingInfo" | "cancelTrip" | "confirmChanges";
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional icon
  actions: DialogAction[]; // Button actions
  children?: React.ReactNode; // Content for advanced dialogs
  customContent?: React.ReactNode; // For custom case rendering like tables
};

const CustomDialog: React.FC<DialogProps> = ({
  type,
  title,
  description,
  icon,
  actions,
  children,
  customContent,
}) => {
  return (
    <Dialog>
      <DialogTrigger className="btn btn-primary">Open Dialog</DialogTrigger>
      <DialogContent
        className={
          "w-[640px] max-w-[640px] p-[40px_24px_28px_24px] !rounded bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)]"
        }
      >
        <DialogHeader className="flex flex-col gap-6">
          {icon && <div className="mb-4">{icon}</div>}
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-gray-600">
            {description}
          </DialogDescription>
        </DialogHeader>
        {type === "confirmChanges" && customContent}
        {children && <div className="mt-4">{children}</div>}
        <div className="flex justify-end mt-6 gap-4">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={cn(
                "px-4 py-2 rounded-md font-medium",
                action.variant === "primary"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              )}
            >
              {action.label}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
