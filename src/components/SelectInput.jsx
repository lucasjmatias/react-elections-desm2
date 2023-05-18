import React from 'react';

export default function SelectInput({
  id,
  description,
  name,
  children,
  checked = false,
  value,
  onChange = i => i,
}) {
  const handleSelectChange = ({ currentTarget }) => {
    const newValue = currentTarget.value;
    onChange(newValue);
  };
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{description}</label>
      <select
        id={id}
        name={name}
        checked={checked}
        value={value}
        onChange={handleSelectChange}
      >
        {children}
      </select>
    </div>
  );
}
