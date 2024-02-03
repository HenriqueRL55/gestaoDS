import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PacientModal from "../Modal/modal.component";
import {
  SearchContainer,
  AddSearch,
  TitlePacientList,
} from "./pacientTable.styles";

interface Data {
  id: number;
  name: string;
  cpf: number;
  birthDate: string;
  email: string;
  city: string;
  actions: JSX.Element;
}

interface HeadCell {
  id: keyof Data;
  label: string;
}

type Actions = "actions";

function createData(
  id: number,
  name: string,
  cpf: number,
  birthDate: string,
  email: string,
  city: string,
  actions: JSX.Element
): Data {
  return { id, name, cpf, birthDate, email, city, actions };
}

const rows: Data[] = [
  createData(
    1,
    "João",
    12345678901,
    "01/01/1990",
    "cupcake@example.com",
    "City A",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    2,
    "Pedro",
    23456789012,
    "02/02/1991",
    "donut@example.com",
    "City B",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    1,
    "João",
    12345678901,
    "01/01/1990",
    "cupcake@example.com",
    "City A",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    2,
    "Pedro",
    23456789012,
    "02/02/1991",
    "donut@example.com",
    "City B",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    1,
    "João",
    12345678901,
    "01/01/1990",
    "cupcake@example.com",
    "City A",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    2,
    "Pedro",
    23456789012,
    "02/02/1991",
    "donut@example.com",
    "City B",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    1,
    "João",
    12345678901,
    "01/01/1990",
    "cupcake@example.com",
    "City A",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    2,
    "Pedro",
    23456789012,
    "02/02/1991",
    "donut@example.com",
    "City B",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    1,
    "João",
    12345678901,
    "01/01/1990",
    "cupcake@example.com",
    "City A",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    2,
    "Pedro",
    23456789012,
    "02/02/1991",
    "donut@example.com",
    "City B",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    1,
    "João",
    12345678901,
    "01/01/1990",
    "cupcake@example.com",
    "City A",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
  createData(
    2,
    "Pedro",
    23456789012,
    "02/02/1991",
    "donut@example.com",
    "City B",
    <div>
      <MoreHorizIcon sx={{ cursor: "pointer" }} />
    </div>
  ),
];

const headCells: HeadCell[] = [
  { id: "name", label: "Nome" },
  { id: "cpf", label: "CPF" },
  { id: "birthDate", label: "Data de Nascimento" },
  { id: "email", label: "E-mail" },
  { id: "city", label: "Cidade" },
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
    <TableHead sx={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
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
  const [orderBy, setOrderBy] = useState<keyof Data>("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    setFilteredRows(
      rows.filter(
        (row) =>
          row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.cpf.toString().includes(searchTerm) ||
          row.birthDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.city.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Paper sx={{ width: "100%" }}>
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
      <TableContainer sx={{ maxHeight: "30rem" }}>
        <Table aria-labelledby="tableTitle" size="medium">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          {filteredRows.map((row) => (
            <TableBody>
              <TableRow key={row.id}>
                <TableCell sx={{ color: "#136CDC", fontWeight: "400" }}>
                  {row.name}
                </TableCell>
                <TableCell>{row.cpf}</TableCell>
                <TableCell>{row.birthDate}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.actions}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </Paper>
  );
}
