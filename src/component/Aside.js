import {CiExport} from "react-icons/ci";
import {CiLogout} from "react-icons/ci";
import {CiUndo} from "react-icons/ci";

function Aside(){
  return(
    <aside>
      <ul>
        <li>＾</li>
        <li><CiExport /></li>
        <li><CiLogout /></li>
        <li><CiUndo /></li>
      </ul>
    </aside>
  )
}

export default Aside;