import React from "react";
import { useStore } from "../../store";

const SelectedSymbol = () => {
    const { selectedSymbol } = useStore();
    return <p>Selected Symbol: {selectedSymbol}</p>
}
export default SelectedSymbol