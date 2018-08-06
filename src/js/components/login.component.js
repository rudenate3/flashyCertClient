import { State } from '../state'
import { Login } from '../services/auth.service'
import { getFormInputs } from '../lib/getFormInputs'

export class LoginComponent {
  constructor(container) {
    this.container = container
  }

  render() {
    this.container.innerHTML = this.markup()
    this.addEventListeners()
  }

  markup() {
    return `
      <h1>Login</h1>
      <form id="login-form">
        <label for="email">Email</label>
        <input type="text" id="email">
        <label for="password">Password</label>
        <input type="password" id="password">
        <button>Login</button>
      </form>
      <button id='back'>Back</button>
      `
  }

  addEventListeners() {
    document.querySelector('#back').addEventListener('click', this.goHome)
    document.querySelector('#login-form').addEventListener('submit', this.onLogin)
  }

  goHome() {
    State.router.changeRoute('home')
  }

  async onLogin(event) {
    event.preventDefault()
    const data = getFormInputs(event.target)
    const response = await Login(data)
    console.log(response) //TODO handle response
    State['token'] = response.token // TODO handle error scenario
  }
}