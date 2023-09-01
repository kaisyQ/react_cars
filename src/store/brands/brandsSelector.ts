import type { RootState } from "../store";

export const getBrandNames = (state: RootState) => state.brands.brandNames;
