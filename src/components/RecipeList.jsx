import React from "react";
export default function RecipeList({ get, list, getClass }) {
  let lists = (
    <li className="list-group-item">
      <div onClick={get}>{list}</div>
    </li>
  );
  return <>{lists}</>;
}
