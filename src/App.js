import AddInfo from "./component/AddInfo";
import AddAppointment from "./component/AddAppointment";
import Search from "./component/Search";

function App() {
  return (
    <article>
      <Search />
      <div id="under">
        <AddAppointment />
        <div id="list">
          <ul>
            <AddInfo />
          </ul>
        </div>
      </div>
    </article>
  );
}

export default App;
