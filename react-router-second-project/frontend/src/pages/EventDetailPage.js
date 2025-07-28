import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export default EventDetailPage;

export async function eventDetailLoader({ params }) {
  const response = await fetch(`http://localhost:8080/events/${params.id}`);
  if (!response.ok) {
    throw new Response("Could not fetch event details.", { status: 500 });
  } else {
    return response;
  }
}
