import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Why This Matters
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>{props.data.acf.job_title}</h2>
        <p>
          {props.data.acf.past_exp_matter}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-orange-500 hover:bg-green-500' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal
