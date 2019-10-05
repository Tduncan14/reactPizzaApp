import React from 'react';
import styled from 'styled-components';
import {Title} from '../Styles/title'

const  QuantityInputStyled = styled.input`
 font-sizenputStyled:18px;
 width:24px;
 text-align:center;
 border:none;
 outline:none;

`;

const incrementContainer = styled(Title)`
display:flex;
height:24px;`;

export function QuanityInput({quantity}){



    return (<incrementContainer>
      <div>quantity</div>
      <QuantityInputStyled {...quantity}/>
    </incrementContainer>)
}