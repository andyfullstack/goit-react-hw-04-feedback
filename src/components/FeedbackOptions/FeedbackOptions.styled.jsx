import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  font-size: 16px;
  background-color: white;
  border: 1px solad gray;
  border-radius: 5px;
  &:hover {
    background-color: #a8263c5f;
    border: inherit;
    font-weight: 700;
    color: #311caa;
    box-shadow: 2px 2px 3px 3px rgba(128, 128, 128, 1);
  }
`;
