import './App.css';
import AreaChartComponent from './component/AreaChartComponent';
import BarChartComponent from './component/BarChartComponent';
import FunnelChartComponent from './component/FunnelChartComponent';
import LineChartComponent from './component/LineChartComponent';
import PieChartComponent from './component/PieChartComponent';
import RadarChartComponent from './component/RadarChartComponent';
// import Counter from './component/Counter';
import ScatterChartComponent from './component/ScatterChartComponent';

function App() {

  const sampleData = [
    { name: 'Jan', value: 120 },
    { name: 'Feb', value: 500 },
    { name: 'Mar', value: 150 },
    { name: 'Apr', value: 300 },
    { name: 'May', value: 280 },
    { name: 'Jun', value: 400 },
    { name: 'July', value: 100 },
    { name: 'August', value: 300 },
    { name: 'Sept', value: 200 },
  ];

  return (
    <div className="App">
      {/* <Counter /> */}
      <LineChartComponent data={sampleData} />
      <AreaChartComponent data={sampleData} />
      <ScatterChartComponent data={sampleData} />
      <BarChartComponent data={sampleData} />
      <PieChartComponent data={sampleData}  />
      <RadarChartComponent data={sampleData}  />
      <FunnelChartComponent data={sampleData} />

    </div>
  );
}

export default App;
