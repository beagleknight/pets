import { Link } from "react-router-dom";
import { useCats } from "./useCats";
import { useDestroyCat } from "./useDestroyCat";

export const IndexPage = () => {
  const { destroy } = useDestroyCat();
  const { cats } = useCats();

  return (
    <table className="nes-table is-bordered is-centered">
      <thead>
        <tr>
          <th style={{width: 20}}>ID</th>
          <th style={{width: 100}}>Name</th>
          <th style={{width: 500}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cats.map((cat) => (
          <tr key={`cat-${cat.id}`}>
            <td>{cat.id}</td>
            <td>{cat.name}</td>
            <td style={{ display: 'flex', gap: 15 }}>
              <Link className="nes-btn is-primary" to={`${cat.id}/edit`}>Edit</Link>
              <Link className="nes-btn is-warning" to={cat.id}>Details</Link>
              {cat.name === "Curri" ? null : (
                <button className="nes-btn is-error"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    destroy(cat);
                  }}
                >
                  Destroy
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
