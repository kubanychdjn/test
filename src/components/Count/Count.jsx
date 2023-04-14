import React, {useState} from "react";
import style from './count.module.scss'

const Count = () => {
  const [count, setCount] = useState(1);

  return (
    <div className={style.intro}>

      <h1 >{count}</h1>

      <button onClick={() => setCount(count + 1)}>+1</button>

      <button onClick={() => setCount(count - 1)}>-1</button>


    </div>
  );
};

export default Count;
