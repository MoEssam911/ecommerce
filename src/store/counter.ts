import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from './store';


interface ICounter {
    count: number;
    text:string
}

// const [counter ,setCounter]=useState(1)
const initialState: ICounter ={
count :100,
text:"test counter"
}
export const counterSlice = createSlice({
  name :"counter",
  initialState,
reducers:{/// functions
increaseAction :(state , payloadAction:PayloadAction<number>)=>{
state.count = state.count + payloadAction.payload

}
}
})


export const {increaseAction} = counterSlice.actions
export default counterSlice.reducer
// export const selectCount = (state: RootState) => state.counter