import styles from 'styled-components';
import {pizzaRed} from './colors';

export const StyleNavbar = styles.div `
  background-color:${pizzaRed};
  padding:10px;
  position:fixed;
  width:100%;
  z-index:2;
`;