import React from "react";
import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from "single-spa";

const ParcelComponent = () => (
  <Parcel
    config={() => System.import("@j8s/microfrontend-partial")}
    mountParcel={mountRootParcel}
    wrapWith="section"
    className="app-container"
  />
);

export default ParcelComponent;
