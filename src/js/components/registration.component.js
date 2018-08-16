import { State } from '../state'
import { Register } from '../services/auth.service'
import { getFormInputs } from '../lib/getFormInputs'

export class RegistrationComponent {
  constructor(container) {
    this.container = container
  }

  render() {
    if (State.token) return State.router.changeRoute('dashboard')
    this.container.innerHTML = this.markup()
    this.addEventListeners()
  }

  markup() {
    return `
      <h1>Registration</h1>
      <form id="register-form">
        <label for="username">Username</label>
        <input type="text" id="username">
        <label for="email">Email</label>
        <input type="text" id="email">
        <label for="password">Password</label>
        <input type="password" id="password">
        <button>Register</button>
      </form>
      <button id='back'>Back</button>
      `
  }

  addEventListeners() {
    document
      .querySelector('#back')
      .addEventListener('click', () => State.router.changeRoute('home'))
    document
      .querySelector('#register-form')
      .addEventListener('submit', event => {
        event.preventDefault()
        const data = getFormInputs(event.target)
        Register(data).then(response => {
          console.log(response) //TODO handle response
        })
      })
  }
}
