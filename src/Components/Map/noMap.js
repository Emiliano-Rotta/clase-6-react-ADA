import Card from './Components/Card';
import Title from './Components/Title';

const App = () => {
  const productos= [
  {
    title: "Heladera",
    price: 50000,
    stock: true
  },
  {
    title: "Microhondas",
    price: 30000,
    stock: true
  },
  {
    title: "Lavarropa",
    price: 60000,
    stock: false
  },
]
  return (
    <div>
      <Title />
      <Card
        className="card"
        title={productos[0].title} 
        price={productos[0].price} 
        stock={productos[0].stock}        
      />
      <Card
        className="card"
        title={productos[1].title} 
        price={productos[1].price} 
        stock={productos[1].stock}        
      />
      <Card
        className="card"
        title={productos[2].title} 
        price={productos[2].price} 
        stock={productos[2].stock}        
      />
    </div>
  );
};

export default App;