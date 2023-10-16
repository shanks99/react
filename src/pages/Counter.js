import React, {useState} from "react";

const Counter = () => {
    // num : 기본값 변수. setNumber : 앞에 정의 된 set함수
    const [num, setNumber] = useState(0);

    // num++;
    const increase = () => {
        // 상태 관리를 위하여 num을 사용X. setNumber를 사용 함
        setNumber(num+1); 
    }

    // num--;
    const decrease = () => {
        setNumber(num-1); 
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            {/*  num 변수 출력 */}
            <p>{num}</p>
        </div>
    )
}

export default Counter