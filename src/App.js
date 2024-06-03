import React,{useState} from 'react';

const App = () => {
  const [city,setCity]=useState([]);
  const [result,setResult] =useState("");
  const handler=e=>{
    setCity(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response => response.json()).then(data=>{
        const kelvin=data.main.temp;
        const celsius=kelvin-273.15;
        setResult( "Temperature at "+city+"\n"+ Math.round(celsius)+"°C");

      }

      )

    
    console.log(city)
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h1 className='card-title'>Weather App</h1>
            <form onSubmit={submitHandler}>
              <input type='text' name='city' value={city}  onChange={handler}/> <br/><br/>
              <input type='submit' value='Get temperature' style={{backgroundColor:"lightblue"}} />
            </form><br/><br />
          </div>
          <h2>{result}</h2>
        </div>
      </center>
      
    </div>
  );
}

export default App;
