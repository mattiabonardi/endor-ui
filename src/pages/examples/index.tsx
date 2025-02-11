import { Link } from "react-router-dom";

const ExamplesPage: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="example1">Example 1</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ExamplesPage;
