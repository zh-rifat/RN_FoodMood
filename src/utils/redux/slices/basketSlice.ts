import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface item{
  id:number;
  quantity:number;
  price:number;
  imgUrl:string;
  title:string;
}

export interface basketState{
  items:item[],
  restaurant:{
    id:number;
    title:string;
  }|null;
}

const initialState:basketState={
  items:[],
  restaurant:null
}



export const basketSlice=createSlice({
  name:'basket',
  initialState,
  reducers:{
    updateItems:(state,action:PayloadAction<item>)=>{
      const {id,quantity}=action.payload;
      const existingItemIndex=state.items.findIndex(item=>item.id===id);
      if(existingItemIndex!==-1){ //item already exists just update the quantity
        if(quantity===0){ //quantity becomes zero; remove the item
          state.items.splice(existingItemIndex,1);
          return;
        }
        state.items[existingItemIndex].quantity=quantity;
        console.log('quantity updates',id,quantity);
      }
      else if(quantity!==0){ //item doesn't exists; add it
        console.log('new item added',id);
        state.items.push(action.payload);
      }
    },
    updateRestaurant:(state,action)=>{
      state.restaurant=action.payload;
    },
    emptyBasket:(state,action)=>{
      state.items=[];
      state.restaurant=null;
    },
    removeItem:(state,action)=>{
      const itemIndex=state.items.findIndex(item=>item.id===action.payload);
      state.items.splice(itemIndex,1);
    },
  }

})


export const {updateItems,updateRestaurant,emptyBasket,removeItem}=basketSlice.actions;

export const selectBasketItems=(state:any)=>state.basket.items;
export const selectBasketTotalPrice=(state:any)=>(
  state.basket.items.reduce((total:number,item:any)=>(total+=item.price),0)
)
export default basketSlice.reducer;
