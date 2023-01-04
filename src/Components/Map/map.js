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
      {productos.map((producto)=> {
        return(
          <Card
          className="card"
          title={producto.title} 
          price={producto.price} 
          stock={producto.stock}        
        />
        )
      })}
    </div>
  );
};

export default App;