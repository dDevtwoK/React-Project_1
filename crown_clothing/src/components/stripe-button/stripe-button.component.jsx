import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51ImCrfBkpfa5azqqu0Dml8ldaVWUMhsF54aZguiKTXLOK2rT1tshmQGURcReflqVczRT1lhbGKuVuJzLuoPE5uLF00OLLCNB35';

  const onToken = token => {
    console.log(token);
    alert('Payment successfully');
  };
  return (
    <StripeCheckout
      label='Pay now'
      name='CROWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
