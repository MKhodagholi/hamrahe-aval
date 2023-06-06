import { styled } from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-content {
    max-width: 50%;
    // min-height: 300px;
    padding: 30px 40px;
    margin: auto;
    background-color: #fff;
    border-radius: 20px;

    h3 {
      width: max-content;
      margin: 0 auto;
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .modal-content {
      width: 80%;
    }
  }
`;

export default ModalStyled;
