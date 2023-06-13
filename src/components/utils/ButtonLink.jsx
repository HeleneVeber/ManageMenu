/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ButtonLink({ linkTo, value }) {
  return (
    <div>
      <Link to={linkTo} style={{ textDecoration: 'none' }}>
        <InputSubmit type="submit" value={value} />
      </Link>
    </div>
  );
}

const InputSubmit = styled.input`
  width: 230px;
  height: 38px;
  background: #455a64;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  font-family: 'Klee One';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #f2efeb;
`;
