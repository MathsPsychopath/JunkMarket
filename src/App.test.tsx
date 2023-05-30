import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import { MemoryRouter } from "react-router-dom"

test("renders landing page", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  )
  expect(screen.getByText(/JunkMarket/i)).toBeInTheDocument()
})

test("renders about page", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  )
  expect(screen.getByText(/About/i)).toBeInTheDocument()
})
