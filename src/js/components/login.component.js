import { State } from '../state'
import { Login } from '../services/auth.service'
import { getFormInputs } from '../lib/getFormInputs'

export class LoginComponent {
  constructor(container) {
    this.container = container
  }

  destroy() {
    this.removeEventListeners()
  }

  render() {
    if (State.token) return State.router.changeRoute('dashboard')
    this.container.innerHTML = this.markup()
    this.addEventListeners()
    this.destroy = this.destroy
  }

  markup() {
    return `
      <h1>Login</h1>
      <span id="messages"></span>
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
    document.querySelector('#back').addEventListener('click', this.onBack)
    document
      .querySelector('#login-form')
      .addEventListener('submit', this.onLogin)
  }

  removeEventListeners() {
    document.querySelector('#back').removeEventListener('click', this.onBack)
    document
      .querySelector('#login-form')
      .removeEventListener('submit', this.onLogin)
  }

  onBack() {
    State.router.goToHome()
  }

  async onLogin(event) {
    event.preventDefault()
    const data = getFormInputs(event.target)
    const response = await Login(data)
    if (!response.success) {
      document.querySelector('#messages').innerHTML = response.error
      return
    }
    State['token'] = response.token
    State.router.changeRoute('dashboard')
  }
}
