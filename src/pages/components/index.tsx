import { Link } from "react-router-dom";

const ComponentsPage: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="en-form">Form</Link>
        </li>
        <li>
          <Link to="en-table">Table</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ComponentsPage;
