import styled from 'styled-components';
import {Title} from './title';

export const FoodGrid = styled.div `
 display:grid;
 grid-template-columns:1fr 1fr;
 gap:20px;
`

export const FoodLabel = styled(Title)`
position:absolute;
background-color:rgba(255,255,255,0.8);
padding:5px;
border-radius:4px;s
`;

export const Food = styled.div`
height:100px;
background-image:${({img}) => `url(${img});`}
background-size:cover;
background-position:center;
filter:contrast(75%);
padding:10px;
font-size:20px;
border-radius:11px;
margin-top:5px;
transition-property:box-shadow margin-top filter;
transition-duration:.1s;
box-shadow:0px 0px 2px 0px grey;
&:hover{
    cursor:pointer;
    filter:contrast(100%);
    box-shadow:0px 5px 10px 0px grey;
    margin-top:0px;
    margin-bottom:5px;
    
}
`