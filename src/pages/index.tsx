import { Link } from "react-router-dom";

const IndexPage: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="examples">Examples</Link>
        </li>
        <li>
          <Link to="components">Components</Link>
        </li>
      </ul>
    </nav>
  );
};

export default IndexPage;
