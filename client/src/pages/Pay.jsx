import {useState, useEffect} from "react";
import {useLocation, useHistory} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

import styled from "styled-components";
const axios = require("axios");
const STRIPE_PUB_KEY =
  "pk_test_51KM9NICwmXA1Le58gvk9arhAEtbD8OMJwMZwfHLwVoG9wBrtqx7cG6aR3qJxGUlatujpTElH43BGtTxfqZVI9IHt00d6w2KTHD";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
`;
const Button = styled.button`
  background-color: cyan;
  color: black;
  padding: 12px;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  &:hover {
    background-color: #fffde7;
    transform: scale(1.1);
  }
`;

const Pay = () => {
  const history = useHistory();
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 10000,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest(); //! if there is a stripToken then we call the makeRequest function to make a post req to our server
  }, [stripeToken]);
  return (
    <Container>
      <StripeCheckout
        name="DallolMart"
        image="https://i.pinimg.com/280x280_RS/f0/c7/30/f0c730d4740bcf7ba03fcfa84bfdabbf.jpg"
        description="Your total amount is €100" //!the amount should be rearanged dynamically ={order.amount}?
        billingAddress
        shippingAddress
        token={onToken}
        stripeKey={STRIPE_PUB_KEY}
      >
        <Button>Pay Now</Button>
       
      </StripeCheckout>
      <button
          onClick={() => {
            history.goBack();
          }}
        >
          Go back to Cart
        </button>
    </Container>
  );
};

export default Pay;
