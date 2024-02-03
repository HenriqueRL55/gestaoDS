import { useState } from "react";

import Modal from "@mui/material/Modal";
import { FormControl, OutlinedInput } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  ModalContainer,
  BasicInformationContainer,
  Photo,
  Pacient,
  NickName,
  Nacionality,
  Birthday,
  CPF,
  RG,
  Gender,
  Status,
  Observation,
  ButtonConfirm,
  FieldTitle,
  CEP,
  City,
  UF,
  Adress,
  Number,
  Neighb,
  Complement,
  ContactContainer,
  SubmitButton,
} from "./modal.styles";

interface PacientModalProps {
  open: boolean;
  handleClose: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PacientModal({ open, handleClose }: PacientModalProps) {
  const [value, setValue] = useState(0);
  const [valueDate, setValueDate] = useState<Dayjs | null>(dayjs());

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNextButtonClick = () => {
    setValue(1);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <Box
          sx={{
            width: "100%",
            padding: "32px 20px",
            textTransform: "capitalize",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ textTransform: "capitalize" }}
                label="Informações Básicas"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ textTransform: "capitalize" }}
                label="Contato"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <BasicInformationContainer>
              <Photo>teste</Photo>
              <Pacient>
                <FieldTitle>Paciente:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </Pacient>
              <NickName>
                <FieldTitle>Apelido:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </NickName>
              <Nacionality>
                <FieldTitle>Nacionalidade:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </Nacionality>

              <Birthday>
                <FieldTitle>Nascimento:</FieldTitle>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      sx={{ width: "100%" }}
                      value={valueDate}
                      onChange={(newValue) => setValueDate(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Birthday>
              <CPF>
                <FieldTitle>CPF:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </CPF>
              <RG>
                <FieldTitle>RG:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </RG>
              <Gender>
                <FieldTitle>Gênero:</FieldTitle>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={["Masculino", "Feminino", "Não Definido"]}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Selecione" />
                  )}
                />
              </Gender>
              <Status>
                <FieldTitle>Estado Civil:</FieldTitle>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    "Solteiro",
                    "Casado",
                    "Separado",
                    "Divorciado",
                    "Viúvo",
                  ]}
                  sx={{ width: "19.5rem" }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Selecione" />
                  )}
                />
              </Status>
              <Observation>
                <FieldTitle>Observações adicionais:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    sx={{ height: "100px" }} // Adjust this value as needed
                    // value={searchTerm}
                    // onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </Observation>
              <ButtonConfirm onClick={handleNextButtonClick}>
                Próximo
              </ButtonConfirm>
            </BasicInformationContainer>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <ContactContainer>
              <CEP>
                <FieldTitle>CEP:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </CEP>
              <City>
                <FieldTitle>Cidade:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </City>
              <UF>
                <FieldTitle>UF:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </UF>
              <Adress>
                <FieldTitle>Endereço:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </Adress>
              <Number>
                <FieldTitle>Número:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </Number>
              <Neighb>
                <FieldTitle>Bairro:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </Neighb>
              <Complement>
                <FieldTitle>Complemento:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="search-input"
                    placeholder="Digite"
                    //   value={searchTerm}
                    //   onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </FormControl>
              </Complement>
              <SubmitButton>Salvar</SubmitButton>
            </ContactContainer>
          </CustomTabPanel>
        </Box>
      </ModalContainer>
    </Modal>
  );
}
