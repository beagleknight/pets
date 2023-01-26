import { Link } from "react-router-dom";
import { useDestroyDog } from "./useDestroyDog";
import { useDogs } from "./useDogs";

export const IndexPage = () => {
  const { destroy } = useDestroyDog();
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
              <Link to={`${dog.id}/edit`}>Edit</Link>
              {dog.name === "Boira" ? null : (
                <button
                  onClick={(event) => {
                    destroy(dog.id);
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
