import React , {useState} from 'react';
import { Button , Modal} from 'react-bootstrap';

function  AddStudent ()
    {
        const [show , setShow] = useState(false);

        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);

return (
<Modal show = {show} onHide={handleClose}>
<Modal.Header closeButton>
    <Modal.Title>Add new student</Modal.Title>
</Modal.Header>

    <Modal.Body>
    <h1>OYOOO</h1>
    </Modal.Body>

<Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary" onClick={handleClose}>Save changes</Button>
</Modal.Footer>
</Modal>
)
    }

export default AddStudent;