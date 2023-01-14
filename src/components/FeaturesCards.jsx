import React from "react";

export default function FeaturesCards({
  cardTitle,
  cardDescription,
  children,
}) {
  return (
    <div>
      <div className="feature-card w-2/4">
        {children}
        <h3>{cardTitle}</h3>
        <p>{cardDescription}</p>
      </div>
    </div>
  );
}
