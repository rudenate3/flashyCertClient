import { State } from '../state'

export class HomeComponent {
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
    <h1>FlashyCerts</h1>
    <button id='go-to-login-btn'>Login</button>
    <button id='go-to-registration-btn'>Register</button>
    `
  }

  onLoginClick() {
    State.router.goToLogin()
  }

  onRegistrationClick() {
    State.router.changeRoute('registration')
  }

  addEventListeners() {
    document
      .querySelector('#go-to-login-btn')
      .addEventListener('click', this.onLoginClick)
    document
      .querySelector('#go-to-registration-btn')
      .addEventListener('click', this.onRegistrationClick)
  }

  removeEventListeners() {
    document
      .querySelector('#go-to-login-btn')
      .removeEventListener('click', this.onLoginClick)
    document
      .querySelector('#go-to-registration-btn')
      .removeEventListener('click', this.onRegistrationClick)
  }
}
