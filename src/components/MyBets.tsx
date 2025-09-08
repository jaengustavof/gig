import { useEventsStore } from "../store/eventsStore";
import { useState } from "react";

export default function MyBets() {
  const purchases = useEventsStore((state) => state.purchases);
  const [showMore, setShowMore] = useState(false);

  return purchases.length > 0 ? (
    <div className="my-bets">
      <div className="my-bets__header-container">
        <h3 className="my-bets__title">My Bets</h3>
        <button
          className="my-bets__show-more"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className={`my-bets__list ${showMore ? "expanded" : ""}`}>
        <div className="my-bets__table-headers">
          <div className="my-bets__cell">Event</div>
          <div className="my-bets__cell">Actor</div>
          <div className="my-bets__cell">Odd</div>
          <div className="my-bets__cell">Amount</div>
        </div>
        {purchases.map(({ eventLabel, actor, odd, amount }, index) => (
          <div className="my-bets__table-row" key={index}>
            <div className="my-bets__table-cell">{eventLabel}</div>
            <div className="my-bets__table-cell">{actor}</div>
            <div className="my-bets__table-cell">{odd}</div>
            <div className="my-bets__table-cell">{amount}</div>
          </div>
        ))}
      </div>
      <div className={`my-bets__footer ${showMore ? "expanded" : ""}`}>
        <div className="my-bets__footer-data">Potential Gain:</div>
        <div className="my-bets__footer-data">
          {purchases
            .reduce((acc, { amount, odd }) => acc + amount * odd, 0)
            .toFixed(2)}
        </div>
      </div>
    </div>
  ) : null;
}
