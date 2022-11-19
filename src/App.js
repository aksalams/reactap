
import './App.css';


function App() {
   const value=""
  return (
      <div className="App">
       
       <h1> CDX Pipeline </h1>
       <h2> CDX Pipeline  to capture every bit of data  from the source. ETL and ELT </h2>
       <h2> Connect | Extract | Transform | Load </h2>
       <label for="text-form"> Input Code  </label>
       <input type="text" value={value} id="text-form" / >
      <addItem></addItem>
    </div>
  );
}

function addItem() {

  return (
    <form>
        <label for="text-form"> Input Code  </label>
      <input type="text" id="text-form" / >
        
    </form>


  );
}

export default App;


