import React from "react";
import { Breadcrumbs } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { useSelector } from "react-redux";

export const Breadcrumb = () => {
  const { items } = useSelector((state) => state);

  if (items) {
    return (
      <div className="breadcrumbs_content_breadcrumbs">
        <Breadcrumbs maxItems={6} aria-label="breadcrumb">
          {items.categories.map((category) => (
            <Link key={category} color="inherit" href="/">
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
