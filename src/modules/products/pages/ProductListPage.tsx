// import { LoginForm } from "@/components/login-form";

import { increaseAction } from "@/store/counter";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const ProductListPage = () => {

 const { count, text } = useSelector((state:RootState)=>state.counter)
 const dispatch =useDispatch()
 dispatch(increaseAction(10))
  return (
    <div className="">
      <h1>Counter: {count}</h1>
      <button onClick={()=>dispatch(increaseAction(10))}> click </button>
      <h2>{text}</h2>
      <h2>sadasddsasdsda</h2>
    </div>
  );
};

export default ProductListPage;
