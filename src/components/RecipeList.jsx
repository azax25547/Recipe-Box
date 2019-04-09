import React from "react";
export default function RecipeList({ get, list, update }) {
  let lists = (
    <li className="list-group-item">
      <div onClick={get}>
        {list}
        <button className="btn btn-danger ml-5" onClick={update}>
          <i className="fa fa-times" />
        </button>
      </div>
    </li>
  );
  return <>{lists}</>;
}
