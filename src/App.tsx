
import React from "react";
import { hot } from "react-hot-loader/root";
import { Dropdown } from "./components/Dropdown";
import { useStore } from "./store";

type DOMTargetT = {value: string}
type ChangeSymbolT = { target: DOMTargetT}

export const App = () => {
  const { symbols, setSelectedSymbol, selectedSymbol } = useStore()


  const onSymbolChange = (e: ChangeSymbolT) => {
    const { target } = e;
		const { value } = target;
    setSelectedSymbol(value)
  }
return <>
<h1>Zustand</h1>
{selectedSymbol}
  <Dropdown symbols={symbols} onSymbolChange={onSymbolChange}/>
</>
}

export default hot(App);
