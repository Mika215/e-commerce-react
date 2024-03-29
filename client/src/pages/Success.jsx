import {React,useEffect} from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  padding: 80px;
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  width: 300px;
  hight: 250px;
  justify-content: center;
  align-items: center;
`;
const Success = () => {
  const location=useLocation()
  // console.log(location.state.data.source.name)
  //! should find a way so that i can send email to the customer including order id and amount of money
  const summaryEmail = async () => {
    try {
      let message = `Dear ${location.state.data.source.name},
      Thanks for choosing DallolMart as your prefered shoping platform.
      **xxx** amount of money has been deducted from your ${location.state.data.source.brand} card number: ****${location.state.data.source.last4}.
      we will deliver your orders within the next few days to your address @:${location.state.data.source.address_line1},${location.state.data.source.address_city},${location.state.data.source.address_country}`;
    console.log(message);
    } catch (err) {
      console.log(err);
    }
  };
  

useEffect(() => {
  location.state && summaryEmail() //! this avoides calling the summary email function while there is no state (cart info) which usually would throw an error
}, [location])
  return (
    <Container>
      <ImageContainer>
        <Image alt="dallolmart-logo" src="https://i.pinimg.com/280x280_RS/f0/c7/30/f0c730d4740bcf7ba03fcfa84bfdabbf.jpg" />
      </ImageContainer>
      <h1>Thanks for Choosing DallolMart!</h1>
      <p>Payment successful!</p>
    </Container>
  );
};

export default Success;
