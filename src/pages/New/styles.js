import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-template-areas: content;
    padding: 3.8rem 13.2rem 12.2rem;

    .button-back {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      gap: 1.1rem;
      font-weight: 500;
      font-size: 2.4rem;
      color: #e1e1e6;
      margin-bottom: 2.4rem;
    }
  }

  > header {
    grid-template-areas: header;
    display: flex;
    padding: 0 12.3rem;
    height: 10.4rem;
    background: #00111a;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      gap: 1.1rem;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  > .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 4rem;

    button {
      width: 35.7rem;
      height: 4.8rem;
      background: rgba(255, 255, 255, 0.1);
      border: 0.1rem solid #ffffff;
      border-radius: 0.5rem;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: #ffffff;
    }
  }
`;

export const InputItem = styled.div`
  height: fit-content;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  margin-top: 0.8rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 4rem;
  align-items: end;
  .flex {
    flex: 80%;
  }

  .textarea {
    flex: 100%;
  }

  .category {
    text-transform: lowercase;
  }

  label, span {
    display: inline-block;
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
    font-weight: 400;
    font-size: 1.6rem;
    color: #c4c4cc;
  }
`;

export const ImgPlate = styled.div`
  position: relative;
  width: 30rem;

  input {
    display: none;
  }

  > label {
    width: max-content;
    height: 4.8rem;
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -0.4rem;
    left: 4rem;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: white;
    cursor: pointer;
  }
  `;
