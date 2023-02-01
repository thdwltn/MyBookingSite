import {CiExport} from "react-icons/ci";
import {CiLogout} from "react-icons/ci";
import {CiUndo} from "react-icons/ci";
import { Link } from "react-router-dom";

function Aside(){
  return(
    <aside>
      <ul>
        <li><Link to="/sharing"><CiExport /></Link></li>
        <li><Link to="/"><CiLogout /></Link></li>
        <li><Link to="/app"><CiUndo /></Link></li>
      </ul>
    </aside>
  )
}

export default Aside;