import './Card.css';

const Card = (props) => {
  console.log('Card', props);
  if (props.stock){
  return (
    <div className="card">
      <h1 className="card--important">OFERTAS:</h1>
      <h2>{props.title}</h2>
      <h2>{props.price}</h2>
      <h2>{props.stock}</h2>
      <h2>{props.cm}</h2>
      <button>comprar</button>
    </div>
  )} else {
  return (
  <h2 className="card">
    no hay stock de: {props.title}
  </h2>
  )}
};

export default Card;