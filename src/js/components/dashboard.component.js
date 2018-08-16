import { State } from '../state'

export class DashboardComponent {
  constructor(container) {
    this.container = container
  }

  destroy() {
    this.removeEventListeners()
  }

  render() {
    if (!State.token) return State.router.changeRoute('login')
    this.container.innerHTML = this.markup()
    this.addEventListeners()
    this.destroy = this.destroy
  }

  markup() {
    return `
    <h1>Dashboard</h1>
    <hr>
    <button id="create-exam-btn">Create Exam</button>
    `
  }

  onCreateExamClick() {
    State.router.changeRoute('examCreate')
  }

  addEventListeners() {
    document
      .querySelector('#create-exam-btn')
      .addEventListener('click', this.onCreateExamClick)
  }

  removeEventListeners() {
    document
      .querySelector('#create-exam-btn')
      .removeEventListener('click', this.onCreateExamClick)
  }
}
