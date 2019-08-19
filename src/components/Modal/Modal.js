import React from "react";
import classes from "./Modal.module.scss";

const modal = (props) => {
  return (
    <div className={[classes.Modal, classes[props.custClass]].join(' ')}> 
      <button className={[classes.msLink, classes.inv, classes.auto, classes[props.align]].join(' ')} type="button" data-uk-toggle="target: #modal-sec">{props.ButtonText}</button>
      <div id="modal-sec" data-uk-modal>
        <div className={["uk-modal-dialog", classes[props.mWidth]].join(' ')}>
          <div className={classes[props.custClass + "Mwrap"]}>
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <div className={[["uk-modal-header"], classes.ModalHead].join(' ')}>
              <h4>{props.ModalTitle}</h4>
            </div>

            <div className="uk-modal-body">
              {props.ModalContent}
            </div>
          </div> {/* mwrap */}
        </div>
      </div>
    </div>
  );
}
modal.defaultProps = {
  mWidth: 'mWidth'
};
export default modal;