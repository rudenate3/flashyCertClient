import { State } from '../../state'
import { createExam } from '../../services/exam.service'
import { getFormInputs } from '../../lib/getFormInputs'

export class ExamCreateComponent {
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
    <h1>Exam Create</h1>
    <span id="messages"></span>
    <form id="exam-create-form">
      <label for="title">Title</label>
      <input type="text" id="title">
      <label for="passing">Passing</label>
      <input type="text" id="passing">
      <button>Create Exam</button>
    </form>
    <button id='back'>Back</button>
    `
  }

  onBack() {
    State.router.goToDashboard()
  }

  async onExamCreateClick (event) {
    event.preventDefault()
    const data = getFormInputs(event.target)
    const response = await createExam(data, State.token)
    if (response.status !== 201) {
      document.querySelector('#messages').innerHTML = 'An Error has occurred'
      return
    }
    State.router.goToDashboard()
  }

  addEventListeners() {
    document.querySelector('#back').addEventListener('click', this.onBack)
    document
      .querySelector('#exam-create-form')
      .addEventListener('submit', this.onExamCreateClick)
  }

  removeEventListeners() {
    document.querySelector('#back').removeEventListener('click', this.onBack)
    document
      .querySelector('#exam-create-form')
      .removeEventListener('submit', this.onExamCreateClick)
  }
}
