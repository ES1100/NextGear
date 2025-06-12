import React from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryName } = useParams();

  return (
    <div>
      <h1>Category: {categoryName}</h1>
      {/* Further implementation to fetch and display products for this category */}
    </div>
  );
}

export default CategoryPage;
