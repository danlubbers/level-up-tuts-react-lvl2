import React from "react";
import Portal from "./Portal";
import styled from "styled-components";
import Icon from "./Icon";
import { Cards } from "../elements/Cards";

const Modal = ({ on, toggle, children }) => {
  return (
    <Portal>
      {on && (
        <ModalWrapper>
          <ModalCard>
            <CloseButton onClick={toggle}>
              <Icon name="close" color="orange" />
            </CloseButton>
            <div>{children}</div>
          </ModalCard>
          <Background onClick={toggle} />
        </ModalWrapper>
      )}
    </Portal>
  );
};

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(Cards)`
  min-width: 320px;
  position: relative;
  padding: 15px;
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.3;
`;
export default Modal;
