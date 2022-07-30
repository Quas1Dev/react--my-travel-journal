import pointer from "./images/pointer.png"
export default function Card(props) {
  return (
    <section className="guide--card">
      <span>
        <img src={pointer}/>
        {props.country.toUpperCase()}
      </span>
      <img src={props.coverImg}/>
      <h2>{props.title}</h2>
      <span className="card--date_interval">{props.tripInterval}</span>
      <p>{props.siteDescription}</p>
    </section>
  )
}
