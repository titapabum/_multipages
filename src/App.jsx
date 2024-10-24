import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Layout from "./layouts/Layout/Layout";
import Calculator from "./pages/Calculator/Calculator";
import Animation from "./pages/Animation/Animation";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";
import Login from "./pages/Login/Login"; 
import Components from "./pages/Component/Components"; 
import "./App.css";
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { fetchProducts } from "./data/products";

// HashRouter, BrowserRouter, MemoryRouter
// localhost:5173/#/<paths>    // HashRouter *compatable old
// localhost:5173/<paths>      // BrowserRouter *production
// localhost:5173              // MemoryRouter

const intTab = "home";

function App() {
    const [token, setToken] = useState("");
    const [role, setRole] = useState("");

    const [carts, setCarts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(fetchProducts());
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    if (token === "") {
        return <Login setToken={setToken} />;
    } else {
        return (
            <div className="app-container">
                <HashRouter>
                    <Routes>
                        <Route element={<Layout products={products} carts={carts} />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/calculator" element={<Calculator />} />
                            <Route path="/todo" element={<Todo />} />
                            <Route path="/animation" element={<Animation />} />
                            <Route path="/components" element={<Components />} />
                            <Route
                                path="/products"
                                element={
                                    <Products
                                        products={products}
                                        carts={carts}
                                        setCarts={setCarts}
                                    />
                                }
                            />
                            <Route
                                path="/carts"
                                element={<Carts carts={carts} setCarts={setCarts} />}
                            />
                        </Route>
                    </Routes>
                </HashRouter>
            </div>
        );
    }
}

export default App;
