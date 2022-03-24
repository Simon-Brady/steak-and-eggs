import create from 'zustand';
import symbols_staging from '../fixtures/symbols_staging.json';

type TSymbol = {
    symbol: string
}

interface IState {
    symbols: TSymbol[],
    selectedSymbol: null | string,
    setSelectedSymbol: (value: string) => void
}

const useStore = create<IState>(set => ({
    symbols: symbols_staging,
    selectedSymbol: null,
    setSelectedSymbol: (value) => set({selectedSymbol: value})
}));


export default useStore;