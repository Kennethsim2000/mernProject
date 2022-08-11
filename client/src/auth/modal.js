import {Modal ,Button } from "react-bootstrap";
function CenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Congratulations!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Welcome to Travellia!</h4>
          <p>
            Your account has been successfully created. 
          </p>
          <Button href='/login' >Login</Button>
        </Modal.Body>
       
        
      </Modal>
    );
  }

  export default CenteredModal;