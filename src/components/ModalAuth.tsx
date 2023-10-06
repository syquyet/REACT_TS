import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
interface Props{
    show:boolean;
    onClose:Function;

    
}
function ModalAuth(props: Props) {
 
  

  return (
    <>
      {/* <Button variant="primary" >
        Launch demo modal
      </Button> */}

      <Modal show={props.show} onHide={()=>props.onClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng ký</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.onClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>props.onClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAuth;