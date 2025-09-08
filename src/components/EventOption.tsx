import type { EventOptionProps } from "../types/events.types";
import { decodeUnicode } from "../lib/utils/decodeUnicode";
import { useEventsStore } from "../store/eventsStore";

export default function EventOption({
  id,
  actor,
  odd,
  eventId,
  eventLabel,
  question,
}: EventOptionProps) {
  const addToCart = useEventsStore((state) => state.addToCart);
  const clearCart = useEventsStore((state) => state.clearCart);
  const cart = useEventsStore((state) => state.cart);

  const isSelected = cart[0]?.id === id;

  const handleClick = () => {
    clearCart();
    addToCart({
      id,
      actor,
      odd,
      eventId,
      eventLabel,
      question,
      amount: 1,
    });
  };

  return (
    <button
      className={`event__button ${isSelected ? "selected" : ""}`}
      key={id}
      onClick={handleClick}
    >
      <span className="event__button--text">{decodeUnicode(actor)}</span>
      <span className="event__button--amount">{odd}</span>
    </button>
  );
}
