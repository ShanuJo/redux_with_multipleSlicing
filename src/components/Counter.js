import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increasetHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggelCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button
          onClick={() => {
            dispatch(counterActions.reset());
          }}
        >
          Reset
        </button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increasetHandler}>Increase by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
