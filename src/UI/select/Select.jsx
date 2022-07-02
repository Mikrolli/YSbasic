import React from 'react'

const Select = ({ options, defaultValue }) => {
  return (
    <select>
      <option disabled value=''>{defaultValue}</option>
      {options.map((option) => (
        <option value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Select