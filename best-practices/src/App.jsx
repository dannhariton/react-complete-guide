import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          <Accordion.Item
            id="1"
            className="accordion-item"
            title="We bla bla blas"
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              enim, doloribus dolor vitae alias neque quidem quibusdam? Labore,
              neque nesciunt dolore repudiandae, molestias quaerat velit,
              corrupti optio ullam voluptates at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minima
              consectetur officia maxime, ratione magnam quam molestiae magni
              voluptas, molestias nemo quo iure est vitae assumenda reiciendis?
              Vitae, voluptatibus totam?
            </p>
          </Accordion.Item>
          <Accordion.Item
            id="2"
            className="accordion-item"
            title="Lorem dasdsa. a dsadsad d asd"
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              enim, doloribus dolor vitae alias neque quidem quibusdam? Labore,
              neque nesciunt dolore repudiandae, molestias quaerat velit,
              corrupti optio ullam voluptates at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minima
              consectetur officia maxime, ratione magnam quam molestiae magni
              voluptas, molestias nemo quo iure est vitae assumenda reiciendis?
              Vitae, voluptatibus totam?
            </p>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
