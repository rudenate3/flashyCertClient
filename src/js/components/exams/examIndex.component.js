import { State } from '../../state'

export class ExamIndexComponent {
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
    <h1>Exam Index</h1>
    `
  }

  addEventListeners() {}
}
