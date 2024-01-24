import React from "react";
import MediumCardVariantA from "./mc-variant-a.component";
import MediumCardVariantB from "./mc-variant-b.component";
import MediumCardVariantC from "./mc-variant-c.component";
import MediumCardVariantD from "./mc-variant-d.component";
import MediumCardVariantE from "./mc-variant-e.component";

const variantComponents = {
  a: MediumCardVariantA,
  b: MediumCardVariantB,
  c: MediumCardVariantC,
  d: MediumCardVariantD,
  e: MediumCardVariantE,
};

const MediumCard = ({ variant, data }) => {
  const variantLowerCase = variant.toLowerCase();
  const SelectedComponent = variantComponents[variantLowerCase];

  if (SelectedComponent) {
    return <SelectedComponent {...data} />;
  }
};

export default MediumCard;
