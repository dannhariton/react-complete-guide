import MenuNavigation from "../components/MenuNavigation";

function Error() {
  return (
    <>
      <MenuNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default Error;
