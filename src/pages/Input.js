import React, {useState} from "react";

const Input = () => {
    const [txtValue,setTextValue] = useState("");

    const changeEvent = (e) => {
        setTextValue(e.target.value);
    }

    return (
        <div>
            {/* value : 텍스트 변수로 선언 */}
            <input type="text" value={txtValue} onChange={changeEvent} />
            <br />
            <p>{txtValue}</p>
        </div>
    );
}

export default Input;