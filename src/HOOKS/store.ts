import { AppDispatch, RootState } from './../store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


// Типизируем диспатч
export const useCustomDispatch = () => useDispatch<AppDispatch>();

// Типизируем useSelector
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;


