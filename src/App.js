import Header from "./header.js"
import Card from "./card.js"
import data from "./data.js"
import './style.css'

export default function App() {
  const dataJSX = data.map(item => {
    return (
      <Card
        key = {item.id}
        {...item}
      />
    )
  })
  return (
    <div className="container">
      <Header />
      <div id="guide">
        {dataJSX}
      </div>
    </div>
  )
}
