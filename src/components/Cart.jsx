export const Cart = (props) => {
  const { selectedItems } = props;
  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginTop: 16,
        padding: 16,
      }}
    >
      <h1>Cart</h1>
      <div>
        {selectedItems.length > 0 ? (
          selectedItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: 16,
              }}
            >
              <p>item no: {index + 1}</p>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    </div>
  );
};
