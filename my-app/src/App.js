import { useEffect, useState } from 'react';
import './App.css';
import AreaChartComponent from './component/AreaChartComponent';
import BarChartComponent from './component/BarChartComponent';
import FunnelChartComponent from './component/FunnelChartComponent';
import LineChartComponent from './component/LineChartComponent';
import PieChartComponent from './component/PieChartComponent';
import RadarChartComponent from './component/RadarChartComponent';
// import Counter from './component/Counter';
import ScatterChartComponent from './component/ScatterChartComponent';
import socketIo from "socket.io-client";


let socket;

const ENDPOINT = "http://localhost:3500";

function App() {

  // const sampleData = [
  //   { name: 'Jan', value: 120 },
  //   { name: 'Feb', value: 500 },
  //   { name: 'Mar', value: 150 },
  //   { name: 'Apr', value: 300 },
  //   { name: 'May', value: 280 },
  //   { name: 'Jun', value: 400 },
  //   { name: 'July', value: 100 },
  //   { name: 'August', value: 300 },
  //   { name: 'Sept', value: 200 },
  // ];


  const [data, setData] = useState({
    january: '',
    february: '',
    march: '',
    april: '',
    may: '',
    june: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  socket = socketIo(ENDPOINT, { transports: ['websocket'] });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    socket.on('dataUpdate', (updatedData) => {
      setSubmittedData(updatedData);
    });

    return () => {
      socket.off('dataUpdate');
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    
    const sampleData = Object.entries(data).map(([name, value]) => ({
      name,
      value: parseInt(value, 10) || 0 
    }));
    
    setSubmittedData(sampleData);
    socket.emit('updateData', sampleData);

    setData({
      january: '',
      february: '',
      march: '',
      april: '',
      may: '',
      june: ''
    })
  };

  console.log(submittedData);


  return (
    <div className="App">
      {/* <Counter /> */}

     <div>
      <h2>Enter Data for the First 6 Months</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="january">January:</label>
        <input
          type="text"
          id="january"
          name="january"
          value={data.january}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="february">February:</label>
        <input
          type="text"
          id="february"
          name="february"
          value={data.february}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="march">March:</label>
        <input
          type="text"
          id="march"
          name="march"
          value={data.march}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="april">April:</label>
        <input
          type="text"
          id="april"
          name="april"
          value={data.april}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="may">May:</label>
        <input
          type="text"
          id="may"
          name="may"
          value={data.may}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="june">June:</label>
        <input
          type="text"
          id="june"
          name="june"
          value={data.june}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>

      
      {submittedData && <LineChartComponent data={submittedData} />}
      {submittedData && <AreaChartComponent data={submittedData} />}
      {submittedData && <ScatterChartComponent data={submittedData} />}
      {submittedData && <BarChartComponent data={submittedData} />}
      {submittedData && <PieChartComponent data={submittedData} />}
      {submittedData && <RadarChartComponent data={submittedData} />}
      {submittedData && <FunnelChartComponent data={submittedData} />}

    </div>
  );
}

export default App;
