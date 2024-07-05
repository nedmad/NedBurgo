import CardapioBody from "./components.body/CardapioBody";

export default function Body() {
  return (
    <>
      <section className="body-section">
        <section className="body-options">
          <div className="apresentacion apresent-1">
            <img
              src="https://media.istockphoto.com/id/1398630614/pt/foto/bacon-cheeseburger-on-a-toasted-bun.jpg?s=2048x2048&w=is&k=20&c=oPzKlXTRyoTCsmukHHzS2SiO61iGwDvBEP3moKz2ILs="
              alt=""
            />
          </div>
          <div className="apresentacion apresent-2">
            <img
              src="https://agorarn.com.br/files/uploads/2021/11/refrigerante-930x524.jpg"
              alt=""
            />
          </div>
          <div className="apresentacion apresent-3">
            <img
              src="https://www.assai.com.br/sites/default/files/styles/blog_destaque/public/blog/batata_frita_com_ketchup_-_tipos_de_batata_frita_no_assai_atacadista.jpg?itok=O9Y1YSNJ"
              alt=""
            />
          </div>
        </section>

        <section>
          <section className="boasVindas">
            <section className="filter">
              <div className="info-filter">
                <h1>Seja bem vindo!</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </section>
          </section>
        </section>

        <section className="body-cardapio">
          <section className="apresent-cardapio-body">
            <strong>
              <h5>Aprecie sem moderacao!</h5>
              <span>
                Cardapio 
              </span>
            </strong>
          </section>
          <CardapioBody />
        </section>
      </section>
    </>
  );
}
