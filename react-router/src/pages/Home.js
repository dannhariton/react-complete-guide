import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function navigateHandler(params) {
    navigate("/products");
  }

  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to="products">products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default Home;
