import { Link } from "react-router-dom";
import { useCats } from "./useCats";
import { useDestroyCat } from "./useDestroyCat";

export const IndexPage = () => {
  const { destroy } = useDestroyCat();
  const { cats } = useCats();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cats.map((cat) => (
          <tr key={`cat-${cat.id}`}>
            <td>{cat.id}</td>
            <td>{cat.name}</td>
            <td>
              <Link to={`${cat.id}/edit`}>Edit</Link>
              <Link to={cat.id}>Details</Link>
              {cat.name === "Curri" ? null : (
                <button
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
