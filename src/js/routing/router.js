import { Routes } from './routes'
import { PageObject } from '../pageObject'

export class Router {
  constructor() {
    this.changeRoute('home')
  }

  changeRoute(newRoute) {
    PageObject.cardDiv.innerHTML = Routes[newRoute]
  }
}
