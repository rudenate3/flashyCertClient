import { State } from '../state'

export class QuestionShowComponent {
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
    <h1>Question Show</h1>
    `
  }

  addEventListeners() {}
}
