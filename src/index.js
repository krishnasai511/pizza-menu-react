import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  const { pizzaObj } = props;

  //   if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
      </div>
      <span>
        <p>{pizzaObj.soldOut ? "Sold Out!" : pizzaObj.price}</p>
      </span>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>My Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas && (
        <>
          <p>Authentic Italian cuisine</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 9;
  const closeHour = 16;
  const isOpen = hour >= openHour && hour < closeHour;

  if (!isOpen) {
    return <p>We're Closed!!</p>;
  }
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're Open until {closeHour}:00. Come visit us or Order online!{" "}
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}
//react v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//before 18
// React.render(<App />, document.getElementById("root"));
