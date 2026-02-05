const Card = (props) => {
  const { service, addToCart, selectedItems, removeFromCart } = props;
  const isSelected = selectedItems.some((item) => item.id === service.id);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginTop: 16,
        padding: 16,
        borderRadius: 8,
      }}
    >
      <h2>{service.title}</h2>
      <p>{service.price}</p>
      {isSelected ? (
        <button onClick={() => removeFromCart(service)}>Remove</button>
      ) : (
        <button onClick={() => addToCart(service)}>Buy Now</button>
      )}
    </div>
  );
};

export default Card;
