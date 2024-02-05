import { useState } from "react";

import Modal from "@mui/material/Modal";
import { FormControl, OutlinedInput, CircularProgress } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
  const [pacientData, setPacientData] = useState({
    paciente: "",
    apelido: "",
    nacionalidade: "",
    nascimento: null,
    cpf: "",
    email: "",
    rg: "",
    genero: " ",
    estadoCivil: " ",
    observacoes: "",
    cep: "",
    cidade: "",
    uf: "",
    endereco: "",
    numero: "",
    bairro: "",
    complemento: "",
  });
  const [loadingCEP, setLoadingCEP] = useState(false);
  const [cepBeingEdited, setCepBeingEdited] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Função para buscar detalhes do CEP
  const fetchCEPDetails = async (cep: string) => {
    try {
      setLoadingCEP(true);

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        console.error("CEP não encontrado");
      } else {
        setPacientData((prevData) => ({
          ...prevData,
          cidade: data.localidade,
          uf: data.uf,
          endereco: data.logradouro,
          bairro: data.bairro,
        }));
      }
    } catch (error) {
      console.error("Erro ao buscar detalhes do CEP", error);
    } finally {
      setLoadingCEP(false);
    }
  };

  const handleCEPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cep = event.target.value.replace(/\D/g, "");
    setCepBeingEdited(true);

    setPacientData((prevData) => ({
      ...prevData,
      cep: cep,
    }));

    // Se o CEP tiver 8 dígitos, busca automaticamente os detalhes do CEP
    if (cep.length === 8 && !cepBeingEdited) {
      fetchCEPDetails(cep);
    }
  };

  const handleCEPBlur = () => {
    setCepBeingEdited(false);
  };

  const handleSubmit = () => {
    const existingDataString = localStorage.getItem("pacientData");
    let existingData = existingDataString ? JSON.parse(existingDataString) : [];

    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    if (editingIndex !== null) {
  
      existingData[editingIndex] = pacientData;
    } else {
  
      existingData = [...existingData, pacientData];
    }

    localStorage.setItem("pacientData", JSON.stringify(existingData));
    handleClose();
    setEditingIndex(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPacientData({
      ...pacientData,
      [event.target.id]: event.target.value,
    });
  };

  const handleAutocompleteChange = (
    event: any,
    newValue: string | null,
    id: string
  ) => {
    setPacientData({
      ...pacientData,
      [id]: newValue || "",
    });
  };

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
          <Box sx={{}}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{ borderBottom: 1, borderColor: "divider" }}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#510972",
                },
              }}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ textTransform: "capitalize" }}
                label="Informações Básicas"
                {...a11yProps(0)}
                style={value === 0 ? { color: "#510972" } : {}}
              />
              <Tab
                sx={{ textTransform: "capitalize" }}
                label="Contato"
                {...a11yProps(1)}
                style={value === 1 ? { color: "#510972" } : {}}
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
                    id="paciente"
                    placeholder="Digite"
                    value={pacientData.paciente}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Pacient>
              <NickName>
                <FieldTitle>Apelido:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="apelido"
                    placeholder="Digite"
                    value={pacientData.apelido}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </NickName>
              <Nacionality>
                <FieldTitle>Nacionalidade:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="nacionalidade"
                    placeholder="Digite"
                    value={pacientData.nacionalidade}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Nacionality>

              <Birthday>
                <FieldTitle>Nascimento:</FieldTitle>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      sx={{ width: "100%" }}
                      value={pacientData.nascimento}
                      onChange={(newValue) =>
                        setPacientData({ ...pacientData, nascimento: newValue })
                      }
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Birthday>
              <CPF>
                <FieldTitle>CPF:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="cpf"
                    placeholder="Digite"
                    value={pacientData.cpf}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </CPF>
              <RG>
                <FieldTitle>RG:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="rg"
                    placeholder="Digite"
                    value={pacientData.rg}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </RG>
              <Gender>
                <FieldTitle>Gênero:</FieldTitle>
                <Autocomplete
                  disablePortal
                  id="genero"
                  options={["Masculino", "Feminino", "Não Definido"]}
                  sx={{ width: "100%" }}
                  value={pacientData.genero}
                  onChange={(event, newValue) =>
                    handleAutocompleteChange(event, newValue, "genero")
                  }
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Selecione" />
                  )}
                />
              </Gender>
              <Status>
                <FieldTitle>Estado Civil:</FieldTitle>
                <Autocomplete
                  disablePortal
                  id="estadoCivil"
                  options={[
                    "Solteiro",
                    "Casado",
                    "Separado",
                    "Divorciado",
                    "Viúvo",
                  ]}
                  sx={{ width: "100%" }}
                  value={pacientData.estadoCivil}
                  onChange={(event, newValue) =>
                    handleAutocompleteChange(event, newValue, "estadoCivil")
                  }
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Selecione" />
                  )}
                />
              </Status>
              <Observation>
                <FieldTitle>Observações adicionais:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="observacoes"
                    placeholder="Digite"
                    sx={{ height: "100px" }}
                    value={pacientData.observacoes}
                    onChange={handleInputChange}
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
                    id="cep"
                    placeholder="Digite"
                    value={pacientData.cep}
                    onChange={handleCEPChange}
                    onBlur={handleCEPBlur}
                  />
                </FormControl>
                {loadingCEP && <CircularProgress size={24} />}
              </CEP>
              <City>
                <FieldTitle>Cidade:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="cidade"
                    placeholder="Digite"
                    value={pacientData.cidade}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </City>
              <UF>
                <FieldTitle>UF:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="uf"
                    placeholder="Digite"
                    value={pacientData.uf}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </UF>
              <Adress>
                <FieldTitle>Endereço:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="endereco"
                    placeholder="Digite"
                    value={pacientData.endereco}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Adress>
              <Number>
                <FieldTitle>Número:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="numero"
                    placeholder="Digite"
                    value={pacientData.numero}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Number>
              <Neighb>
                <FieldTitle>Bairro:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="bairro"
                    placeholder="Digite"
                    value={pacientData.bairro}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Neighb>
              <Complement>
                <FieldTitle>Complemento:</FieldTitle>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="complemento"
                    placeholder="Digite"
                    value={pacientData.complemento}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Complement>
              <SubmitButton onClick={handleSubmit}>Salvar</SubmitButton>
            </ContactContainer>
          </CustomTabPanel>
        </Box>
      </ModalContainer>
    </Modal>
  );
}
