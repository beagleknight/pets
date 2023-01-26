import { Link } from "react-router-dom";
import { useCats } from "./useCats";

export const IndexPage = () => {
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
              <Link to={cat.id}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
