import { redirect, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  return <EventForm event={data.event} />;
}

export default EditEventPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const eventId = params.id;

  const eventData = {
    title: data.get("title"),
    date: data.get("date"),
    description: data.get("description"),
    image: data.get("image"),
  };

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Response("Could not update event.", { status: 500 });
  }

  return redirect(`/events/${eventId}`);
}
