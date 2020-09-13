import React from 'react';
import { Button as BSButton } from 'react-bootstrap';

import styles from './Button.module.scss';

type Props = {
  /**
   * Text to display within the button.
   */
  text: string;

  /**
   * Fired when the button is clicked.
   */
  onClick: () => void;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <BSButton className={styles.test} onClick={props.onClick}>
      Example Component: {props.text}
    </BSButton>
  );
};
