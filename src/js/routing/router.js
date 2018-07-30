import { Routes } from './routes'
import { PageObject } from '../pageObject'

export class Router {
  constructor() {
    this.changeRoute('home')
  }

  changeRoute(newRoute) {
    this.activeRoute = null
    const componentToLoad = Routes[newRoute]
    this.activeRoute = new componentToLoad(PageObject.cardDiv)
    this.activeRoute.render()
  }
}
