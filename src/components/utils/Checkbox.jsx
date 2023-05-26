/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function Checkbox({
  nameId,
  value,
  checked,
  onChange,
  borderColorChecked,
  hoverBackground,
  colorCheck,
  textLineThrough
}) {
  return (
    <CheckboxLabel htmlFor={nameId}>
      <CheckboxInput
        id={nameId}
        name={nameId}
        value={value}
        onChange={onChange}
        checked={checked}
        $borderColorChecked={borderColorChecked}
        $hoverBackground={hoverBackground}
        $colorCheck={colorCheck}
      />
      <LabelText $textLineThrough={textLineThrough}>{value}</LabelText>
    </CheckboxLabel>
  );
}

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  display: grid;
  place-content: center;

  box-sizing: border-box;
  width: 1.5em;
  height: 1.5em;
  background: #f2efeb;
  border-radius: 0.15em;
  box-shadow: ${(props) => (props.checked ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : '')};
  border: ${(props) => props.$borderColorChecked || '2px solid #a6a5a4'};

  &:hover {
    background: ${(props) => props.$hoverBackground || '#a6a5a478'};
  }

  &::before {
    content: '';
    width: 1em;
    height: 1em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: ${(props) => props.$colorCheck || '#a6a5a4'};
    /* background-color: rgba(139, 178, 160, 1); */
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked::before {
    transform: scale(1);
  }
`;
const CheckboxLabel = styled.label`
  display: grid;
  grid-template-columns: 2em auto;
  margin: 0.3em 1em 0 0.5em;
`;
const LabelText = styled.span`
  font-family: 'IBM Plex Sans Thai Looped';
  ${CheckboxInput}:checked + && {
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration-line: ${(props) => (props.$textLineThrough ? 'line-through' : 'none')};
  }
  margin-top: 0.1em;
`;
