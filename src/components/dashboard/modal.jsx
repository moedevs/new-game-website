import * as React from "react";
import * as B from "bloomer";


export const ModalImage = ({ image, close }) => {
  if (!image.open) {
    return <div/>;
  }
  return (
    <B.Modal isActive={image.open}>
      <B.ModalBackground onClick={close}/>
      <B.ModalContent className="preview-modal">
        {/*<div className="modal-image-container">*/}
        <img src={image.image.url} className="modal-image"/>
        <B.Subtitle hasTextColor="grey" isSize={6}>
          <a href={image.image.url} style={{ fontSize: 14, color: "grey" }}>
            Open original
          </a>
        </B.Subtitle>
        {/*</div>*/}
      </B.ModalContent>
      <B.ModalClose onClick={close}/>
    </B.Modal>
  );
};
