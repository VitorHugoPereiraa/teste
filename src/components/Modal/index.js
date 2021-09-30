import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { AiOutlineClose } from "react-icons/ai";
import "./style.scss";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 5,
    border: "none",
    width: 535,
  },
}));

export default function CustomModal({
  openModal,
  setOpenModal,
  buttons,
  title,
  btnCenter,
  message,
}) {
  const classes = useStyles();

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <AiOutlineClose
                style={{ cursor: "pointer", fontSize: 20 }}
                onClick={() => {
                  setOpenModal(false);
                }}
              />
            </div>
            <div>
              <h2
                style={{ fontSize: 18, color: "#090A0C" }}
                id="transition-modal-title"
              >
                {title}
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: btnCenter ? "center" : "flex-start",
                width: "65%",
                margin: "20px 0 10px 0",
              }}
            >
              {message ? (
                <div style={{ width: "100%" }}>
                  <p style={{ textAlign: "center", color: "#9B9B9B" }}>
                    {message}
                  </p>
                </div>
              ) : (
                false
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: btnCenter ? "center" : "flex-start",
                width: "50%",
              }}
            >
              {buttons.map((button) => {
                return button;
              })}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
