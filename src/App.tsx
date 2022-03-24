
import React from "react";
import { hot } from "react-hot-loader/root";
import {SelectedSymbol} from './components/SelectedSymbol'
import { SelectSymbol } from "./components/SelectSymbol";
import styled from '@emotion/styled';
import { AvailableSymbols } from "./components/AvailableSymbols";

const StyledWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const App = () => {
  console.log('look at me go!')
return <StyledWrapper>
<h1>Zustand</h1>
  <SelectedSymbol/>
  <SelectSymbol/>
  <AvailableSymbols/>
</StyledWrapper>
}

export default hot(App);
