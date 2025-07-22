import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <div>ProductDetail</div>
      <p>{params.id}</p>
      <button>
        <Link to=".." relative="path">
          Back
        </Link>
      </button>
    </>
  );
}

export default ProductDetail;
