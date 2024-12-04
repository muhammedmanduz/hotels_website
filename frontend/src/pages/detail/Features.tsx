import React from "react";

const Features = ({ array }: { array: string[] }) => {
  return (
    <div className="mt-5 grid gap-3">
      <h1 className="text-xl font-bold">
        Popüler konaklama yeri imkan ve özellikleri
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {array.map((i, key) => (
          <span
            className="border border-zinc-100 py-1 px-2 rounded-md shadow-sm"
            key={key}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;
