import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            {/* props children is the actual content passed between the modal opening
             and closing tags by the component where the modal is getting used */}
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
      <Fragment>
          {/* I'm using the portal to ensure the HTML is not all over the
           place in the final application. */}
           {/* createPortal needs a second argument. It does not just need to know what to portal but also
            where to portal it. Therefore, select the div in Index html with id='overlays'. 
            Since this is needed in both createPortal, a helper const portalElement is created  */}
          {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
          {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
          )}
      </Fragment>
  );
};

export default Modal;