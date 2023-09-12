import { AddClientModal } from "../AddClientModal";
import { Projects } from "../Projects";
import { Clients } from "../Clients";
import { AddProjectModal } from "../AddProjectModal";

export const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 my-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};
