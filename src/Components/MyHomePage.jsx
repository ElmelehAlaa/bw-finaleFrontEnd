import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getClienti, getUsers } from "../redux/actions";

function MyHomePage() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClienti());
    dispatch(getUsers());
  });
  return (
    <div className="my-home-page-container">
      <Container>
        <Row>
          <h3 className="mb-5">Benvenuto Utente</h3>
          <Col xs={12} md={4} lg={4}>
            <div class="card">
              <img
                style={{ height: "214px", objectFit: "contain" }}
                src="https://d2sr9p9v571tfz.cloudfront.net/wp-content/uploads/2018/02/fatturazione-elettronica-150508102903.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Fatture</h5>
                <p class="card-text">Aggiungi o Vedi fatture</p>
                <Button
                  onClick={() => {
                    navigation("/fatture");
                  }}
                >
                  vai alle fatture
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div class="card">
              <img
                style={{ height: "214px", objectFit: "contain" }}
                src="https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170504970/77829658-immagine-a-colori-cartoon-met%C3%A0-corpo-donna-senza-volto-servizio-clienti-con-le-cuffie-illustrazione.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Clienti</h5>
                <p class="card-text">Aggiungi/Elimina Clienti</p>
                <Button
                  onClick={() => {
                    navigation("/clienti");
                  }}
                >
                  vai ai clienti
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div class="card">
              <img
                style={{ height: "214px", objectFit: "contain" }}
                src="https://img.favpng.com/3/20/7/users-group-computer-icons-png-favpng-5EqXtASeuUhR5aezfrBfLJr58.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Gestisci Utenti</h5>
                <p class="card-text">-Elimina -Modifica </p>
                <Button
                  onClick={() => {
                    navigation("/users");
                  }}
                >
                  Gestisci
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MyHomePage;
