import { Link, Routes, Route } from "react-router-dom";
import { Intro } from "./pages/Intro/Intro";
import { Counter } from "./pages/Counter/Counter";
import { Converter } from "./pages/Converter/Converter";
import { TodoList } from "./pages/TodoList/TodoList";

export const App = () => {
  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <strong>TESTING PLAYGROUND</strong>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Intro</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/converter">Converter</Link>
          </li>
          <li>
            <Link to="/todo-list">TodoList</Link>
          </li>
        </ul>
      </nav>
      <main className="container" style={{ marginTop: 100 }}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </main>
    </>
  );
};
