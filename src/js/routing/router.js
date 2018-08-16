import { Routes } from './routes'
import { PageObject } from '../pageObject'

export class Router {
  constructor() {
    this.changeRoute('home')
  }

  goToHome() {
    this.changeRoute('home')
  }

  goToLogin() {
    this.changeRoute('login')
  }

  goToDashboard() {
    this.changeRoute('dashboard')
  }

  changeRoute(newRoute) {
    if (this.activeRoute) this.activeRoute.destroy()
    this.activeRoute = null
    const componentToLoad = Routes[newRoute]
    this.activeRoute = new componentToLoad(PageObject.cardDiv)
    this.activeRoute.render()
  }
}
