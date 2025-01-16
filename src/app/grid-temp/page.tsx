import React from "react";

const CustomGrid = () => {
  return (
    <div className="grid grid-cols-12 gap-4 items-start">
      {/* Column with 8 width */}
      <div className="col-span-8 bg-blue-500">
        <p className="p-4 text-white">
          This is the 8-column width section with custom height. This is the
          8-column width section with custom height. This is the 8-column width
          section with custom height. This is the 8-column width section with
          custom height. This is the 8-column width section with custom height.
          This is the 8-column width section with custom height. This is the
          8-column width section with custom height. This is the 8-column width
          section with custom height. This is the 8-column width section with
          custom height. This is the 8-column width section with custom height.
          This is the 8-column width section with custom height. This is the
          8-column width section with custom height. This is the 8-column width
          section with custom height. This is the 8-column width section with
          custom height. This is the 8-column width section with custom height.
        </p>
      </div>

      {/* Column with 4 width */}
      <div className="col-span-4 bg-green-500">
        <p className="p-4 text-white">
          This is the 4-column width section with a smaller height.
        </p>
      </div>
    </div>
  );
};

export default CustomGrid;
