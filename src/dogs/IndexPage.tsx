import { Link } from "react-router-dom";
import { useDestroyDog } from "./useDestroyDog";
import { useDogs } from "./useDogs";

export const IndexPage = () => {
  const { destroy } = useDestroyDog();
  const { dogs } = useDogs();

  return (
    <table className="nes-table is-bordered is-centered">
      <thead>
        <tr>
          <th style={{width: 20}}>ID</th>
          <th style={{width: 100}}>Name</th>
          <th style={{width: 200}}>BirthDate</th>
          <th style={{width: 500}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {dogs.map((dog) => (
          <tr key={`dog-${dog.id}`}>
            <td>{dog.id}</td>
            <td>{dog.name}</td>
            <td>{dog.birthDate}</td>
            <td style={{ display: 'flex', gap: 15 }}>
              <Link className="nes-btn is-primary is-disabled" to={`${dog.id}/edit`} onClick={(event) => { event.preventDefault() }}>Edit</Link>
              <Link className="nes-btn is-warning" to={dog.id}>Details</Link>
              {dog.name === "Boira" ? null : (
                <button className="nes-btn is-error"
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
