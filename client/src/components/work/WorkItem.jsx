export default function WorkItem({ year, title, duration, details }) {
    return (
        <div className="work-item">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-gray-600">{year} - {duration}</p>
            <p className="text-gray-700">{details}</p>
        </div>
    );
}
