import React from "react";
import { Breadcrumbs } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { useSelector } from "react-redux";

export const Breadcrumb = () => {
  const { categories } = useSelector((state) => state.items);

  if (categories) {
    return (
      <div className="breadcrumbs_content_breadcrumbs">
        <Breadcrumbs maxItems={6} aria-label="breadcrumb">
          {categories.map((category) => (
            <Link key={category} color="inherit" href={`/items?q=${category}`}>
              {category}
            </Link>
          ))}
        </Breadcrumbs>
      </div>
    );
  } else {
    return <></>;
  }
};
