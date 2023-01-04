import './Card.css';

const Card = (props) => {
  console.log('Card', props);
  return (
    
    <div className="card">
      <h1 className="card--important">OFERTAS:</h1>
      <h2>{props.title}</h2>
      <h2>{props.price}</h2>
      <h2>{props.stock}</h2>
      <h2>{props.cm}</h2>
      <button>comprar</button>
    </div>
  );
};

export default Card;
