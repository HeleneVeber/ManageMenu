import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Checkbox({ label, checked, nameId, onChange }) {
  return (
    <label htmlFor={nameId}>
      <CheckboxInput
        type="checkbox"
        name={nameId}
        id={nameId}
        value={label}
        onChange={onChange}
        checked={checked}
      />
      {label}
    </label>
  );
}
const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  box-sizing: border-box;
  background: #f2efeb;
  border: 2px solid #8bb2a0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;
