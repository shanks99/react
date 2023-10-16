import React, {useState} from "react";

const InputMulti = () => {
    // useState를 Obj로 관리
    const [inputs,setInputs] = useState({
        name : "",
        email : "",
        tel : "",
    });

    // inputs.name으로 안쓰고 싶다면 아래 선언 후 'name'으로 사용 가능
    // input 안에서도 동일함 {inputs.name} or {name}
    // const { name, email, tel } = inputs;

    const changeEvent = (e) => {
        const value = e.target.value;
        const attrName = e.target.name;

        // inputs[name] = value; 사용 금지. react 상태관리 안됨. react를 통해서 인식 시켜줘야 함
        setInputs({
            // 깊은 복사 사용 '...'
            // 복사 > 분해 해서 새로운 object를 다시 만들어 준다
            // ex) ...inputs == {name:"", email:"", tel:""}
            ...inputs,
            [attrName] : value
        });
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" name="name" value={inputs.name} onChange={changeEvent} />
            </div>
            <div>
                <label>이메일</label>
                <input type="text" name="email" value={inputs.email} onChange={changeEvent} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="text" name="tel" value={inputs.tel} onChange={changeEvent} />
            </div>
            <p>이름 : {inputs.name}</p>
            <p>이메일 : {inputs.email}</p>
            <p>전화번호 : {inputs.tel}</p>
        </div>
    );
}

export default InputMulti;