const Summary = ({ total, itemCount, onCheckoutClick }) => {
  return (
    <div className="summary flex-col flex gap-3">
      <h2>Summary</h2>
      <p>Products: Rs. {total.toFixed(2)}</p>
      <p>Shipping: Free</p>
      <p>Total amount (including VAT): Rs.{total.toFixed(2)}</p>
      <button className="checkout-button"  onClick={onCheckoutClick} >Go to Checkout</button>
    </div>
  );
};

export default Summary;