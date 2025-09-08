import EventOption from "./EventOption";
import { useEventsStore } from "../store/eventsStore";
import { getDate } from "../lib/utils/getDate";
import { fixEventLabel } from "../lib/utils/eventLabelFixer";

export default function EventsList() {
  const events = useEventsStore((state) => state.events);

  return (
    <div className="events-list">
      {events.length > 1 ? (
        events.map(
          ({
            id: eventId,
            sport: { label: sportLabel },
            category: { label: categoryLabel },
            competition: { label: competitionLabel },
            label,
            start,
            bet,
          }) => {
            const betDetail = Object.values(bet)[0];
            const choices = betDetail?.choices || [];

            return (
              <div className="event" key={eventId}>
                <h2 className="event__title">
                  {sportLabel} / {categoryLabel} / {competitionLabel}
                </h2>
                <div className="event__options">
                  <div className="event__data">
                    <span className="event__data--title">
                      {fixEventLabel({ label: label ?? "", choices })}
                    </span>
                    <span className="event__data--date">{getDate(start)}</span>
                  </div>
                  <div className="event__options">
                    {choices && choices.length > 0 ? (
                      choices.map(({ id, actor, odd }) => (
                        <EventOption
                          key={id}
                          id={id}
                          actor={actor.label}
                          odd={odd}
                          eventId={eventId}
                          eventLabel={fixEventLabel({
                            label: label ?? "",
                            choices,
                          })}
                          question={betDetail.question.label}
                          amount={1}
                        />
                      ))
                    ) : (
                      <p>No options available</p>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
}
