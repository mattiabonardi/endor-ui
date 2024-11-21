import { Link } from "react-router-dom";

const EnFormPage: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="base">Base Form</Link>
        </li>
        <li>
          <Link to="initial-values">Form with initial values</Link>
        </li>
      </ul>
    </nav>
  );
};

export default EnFormPage;
