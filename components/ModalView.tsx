import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function VerticallyCenteredModal(props) {
    const renderTooltip = (props) => (
        <Tooltip {...props}>Tooltip for the register button</Tooltip>
    );

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
                <div>
                    <h4>{props.projects_list_prop.name}</h4>
                    <p>{props.projects_list_prop.description}</p>
                </div>
                <div>
                    <ul>
                        {props.projects_list_prop.technologies.map((item) => (
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id={item}>
                                        <h4>{item}</h4>
                                    </Tooltip>
                                }
                            >
                                <img
                                    className="svg-size"
                                    src={
                                        "../images/technologies/" +
                                        item +
                                        ".svg"
                                    }
                                />
                            </OverlayTrigger>
                        ))}
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            <style jsx>{`
                .svg-size {
                    max-width: 48px;
                    max-height: 48px;
                }

                div {
                    display: table-cell;
                    text-align: center;
                    vertical-align: middle;
                    width: 65%;
                    padding: 1rem;
                }

                p {
                    text-align: justify;
                }

                img {
                    margin: 3px;
                }
            `}</style>
        </Modal>
    );
}

const ModalView = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>{props.children}</div>

            <VerticallyCenteredModal
                projects_list_prop={props.projects_list_prop}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default ModalView;
