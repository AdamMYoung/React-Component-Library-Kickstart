import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

import styles from './TextBox.module.scss';

type Props = {
  /**
   * Placeholder text displayed before the user enters text.
   */
  placeholder?: string;
};

export const TextBox: React.FC<Props> = (props) => {
  const { placeholder } = props;

  return (
    <InputGroup>
      <FormControl placeholder={placeholder} className={styles.test} />
    </InputGroup>
  );
};
