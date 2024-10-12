const Summary = ({ total, itemCount }) => {
  return (
    <div className="summary flex-col flex gap-3">
      <h2>Summary</h2>
      <p>Products: Rs. {total.toFixed(2)}</p>
      <p>Shipping: Free</p>
      <p>Total amount (including VAT): Rs.{total.toFixed(2)}</p>
      <button className="checkout-button">Go to Checkout</button>
    </div>
  );
};

export default Summary;
