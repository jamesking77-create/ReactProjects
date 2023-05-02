import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByOne, decrementByOne, incrementByValue, decrementByValue } from "../../../store/counter";


function CounterComponent(){
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    

    return(
        <div>
            <p>Count:: {count}</p>
            <button onClick={()=> dispatch(incrementByOne())}> increment by one </button> <br /><br />
            <button onClick={()=> dispatch(decrementByOne())}> decrement by one </button> <br /><br />
            <button onClick={()=> dispatch(incrementByValue())}> increment by value </button> <br /><br />
            <button onClick={()=> dispatch(decrementByValue())}> decrement by value </button> <br /><br />
        </div>
    )
}

export default CounterComponent;