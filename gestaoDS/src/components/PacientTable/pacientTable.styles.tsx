import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  border: 1px solid #E8E8E8;
  background: #ffffff;
  margin: auto;
  border-radius: 6px;
  @media (max-width: 700px) {
    width: 80vw;
  }
`;

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
  height: 80px;
  padding: 12px;
  @media (max-width: 890px) {
    grid-template-columns: 1fr;
    height: 120px;
    padding: 12px;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    height: 170px;
  }
`;

export const AddSearch = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
   @media (max-width: 890px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 12px;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  
  }
`;

export const TitlePacientList = styled.div`
  padding-left: 60px;
  font-weight: 400;
  line-height: 21px;
  @media (max-width: 890px) {
    padding-left: 20px;
  }
`;

/* Delete Modal */

export const ModalDeleteContainer = styled.div`
  display: flex;
  background-color: #fff;
  align-self: center;
  margin: auto;
  width: 500px;
  height: 60vh;
  transform: translateY(25%);
  border-radius: 10px;
  @media (max-width: 550px) {
    width: 80vw;
  
  };
`;

export const InsideContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  width: 100%;
`;

export const NoData = styled.div`
  display: block;
  width: 100%;
  height: 200px;
  justify-self: center;
  margin: auto;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  color: #136cdc;
  padding: 0 16px;
`;

export const Top = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px solid #c0c0c0;
  align-items: center;
`;

export const DeleteTitle = styled.div`
  display: grid;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  color: #510972;
  padding: 0 16px;
`;

export const CloseModalIcon = styled.div`
  display: grid;
  padding: 0 40px;
  justify-content: end;
  cursor: pointer;
`;

export const Middle = styled.div`
  display: grid;
  grid-template-rows: 3fr 0.5fr 0.5fr;
  justify-content: center;
`;

export const ImageModal = styled.img`
  display: grid;
  margin: auto;
  width: 135px;
`;

export const Text1 = styled.div`
  display: grid;
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
  color: #565656;
`;

export const Text2 = styled.div`
  display: grid;
  text-align: center;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.15px;
  font-weight: 600;
`;

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #c0c0c0;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 10px;
`;

export const CancelButton = styled.div`
  display: grid;
  width: 90px;
  height: 32px;
  border-radius: 4px;
  padding: 8px 16px 8px 16px;
  color: #136cdc;
  align-items: center;
  justify-items: center;
  justify-self: end;
  background: none;
  border: 1px solid #136cdc;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.15px;
  font-weight: 600;
`;

export const Delete = styled.div`
  display: grid;
  width: 90px;
  height: 32px;
  border-radius: 4px;
  padding: 8px 16px 8px 16px;
  color: #fff;
  align-items: center;
  justify-items: center;
  justify-self: end;
  background: #c52525;
  border: 0px;
  margin-right: 18px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.15px;
  font-weight: 600;
`;
