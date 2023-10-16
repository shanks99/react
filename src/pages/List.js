import React from "react";

// 데이터 출력
const List = () => {
    // 데이터가 생성 되었다고 가정
    const dataArr = [
        {email:'hong@gmail.com', name:'홍길동'},
        {email:'sung@gmail.com', name:'성춘향'},
        {email:'leem@gmail.com', name:'임꺽정'},
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {dataArr.map(user => <Loop loopData={user} />)}
            </tbody>
        </table>
    );
}

// Loop 처리
const Loop = ({loopData}) => {
    return (
        <tr>
            <td>{loopData.name}</td>
            <td>{loopData.email}</td>
        </tr>
    );
}


export default List;