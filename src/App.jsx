// props
import Card from "./components/Card";
import { Cart } from "./components/Cart";
import H1 from "./components/H1";
import { useState } from "react";
// react is unidirectional
// data -> parent to child

// 6 - boxes - same design

// create one box
// reuse it multiple times with different data

const App = () => {
  const name = "John";
  const age = 30;
  const [selectedItems, setSelectedItems] = useState([]);
  const services = [
    {
      id: 1,
      title: "Web Development",
      price: 1000,
    },
    {
      id: 2,
      title: "Graphic Design",
      price: 800,
    },
  ];

  const addToCart = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedItems = selectedItems.filter(
      (selectedItem) => selectedItem.id !== item.id,
    );
    setSelectedItems(updatedItems);
  };

  return (
    <div>
      <H1 nameValue={name} age={age} />
      {services.map((service) => (
        <Card
          key={service.id}
          addToCart={addToCart}
          service={service}
          selectedItems={selectedItems}
          removeFromCart={removeFromCart}
        />
      ))}
      <Cart selectedItems={selectedItems} />
    </div>
  );
};

export default App;
