import { useState } from "react";
import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'

function DropDown({toggleSort,sort,onSortChange}){
  if(!toggleSort){
    return null;
}
  return(
    <ul>
      <li onClick={()=> onSortChange('people')}>이름순
      {(sort === 'people') && <BiCheck/>}
      </li>
      <li onClick={()=> onSortChange('date')}>최신순
      {(sort === 'date') && <BiCheck/>}
      </li>
      <li onClick={()=> onSortChange('title')}>숙소명순
      {(sort === 'title') && <BiCheck/>}
      </li>
    </ul>
  )
}


function Search ({query,onQueryChange,sort,onSortChange}){
  const [toggleSort,setToggleSort] = useState(false);
  const [query2,setQuery2] = useState('');
  return(
    <div id="search">
      <div>
       
        <input  type="text" placeholder="검색어 입력" value={query2}
                onChange={(e)=>{setQuery2(e.target.value)}}/>
        <button type="button" className="src"
                onClick={()=>{onQueryChange(query2)}}><BiSearch /></button>

        <button type="button" className="arr"
                onClick={()=> setToggleSort(!toggleSort)}
                >정렬하기<BiCaretDown /></button>
                <DropDown
                toggleSort = {toggleSort}
                sort = {sort}
                onSortChange = {mySort => onSortChange(mySort)}
                />
      </div>
    </div>
  )
}
export default Search;