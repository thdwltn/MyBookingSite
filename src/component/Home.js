import { Link } from "react-router-dom";


function Home (){
  return(
    <>
     <header>
      <div className="head">
        <h1><Link to="/">Booking.com</Link></h1>
        <nav>
          <ul>
            <li><Link to="myHotel" target="_blank">내 숙소등록</Link></li>
            <li><Link to="signUp" target="_blank">회원가입</Link></li>
            <li><Link to="signIn" target="_blank">로그인</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    <div className="home">
      <div className="left">
        <h3>고객님, 어떤 여행을 찾으시나요?</h3>
        <ul>
          <li>
            <span>패키지</span>
            <span>항공</span>
            <span>호텔</span>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="right"><Link to="app" target="_blank">숙박 후기 남기기</Link></div>
    </div>
    </>
  )
}

export default Home;