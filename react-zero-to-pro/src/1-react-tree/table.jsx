import React from 'react';
import './table.css'

export default function Table () {
  const columns = [
    { id: 1, label: "Name" },
    { id: 2, label: "Age" },
    { id: 2, label: "Gender" },
  ];
  
  const rows = [
    { name: "Elon Musk", age: 59, gender: "Male" },
    { name: "Jeff Bezos", age: 65, gender: "Male" },
  ];
  return (
    <div className="App">
    <table>
      {columns.map((column) => {
        return (
          <th>
            <td>{column.label}</td>
          </th>
        );
      })}
      {rows.map((row, key) => {
        return (
          <tr key={key}>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.gender}</td>
          </tr>
        );
      })}
    </table>
  </div>
  )
}