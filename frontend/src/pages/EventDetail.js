import { useParams, Link } from "react-router-dom";

function EventDetailPage() {
    const params = useParams();
   
    return (
        <>
            <h1>Event Detaile </h1>
            <p> {params.eventId}</p>
            <p><Link to='..' relative='path'>Back</Link></p>
        </>
    )
}
export default EventDetailPage;