import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";

const initTab = "home";
function Navbar({ products, carts }) {
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initTab);
  }, []);

  const homeRef = useRef();
  const todoRef = useRef();
  const calculatorRef = useRef();
  const animationRef = useRef();
  const componentsRef = useRef();
  const productsRef = useRef();
  const cartsRef = useRef();

  useEffect(() => {
    if (tab === "calculator") calculatorRef.current.click();
    else if (tab === "animation") animationRef.current.click();
    else if (tab === "components") componentsRef.current.click();
    else if (tab === "products") productsRef.current.click();
    else if (tab === "carts") cartsRef.current.click();
    else if (tab === "todo") todoRef.current.click();
    else homeRef.current.click();
  }, [tab]);

  return (
    <div className="navbar-container">
      <Link to={"/home"}>
        <button
          className={
            "btn " + (tab === "home" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("home")}
          ref={homeRef}
        >
          Home
        </button>
      </Link>
      <Link to={"/todo"}>
        <button
          className={
            "btn " + (tab === "todo" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("todo")}
          ref={todoRef}
        >
          Todo
        </button>
      </Link>
      <Link to={"/calculator"}>
        <button
          className={
            "btn " +
            (tab === "calculator" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("calculator")}
          ref={calculatorRef}
        >
          Calculator
        </button>
      </Link>
      <Link to={"/animation"}>
        <button
          className={
            "btn " +
            (tab === "animation" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("animation")}
          ref={animationRef}
        >
          Animation
        </button>
      </Link>
      <Link to={"/components"}>
        <button
          className={
            "btn " +
            (tab === "components" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("components")}
          ref={componentsRef}
        >
          Component
        </button>
      </Link>
      <Link to={"/products"}>
        <button
          className={
            "btn " +
            (tab === "products" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("products")}
          ref={productsRef}
        >
          Product ({products.length})
        </button>
      </Link>
      <Link to={"/carts"}>
        <button
          style={{ boxShadow: "0 0 0.25rem gray", position: "relative" }}
          className={
            " btn " + (tab === "carts" ? "btn-primary" : "btn-outline-primary")
          }
          onClick={() => setTab("carts")}
          ref={cartsRef}
        >
          Carts
          {carts.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "9+"}
              <span class="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
