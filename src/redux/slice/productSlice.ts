import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductEntity } from "../../entities/product.entity";

export interface ProductState {
 data: ProductEntity[]
}
const initialState: ProductState = {
 
 data: [],
};
const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
 getProduct: (state:ProductState,action:PayloadAction)=>{
 state.data = action.payload as unknown as ProductEntity[]
 }
  
}});

export const {getProduct}=productSlice.actions
export default productSlice.reducer;