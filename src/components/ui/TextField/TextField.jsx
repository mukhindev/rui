import { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import TextFieldRoot from './TextFieldRoot';
import TextFieldLabel from './TextFieldLabel';
import TextFieldInput from './TextFieldInput';
import TextFieldError from './TextFieldError';

function TextField(props) {
  const {
    className: mix, label, value, onChange, error, ...other
  } = props;
  const id = useMemo(uuid, []);

  return (
    <TextFieldRoot
      data-semantics={TextField.name}
      className={mix}
    >
      {label && (
        <TextFieldLabel htmlFor={id} error={!!error}>
          {label}
        </TextFieldLabel>
      )}
      <TextFieldInput
        value={value}
        id={id}
        onChange={onChange}
        error={!!error}
        {...other}
      />
      {error && <TextFieldError>{error}</TextFieldError>}
    </TextFieldRoot>
  );
}

export default TextField;
