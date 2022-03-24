import create from 'zustand';
import symbols_staging from '../fixtures/symbols_staging.json';

interface ISymbols {
    symbol: string
}

interface IState {
    symbols: ISymbols[],
    selectedSymbol: null | string,
    setSelectedSymbol: (value: string) => void
}

const useStore = create<IState>(set => ({
    symbols: symbols_staging,
    selectedSymbol: null,
    setSelectedSymbol: (value) => set({selectedSymbol: value})
}));


export default useStore;