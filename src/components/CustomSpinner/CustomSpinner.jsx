import React from "react";
import { Spinner } from "@vkontakte/vkui";
export default function CustomSpinner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}> 
      <Spinner size='medium' style={{ margin: "20px 0" }} />
    </div>
  );
}
