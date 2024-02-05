import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";

import DeleteIconModal from "../../assets/DeleteIconModal.png";

import PacientModal from "../Modal/modal.component";
import {
  SearchContainer,
  AddSearch,
  TitlePacientList,
  ModalDeleteContainer,
  InsideContainer,
  Top,
  Middle,
  Bottom,
  DeleteTitle,
  CloseModalIcon,
  ImageModal,
  Text1,
  Text2,
  CancelButton,
  Delete,
  Container,
  NoData,
} from "./pacientTable.styles";

interface Data {
  id: number;
  paciente: string;
  cpf: number;
  nascimento: string;
  email: string;
  cidade: string;
  actions: JSX.Element;
}

interface HeadCell {
  id: keyof Data;
  label: string;
}

type Actions = "actions";

const headCells: HeadCell[] = [
  { id: "paciente", label: "Nome" },
  { id: "cpf", label: "CPF" },
  { id: "nascimento", label: "Data de Nascimento" },
  { id: "email", label: "E-mail" },
  { id: "cidade", label: "Cidade" },
  { id: "actions" as Actions, label: "Ações" },
];

type Order = "asc" | "desc";

interface EnhancedTableProps {
  order: Order;
  orderBy: keyof Data;
  onRequestSort: (property: keyof Data) => void;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property: keyof Data) => {
    onRequestSort(property);
  };

  return (
    <TableHead
      sx={{ borderTop: "1px solid rgba(224, 224, 224, 1)", overflow: "auto" }}
    >
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={{ fontWeight: 600, fontSize: "14px" }}
          >
            {headCell.id !== "actions" ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={() => createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              <span>{headCell.label}</span>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function PacientTable() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("paciente");
  const [searchTerm, setSearchTerm] = useState("");
  const [pacients, setPacients] = useState<Data[]>([]);
  const [filteredRows, setFilteredRows] = useState(pacients);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const storedPacients = localStorage.getItem("pacientData");
    if (storedPacients) {
      setPacients(JSON.parse(storedPacients));
    }
  }, []);

  const DeletePacient = () => {
    // Obtém o índice do paciente a ser excluído
    const indexToDelete = parseInt(
      anchorEl?.getAttribute("data-index") || "0",
      10
    );

    // Faz uma cópia do array de pacientes
    const updatedPacients = [...pacients];

    // Remove o paciente do array
    updatedPacients.splice(indexToDelete, 1);

    // Atualiza o estado com a nova lista de pacientes
    setPacients(updatedPacients);

    // Atualiza o localStorage
    localStorage.setItem("pacientData", JSON.stringify(updatedPacients));

    // Fecha o modal de exclusão
    handleCloseDeleteModal();
  };

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget as unknown as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleOpenDeleteModal = () => setDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setDeleteModalOpen(false);

  useEffect(() => {
    setFilteredRows(
      pacients.filter(
        (row) =>
          row.paciente?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.cpf?.toString().includes(searchTerm) ||
          row.nascimento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.cidade?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, pacients]);

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Container>
      <SearchContainer>
        <TitlePacientList>Listagem de pacientes</TitlePacientList>
        <AddSearch>
          <FormControl sx={{ width: "25ch" }} variant="outlined">
            <OutlinedInput
              id="search-input"
              startAdornment={
                <InputAdornment position="end">
                  <SearchIcon
                    sx={{
                      marginRight: "12px",
                      color: "#136CDC",
                    }}
                  />
                </InputAdornment>
              }
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </FormControl>
          <Button
            variant="outlined"
            sx={{
              width: "14rem",
              textTransform: "capitalize",
              height: "40px",
              background: "#136CDC",
              color: "#fff",
              alignSelf: "center",
              alignContent: "center",
              fontSize: "14px",
              fontWeight: 600,
              transition: "0.8s",

              "&.MuiButtonBase-root:hover": {
                background: "#4F1368",
                border: "1px solid rgba(224, 224, 224, 1)",
              },
            }}
            startIcon={<AddIcon />}
            onClick={handleOpenModal}
          >
            Adicionar paciente
          </Button>
        </AddSearch>
      </SearchContainer>
      <PacientModal open={modalOpen} handleClose={handleCloseModal} />
      <Modal
        open={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalDeleteContainer>
          <InsideContainer>
            <Top>
              <DeleteTitle>Excluir paciente?</DeleteTitle>
              <CloseModalIcon>
                <CloseIcon onClick={handleCloseDeleteModal} />
              </CloseModalIcon>
            </Top>
            <Middle>
              <ImageModal src={DeleteIconModal} />
              <Text1>
                Tem certeza que deseja excluir o paciente selecionado?
              </Text1>
              <Text2>Essa ação não poderá ser desfeita.</Text2>
            </Middle>
            <Bottom>
              <CancelButton onClick={handleCloseDeleteModal}>
                Cancelar
              </CancelButton>
              <Delete
                onClick={() => {
                  DeletePacient();
                  handleClose();
                }}
              >
                Excluir
              </Delete>
            </Bottom>
          </InsideContainer>
        </ModalDeleteContainer>
      </Modal>
      <TableContainer>
        <Table aria-labelledby="tableTitle" size="medium">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          {filteredRows.length === 0 ? (
            <TableBody>
              {" "}
              <NoData />
            </TableBody>
          ) : (
            filteredRows.map((row, index) => (
              <TableBody>
                <TableRow key={row.id}>
                  <TableCell sx={{ color: "#136CDC", fontWeight: "400" }}>
                    {row.paciente}
                  </TableCell>
                  <TableCell>{row.cpf}</TableCell>
                  <TableCell>
                    {new Date(row.nascimento).toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.cidade}</TableCell>
                  <TableCell>
                    <MoreHorizIcon
                      aria-controls={`simple-menu-${index}`}
                      aria-haspopup="true"
                      onClick={(event) => {
                        handleClick(event);
            
                        event.currentTarget.setAttribute(
                          "data-index",
                          index.toString()
                        );
                      }}
                      sx={{ cursor: "pointer" }}
                    />
                    <Menu
                      id={`simple-menu-${index}`}
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Editar</MenuItem>
                      <MenuItem onClick={handleOpenDeleteModal}>
                        Excluir
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))
          )}
        </Table>
      </TableContainer>
    </Container>
  );
}
