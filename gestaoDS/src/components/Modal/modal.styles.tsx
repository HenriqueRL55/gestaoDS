import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  background-color: #fff;
  align-self: center;
  margin: auto;
  width: 60vw;
  height: 80vh;
  transform: translateY(12%);
  border-radius: 10px;
  overflow: auto;
  @media (max-width: 1200px) {
    width: 80vw;
    height: 95vh;
    transform: translateY(2%);
  }
`;

export const BasicInformationContainer = styled.div`
  display: grid;
  justify-items: start;
  grid-template-areas:
    "Photo Photo Photo"
    "Pacient NickName Nacionality"
    "Birthday CPF RG"
    "Gender Status Status"
    "Observation Observation Observation"
    "Button Button Button";
  gap: 20px 50px;
  @media (max-width: 1200px) {
    grid-template-areas:
      "Photo Photo "
      "Pacient NickName "
      "Nacionality Birthday "
      "CPF RG"
      "Gender Status"
      "Observation Observation"
      "Button Button";
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  @media (max-width: 850px) {
    grid-template-areas:
      "Photo"
      "Pacient"
      "NickName"
      "Nacionality"
      "Birthday"
      "CPF"
      "RG"
      "Gender"
      "Status"
      "Observation"
      "Button";
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const Photo = styled.div`
  display: grid;
  grid-area: Photo;
`;

export const Pacient = styled.div`
  display: grid;
  width: 100%;
  grid-area: Pacient;
`;

export const NickName = styled.div`
  display: grid;
  width: 100%;
  grid-area: NickName;
`;
export const Nacionality = styled.div`
  display: grid;
  width: 100%;
  grid-area: Nacionality;
`;

export const Birthday = styled.div`
  display: grid;
  width: 100%;
  grid-area: Birthday;
`;

export const CPF = styled.div`
  display: grid;
  width: 100%;
  grid-area: CPF;
`;

export const RG = styled.div`
  display: grid;
  width: 100%;
  grid-area: RG;
`;

export const Gender = styled.div`
  display: grid;
  width: 100%;
  grid-area: Gender;
`;
export const Status = styled.div`
  display: grid;
  width: 100%;
  grid-area: Status;
`;
export const Observation = styled.div`
  display: grid;
  width: 100%;
  grid-area: Observation;
`;

export const ButtonConfirm = styled.button`
  display: grid;
  grid-area: Button;
  width: 200px;
  height: 40px;
  border-radius: 4px;
  padding: 8px;
  color: #fff;
  align-items: center;
  justify-items: center;
  justify-self: end;
  background: #136cdc;
  border: 0px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  cursor: pointer;
`;

export const FieldTitle = styled.div`
  padding-bottom: 5px;
  color: #656565;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
`;

/* Contact Style */

export const ContactContainer = styled.div`
  display: grid;
  justify-items: start;
  grid-template-areas:
    "CEP City UF"
    "Adress Number Neighb"
    "Complement Complement Complement"
    "SubmitButton SubmitButton SubmitButton";
  gap: 20px 50px;
  grid-template-rows: 1fr 1fr 1fr 3fr;
  @media (max-width: 1200px) {
  }
  @media (max-width: 850px) {
  }
`;

export const CEP = styled.div`
  display: grid;
  width: 100%;
  grid-area: CEP;
`;

export const City = styled.div`
  display: grid;
  width: 100%;
  grid-area: City;
`;

export const UF = styled.div`
  display: grid;
  width: 100%;
  grid-area: UF;
`;

export const Adress = styled.div`
  display: grid;
  width: 100%;
  grid-area: Adress;
`;

export const Number = styled.div`
  display: grid;
  width: 100%;
  grid-area: Number;
`;

export const Neighb = styled.div`
  display: grid;
  width: 100%;
  grid-area: Neighb;
`;

export const Complement = styled.div`
  display: grid;
  width: 100%;
  grid-area: Complement;
`;

export const SubmitButton = styled.button`
  display: grid;
  grid-area: SubmitButton;
  width: 200px;
  height: 40px;
  border-radius: 4px;
  padding: 8px;
  color: #fff;
  align-items: center;
  justify-items: center;
  justify-self: end;
  background: #136cdc;
  border: 0px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  align-self: end;
  cursor: pointer;
`;
