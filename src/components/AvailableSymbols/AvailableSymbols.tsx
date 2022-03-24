import React from "react";
import { useStore } from "../../store";

const AvailableSymbols = () => {
// const { symbols } = useStore()
const symbols = useStore(state => state.symbols);
    return <ul>{symbols.map((symbol, key) => <li key={key}>{symbol.symbol}</li>)}</ul>

};

export default AvailableSymbols