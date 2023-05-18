import React from 'react';

export default function SelectOption({ value, children: description }) {
  return <option value={value}>{description}</option>;
}
