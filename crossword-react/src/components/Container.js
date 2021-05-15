import React from "react";
import './container.css'

export default function Container() {
  const list = new Array(25).fill("k");
  const square = Math.sqrt(list.length) % 2 == 0 ? Math.sqrt(list.length) : 0;
  return (
    <div>
      <ul>{list.map((value, key) => {
          return <li key={key}>{value}</li>
      })}</ul>
    </div>
  );
}
