import Card from './Components/Card';
import Title from './Components/Title';

const App = () => {
  const high= [180]
  return (
    <div>
      <Title />
      <Card
        className="card"
        title={"Heladera"} //puede ir sin llave
        price={50000} 
        stock={true} //puede ir sin el ={true}
        cm={high} 
        
      />
      <Card
              className="card"
              title={"microhondas"} //puede ir sin llave
              price={30000} 
              stock={false} //puede ir sin el ={true}
              cm={high} 
      />
      <Card
      />
      <Card
      />
      <Card
      />
    </div>
  );
};

export default App;
