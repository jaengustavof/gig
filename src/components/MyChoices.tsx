import MyBets from "./MyBets";
import { Fragment } from "react/jsx-runtime";
import { useEventsStore } from "../store/eventsStore";

export default function MyChoices() {
  const updateAmount = useEventsStore((state) => state.updateCartAmount);
  const submitCart = useEventsStore((state) => state.submitCart);
  const clearCart = useEventsStore((state) => state.clearCart);
  const cart = useEventsStore((state) => state.cart);
  const purchases = useEventsStore((state) => state.purchases);

  const { eventLabel, actor, odd, amount, question } = cart[0] || {};

  const handleClick = (newAmount: number) => {
    newAmount > 1 ? updateAmount(newAmount) : updateAmount(1);
  };
  console.log({ purchases });
  return (
    <div className="my-choices">
      <h3 className="my-choices__title">My Choices</h3>
      {cart.length > 0 ? (
        <Fragment>
          <div className="my-choices__list">
            <div className="my-choices__item">
              <p className="my-choices__item--event">{eventLabel}</p>
              <p className="my-choices__item--text"> {question}</p>
              <p className="my-choices__item--odds">
                {actor} <span className="my-choices__item--value">{odd}</span>
              </p>
            </div>
            <button className="my-choices__remove" onClick={clearCart}>
              X
            </button>
          </div>

          <div className="my-choices__amount">
            <p className="my-choices__amount--text">Total Amount:</p>
            <div className="my-choices__buttons-container">
              <button
                className="my-choices__button control"
                onClick={() => handleClick(amount - 1)}
              >
                -
              </button>
              <input
                className="my-choices__amount--input"
                type="number"
                min={1}
                value={amount}
                onChange={(e) => handleClick(Number(e.target.value))}
                style={{ width: "60px", textAlign: "center" }}
              />
              <button
                className="my-choices__button control"
                onClick={() => handleClick(amount + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="my-choices__totals">
            <p className="my-choices__totals--text">
              Total:{" "}
              <span className="my-choices__totals--value">
                {amount.toFixed(2)}
              </span>
            </p>

            <p className="my-choices__totals--text">
              Potential Gain:{" "}
              <span className="my-choices__totals--value">
                {(amount * odd).toFixed(2)}
              </span>
            </p>
          </div>
          <div className="my-choices__actions">
            <button
              className="my-choices__button submit"
              onClick={() => {
                submitCart();
              }}
            >
              Submit bets
            </button>
          </div>
        </Fragment>
      ) : purchases.length > 0 ? (
        <div className="my-choices__empty">
          <Fragment>
            <p>Your bets have been placed successfully!</p>
            <MyBets />
          </Fragment>
        </div>
      ) : (
        <div className="my-choices__empty">
          <p>No bets chose</p>
        </div>
      )}
    </div>
  );
}
