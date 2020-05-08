import styled from 'styled-components';

export const Dropdown = styled.div`
  position: absolute;
  margin-top: 5px;
  background: #fff;
  width: 399px;
  border-radius: 3px;
  box-shadow: 0px 7px 8px 1px #175043;

  & ul > li:nth-child(odd) {
    background: #ffeae4;
  }

  & ul > li:last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  & ul > li > button {
    padding: 10px;

    border: none;
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    width: 100%;
    text-align: left;
  }
`;

export const Input = styled.input`
  width: 400px;
  border: 1px solid #575f5c;
  borderradius: 3px;
  padding: 10px;
  font: inherit;
`;
