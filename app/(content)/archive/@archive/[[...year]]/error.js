"use client";

function FilterError({ error }) {
  return (
    <div id="error">
      <p>ERROR</p>
      <p>ERROR</p>
      <p>{error.message}</p>
    </div>
  );
}

export default FilterError;
