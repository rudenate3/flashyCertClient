import {
  State
} from '../state'

export class DashboardComponent {
  constructor(container) {
    this.container = container
  }

  render() {
    if (!State.token) return State.router.changeRoute('login')
    this.container.innerHTML = this.markup()
    this.addEventListeners()
  }

  markup() {
    return `
    <h1>Dashboard</h1>
    `
  }

  addEventListeners() {}
}