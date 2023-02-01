import {Link} from 'react-router-dom';
function Header (){
  return(
    <header>
      <div className="head">
        <h1><Link to="/">Booking.com</Link></h1>
        <nav>
          <ul>
            <li><Link to="/myHotel" target="_blank">내 숙소등록</Link></li>
            <li><Link to="/signUp" target="_blank">회원가입</Link></li>
            <li><Link to="/signIn" target="_blank">로그인</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;