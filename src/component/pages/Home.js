import AdStoreTitle from "../AdStoreTitle/AdStoreTitle";
import "../Home/Home.css";
const Home = () => {
  return (
    <>
      <div className="Home--contain">
        <div className="Home--division">
          <h1 className="Home--title">QUIENES SOMOS</h1>
          <p>
            Ana Cecilia nació con el propósito de ayudar a mejorar la
            autopercepción de las personas a partir de la salud y la estética
            capilar.
          </p>
          <p>
            Nuestra misión es obtener la imagen deseada por nuestros clientes,
            fortaleciendo su autoestima y logrando autoafirmación. Nos
            caracterizamos por hacer la diferencia.
          </p>
          <p>
            La empatía de nuestros profesionales selectos permite alcanzar la
            mejor expresión de nuestros usuarios.
          </p>
          <p>
            Abogamos por una percepción disruptiva de la realidad estética,
            donde múltiples percepciones de belleza conviven entre sí. Velamos
            por la inclusión, vetamos los estereotipos, repudiamos la
            discriminación y los juicios. Somos la peluquería más auténtica y
            distintiva del rubro, somos referentes para nuestros competidores, y
            deseamos mantenerlo; para eso fomentamos el compromiso, el
            compañerismo y el respeto por parte de nuestros colaboradores.
          </p>
        </div>
        <div className="Home--division2 home--divisionImg1"></div>
      </div>
      <AdStoreTitle text={"Comunicate con nosotros para nuestros servicios"} />
      <div className="Home--contain">
        <div className="Home--division">
          <h1 className="Home--title">Servicios</h1>
          <div className="Home--desplegableContain">
            <h2 className="Home--desplegableTitle">Corte</h2>
            <div className="Home--desplegable">
              <p>
                Tijeras, máquinas, varios filos, precisión, técnica y sobre todo
                un estilo único hacen fundamental el Corte en Ana Cecilia.
                ¡Nuestro equipo de profesionales podrá asesorarte y hacer lucir
                tu pelo con el look ideal! El pelo es el accesorio más
                importante que tenemos.
              </p>
              <p>
                El Team Ana Cecilia de corte y peinado está en constante
                perfeccionamiento sobre nuevas técnicas y tendencias. No dudes
                en dejarte asesorar. Cada uno de ellos se destaca en poder
                interpretar tu deseo y adaptarlo para un fácil y práctico día a
                día. Nuestro corte es diseñado exclusivamente para vos y tu vida
                cotidiana.
              </p>
            </div>
          </div>
          <div className="Home--desplegableContain">
            <h2 className="Home--desplegableTitle">Coloracion</h2>
            <div className="Home--desplegable">
              <p>
                Nuestra marca cuenta con el mejor equipo de coloristas del país.
                Nos perfeccionamos constantemente para poder abordar todas tus
                necesidades.
              </p>
              <p>
                Te asesoramos de una manera minuciosa para poder aconsejarte
                sobre qué es lo que tu cabello necesita. Cuáles son los pasos
                que llevara tu pelo para llegar al objetivo que deseas. Nuestra
                misión fundamental es mantener tu pelo sano y que luzca intacto,
                garantizamos tu felicidad absoluta.
              </p>
            </div>
          </div>
          <div className="Home--desplegableContain">
            <h2 className="Home--desplegableTitle">Lavado</h2>
            <div className="Home--desplegable">
              <p>
                Lavarte el cabello previo a un corte o peinado y/o luego de una
                coloración: hace al inicio y/o la finalización perfecta de tu
                experiencia en Ana Cecilia
              </p>
              <p>
                Contamos con las mejores manos en nuestro equipo y una amplia
                variedad de marcas Premium que te garantizan un momento único.
              </p>
            </div>
          </div>
          <div className="Home--desplegableContain">
            <h2 className="Home--desplegableTitle">Peinados</h2>
            <div className="Home--desplegable">
              <p>
                Existe una amplia forma de llegar a tu peinado, Brushing,
                planchitas, ondas, y muchos más.
              </p>
            </div>
          </div>
          <div className="Home--desplegableContain">
            <h2 className="Home--desplegableTitle">
              Tratamientos para tú cabello
            </h2>
            <div className="Home--desplegable">
              <p>
                Keratina, Botx, Brillo, Hidratación, Nutrición, Reparación y
                Reconstrucción.
              </p>
            </div>
          </div>
          <div className="Home--desplegableContain">
            <h2 className="Home--desplegableTitle">Barberia</h2>
            <div className="Home--desplegable">
              <p>
                El corte de pelo masculino a máquina o tijera Disfruta
                intensamente de un arreglo de barba con nuestros maestros
                barberos.
              </p>
              <p>
                Afeitado o navaja profesional, aplicación de productos
                especiales de alta calidad.
              </p>
            </div>
          </div>
        </div>
        <div className="Home--division2 home--divisionImg2"></div>
      </div>
    </>
  );
};
export default Home;
