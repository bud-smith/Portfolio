import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function VerticallyCenteredModal(props) {
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
                    <hr />
                    <h4>Technologies</h4>
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
                                    className="svg-size noselect"
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
                <div className="wrapper">
                    {(() => {
                        if (props.projects_list_prop.demo) {
                            return (
                                <Button
                                    href={props.projects_list_prop.demo}
                                    target="_blank"
                                >
                                    Demo
                                </Button>
                            );
                        }
                    })()}

                    {(() => {
                        if (props.projects_list_prop.source) {
                            return (
                                <Button
                                    href={props.projects_list_prop.source}
                                    target="_blank"
                                >
                                    Source
                                </Button>
                            );
                        }
                    })()}
                </div>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            <style jsx>{`
                .svg-size {
                    max-width: 48px;
                    max-height: 48px;
                }

                div {
                    text-align: center;
                    vertical-align: middle;
                }

                p {
                    text-align: justify;
                }

                img {
                    margin: 3px;
                }

                .wrapper {
                    margin: 0px auto 0px 0px;
                }
                ul {
                    padding: 0px 0px 0px 0px;
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
