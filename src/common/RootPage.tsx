import { Link, Outlet } from "react-router-dom";

export const RootPage = () => {
  return (
    <section className="air">
      <header>
        <nav style={{ display: 'flex', gap: 10 }}>
          <Link className="nes-btn is-primary" to="dogs">🐶 Dogs</Link>
          <Link className="nes-btn is-primary" to="cats">😺 Cats</Link>
        </nav>
      </header>
      <Outlet />
    </section>
  );
};
