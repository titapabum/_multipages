import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Carts.css";

function Carts({ carts, setCarts }) {
  const handleRemove = (id) => {
    setCarts(carts.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <div className="carts-container">
      <div className="carts-items-container">
        {carts.map((cartItem) => (
          <Card style={{ width: "18rem" }} key={cartItem.id}>
            <Card.Img variant="top" src={cartItem.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{cartItem.title}</Card.Title>
              <Card.Text>
                <b>${cartItem.price.toFixed(2)}</b>
              </Card.Text>
              <Button
                variant="outline-danger"
                onClick={() => handleRemove(cartItem.id)}
              >
                Remove from Carts
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <h4>
        Items: {carts.length} items - Total Price: $
        {carts
          .reduce((total, cartItem) => total + cartItem.price, 0)
          .toFixed(2)}
      </h4>
      <button>Checkout</button>
    </div>
  );
}

export default Carts;
