import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function Checkbox({ label, checked, nameId, onChange }) {
    return (
        <CheckboxLabel htmlFor={nameId}>
            <CheckboxInput
                name={nameId}
                id={nameId}
                value={label}
                onChange={onChange}
                checked={checked}
            />
            <LabelText>{label}</LabelText>
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
    border: ${(props) => (props.checked ? '2px solid #8BB2A0' : '2px solid #a6a5a4')};
    box-shadow: ${(props) => (props.checked ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : '')};
    border-radius: 0.15em;

    &:hover {
        background: #8bb2a078;
    }

    &::before {
        content: '';
        width: 1em;
        height: 1em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        background-color: rgba(139, 178, 160, 1);
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
    }
    margin-top: 0.1em;
`;
