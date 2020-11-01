import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
                    {props.projects_list_prop.category}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.projects_list_prop.name}</h4>
                <p>{props.projects_list_prop.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const ModalView = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>{props.children}</div>

            <MyVerticallyCenteredModal
                projects_list_prop={props.projects_list_prop}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default ModalView;
