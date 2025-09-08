export type Choice = {
  id: number;
  odd: number;
  actor: {
    id: number;
    label: string;
  };
};

export type BetDetail = {
  question: {
    label: string;
  };
  choices: Choice[];
};

export type Event = {
  id: number;
  label?: string;
  start: string;
  competition: { label: string };
  category: { label: string };
  sport: { label: string; icon: string };
  bet: Record<string, BetDetail>;
};

export type EventsStore = {
  events: Event[];
  setEvents: (events: Event[]) => void;
  cart: EventOptionProps[];
  purchases: EventOptionProps[];
  addToCart: (event: EventOptionProps) => void;
  submitCart: () => void;
  clearCart: () => void;
  updateCartAmount: (amount: number) => void;
};

export type EventOptionProps = {
  id: number;
  actor: string;
  odd: number;
  eventId: number;
  eventLabel: string;
  question: string;
  amount: number;
};
