import styles from 'styled-components';
import {Title} from './title';

export const FoodGrid = styles.div `
 display:grid;
 grid-template-columns:1fr 1fr;
 gap:20px;
`

export const FoodLabel = styles.div`
position:absolute;
background-color:white;
padding:5px;
`;

export const Food = styles(Title)`
height:100px;
background-image:${({img}) => `url(${img});`}
background-size:cover;
background-position:center;
filter:contrast(75%);
padding:10px;
font-size:20px;
border-radius:11px;
box-shadow:0px 0px 2px 0px grey;
`