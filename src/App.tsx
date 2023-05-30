import { Helmet } from "react-helmet"
// import logo from "./logo.svg"
// import { Counter } from "./features/counter/Counter"
import "./App.css"
import { Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <Typography variant="h3">JunkMarket</Typography>
      <nav>
        <Link component={RouterLink} to="/about">
          About
        </Link>
      </nav>
    </div>
  )
}

export default App
