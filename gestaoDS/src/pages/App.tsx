/* Images */
import gestaoDSLogo from "../assets/logo.png";

/* Components */
import PacientTable from "../components/PacientTable/pacientTable.component";

/*Styled Components*/
import { Container, LogoContainer, TableContainer } from "./App.styles";

/* CSS */
import "../App.css";

function App() {
  return (
    <>
      <Container>
        <LogoContainer
          src={gestaoDSLogo}
          className="logo"
          alt="Gestão DS Logo"
        />
        <TableContainer>
          <PacientTable />
        </TableContainer>
      </Container>
    </>
  );
}

export default App;
