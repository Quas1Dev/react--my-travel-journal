import pointer from "./images/pointer.png"
export default function Card(props) {
  return (
    <section className="guide--card">
      <img src={props.coverImg} className="card--cover_img"/>
      <div className="card--body">
        <span className="card--location">
          <img src={pointer}/>
          {props.country.toUpperCase()}
        </span>
        <h2 className="card--title">{props.title}</h2>
        <span className="card--date_interval">{props.tripInterval}</span>
        <p className="card--description">{props.siteDescription}</p>
      </div>
    </section>
  )
}
