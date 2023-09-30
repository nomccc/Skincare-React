import { createSlice } from "@reduxjs/toolkit";

// inisialisasi isi awal dari list product
const initialState = [
  // {
  //   id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
  //   productName: "John",
  //   productCategory: "Doe",
  //   productFreshness: "Doe",
  //   productPrice: "Doe",
  //   image: "Doe",
  //   additionalDescription: "Doe",
  // },
];

// bikin slice disini. slice itu kumpulan fungsi gitu. potongan potongan dari state
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: {
      // state isinya store sebelumnya atau saat ini
      //action data yang dilempar melalui dispatch

      reducer(state, action) {
        state.push(action.payload); //bakal ngepush data yang ditambahkan
      },

    },
    deleteProduct: {
      reducer(state, action){
        const productId = action.payload
        state = state.filter((d) => d.id !== productId)
        // return state
      } 
    }
  },
});

// export const selectAllProduct = (state) => state.products;

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
