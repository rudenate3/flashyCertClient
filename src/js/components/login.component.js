import { State } from '../state'

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

  addEventListeners(){
    document.querySelector('#back').addEventListener('click', () => State.router.changeRoute('home'))
  }
}