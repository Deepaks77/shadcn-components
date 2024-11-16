"use client";
import CustomDialog from "@/components/Dialog";
import React from "react";

function DialogDemo() {
  return (
    <div>
      <div>Basic:</div>

      <CustomDialog
        type="basic"
        title="BASIC DIALOG TITLE"
        description="A dialog is a type of modal window that appears in front of content to provide critical information, or prompt for a decision to be made."
        actions={[
          {
            label: "Action 2",
            onClick: () => console.log("Action 2 clicked"),
            variant: "secondary",
          },
          {
            label: "Action 1",
            onClick: () => console.log("Action 1 clicked"),
            variant: "primary",
          },
        ]}
      />

      <div>Missing Info</div>
      <div>
        <CustomDialog
          type="missingInfo"
          title="Missing Information"
          description="Some mandatory information is missing from your reservation. Please enter missing mandatory fields."
          icon={<span className="text-yellow-500">⚠️</span>}
          actions={[
            {
              label: "Understood",
              onClick: () => console.log("Understood clicked"),
              variant: "primary",
            },
          ]}
        />
      </div>

      <div>Cancel Trip</div>

      <div>
        <CustomDialog
          type="cancelTrip"
          title="Cancel Trip?"
          description="This action will stop the trip from taking place on [Date/Time]. Who is requesting this change?"
          actions={[
            {
              label: "Keep Trip",
              onClick: () => console.log("Keep Trip clicked"),
              variant: "secondary",
            },
            {
              label: "Cancel Trip",
              onClick: () => console.log("Cancel Trip clicked"),
              variant: "primary",
            },
          ]}
          // eslint-disable-next-line react/no-children-prop
          children={
            <div className="mt-4 space-y-2">
              <label>
                <input type="radio" name="requestor" value="arranger" />{" "}
                Arranger Johnsen, Lara
              </label>
              <label>
                <input type="radio" name="requestor" value="passenger" />{" "}
                Passenger Ford, Sophia
              </label>
              <label>
                <input type="radio" name="requestor" value="other" /> Other
              </label>
            </div>
          }
        />
      </div>

      <div>Confirm Changes</div>
      <div>
        <CustomDialog
          type="confirmChanges"
          title="Confirm Changes"
          description="Your changes will add $48.00 to your estimated total. The new estimated total cost is $540.00."
          customContent={
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b pb-2">Account</th>
                  <th className="border-b pb-2">Before</th>
                  <th className="border-b pb-2">After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account</td>
                  <td>Blackstone Business</td>
                  <td>Blackstone GT</td>
                </tr>
                <tr>
                  <td>Account Discount</td>
                  <td>0%</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Estimated Total Cost</td>
                  <td>$600.00</td>
                  <td>$540.00</td>
                </tr>
              </tbody>
            </table>
          }
          actions={[
            {
              label: "Cancel",
              onClick: () => console.log("Cancel clicked"),
              variant: "secondary",
            },
            {
              label: "Confirm",
              onClick: () => console.log("Confirm clicked"),
              variant: "primary",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default DialogDemo;
