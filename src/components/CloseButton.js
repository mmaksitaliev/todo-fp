import React from "react";
import { Button } from "antd";

export default function CloseButton({ onClose, type }) {
  return (
    <Button
      onClick={onClose}
      icon="close"
      size="small"
      shape="round"
      type={type}
    />
  );
}
