import * as React from "react";
import * as B from "bloomer";
import { anchorize } from "../../utils";

import "../../../node_modules/animate.css/animate.min.css";
import "./modal.scss";

export const ModalImage = ({ image, close }) => {
  const isOpen = Boolean(image);
  if (!isOpen) {
    return null;
  }
  console.log(image);
  return (
    <B.Modal isActive={isOpen}>
      <B.ModalBackground onClick={close}  className=""/>
      <B.ModalContent className="preview-modal">
        {/* <div className="modal-image-container">*/}
        <img src={image && image.image.url} className="modal-image animated zoomIn"/>
        <B.Subtitle hasTextColor="grey" isSize={6}>
          <a {...anchorize(image && image.image.url)} style={{ fontSize: 14, color: "grey" }}>
            Open original
          </a>
        </B.Subtitle>
        {/* </div>*/}
      </B.ModalContent>
      <B.ModalClose onClick={close}/>
    </B.Modal>
  );
};
