import { Link } from "react-router-dom";
import { useDogs } from "./useDogs";

export const IndexPage = () => {
  const { dogs } = useDogs();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>BirthDate</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {dogs.map((dog) => (
          <tr key={`dog-${dog.id}`}>
            <td>{dog.id}</td>
            <td>{dog.name}</td>
            <td>{dog.birthDate}</td>
            <td>
              <Link to={dog.id}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
