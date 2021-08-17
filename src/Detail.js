import React, {useEffect, useState}  from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components";
import './Dtail.css';





// 예전에 사용하던 방법이다.
class Detail2 extends React.Component {

  // 컨포넌트가 보일때 
  componentDidMount(){

  }

  //컨포넌트가 안보일때 
  componentWillUnmount(){

  }

}



// styled-components
let 박스 = styled.div`
  padding: 20 px;  
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상 } 
`;


function Detail(props){

  let [alert , alert변경] = useState(true);
  let [input , setinput] = useState("")


  //이건 컨포넌트가 보일때 , 업데이트가 될때 실행되는 함수이다. 
useEffect(()=>{
  const a = setTimeout(()=>{ alert변경(false) },2000)
  console.log(123)
  return ()=> {
    clearTimeout(a)
  }
},[]); // [alret , input 등등 비어있으면 딱 한번만 실행 ]이게 변경 될때 마다 




let { id } = useParams(); 
let history = useHistory();

let item = props.shoes.find( (i)=> {
  return i.id == id; 
})



  return (
    
    <div className="container">
        <박스>
          <제목 className="red"  >상세페이지</제목>
        </박스>
            { input}
          <input onChange={(e)=> setinput(e.target.value)} />

            { alert === true
            ? (<div className="my-alert"> 
              <p>재고가 얼마 안남았숑</p>
              </div>)
            : null
             }
          

            <div className="row">
              <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${item.id+1}.jpg`} width="100%" />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">{item.title}</h4>
                <p>{item.content}</p>
                <p>{item.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    history.push('/');
                }}>뒤로가기</button> 
              </div>
            </div>
      </div> 
  )
}

export default Detail;