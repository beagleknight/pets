import { Link, Outlet } from "react-router-dom";

export const RootPage = () => {
  return (
    <section>
      <header>
        <nav>
          <Link to="dogs">🐶 Dogs</Link>
          <Link to="cats">😺 Cats</Link>
        </nav>
      </header>
      <Outlet />
    </section>
  );
};
