import { HomeComponent } from '../components/home.component'
import { LoginComponent } from '../components/login.component'
import { RegistrationComponent } from '../components/registration.component'
import { DashboardComponent } from '../components/dashboard.component'
import { ExamCreateComponent } from '../components/exams/examCreate.component'
import { ExamDestroyComponent } from '../components/exams/examDestroy.component'
import { ExamIndexComponent } from '../components/exams/examIndex.component'
import { ExamShowComponent } from '../components/exams/examShow.component'
import { ExamUpdateComponent } from '../components/exams/examUpdate.component'
import { QuestionCreateComponent } from '../components/questions/questionCreate.component'
import { QuestionDestroyComponent } from '../components/questions/questionDestroy.component'
import { QuestionIndexComponent } from '../components/questions/questionIndex.component'
import { QuestionShowComponent } from '../components/questions/questionShow.component'
import { QuestionUpdateComponent } from '../components/questions/questionUpdate.component'

export const Routes = {
  home: HomeComponent,
  login: LoginComponent,
  registration: RegistrationComponent,
  dashboard: DashboardComponent,
  // Exam Routes
  examCreate: ExamCreateComponent,
  examDestroy: ExamDestroyComponent,
  examIndex: ExamIndexComponent,
  examShow: ExamShowComponent,
  examUpdate: ExamUpdateComponent,
  // Question Routes
  questionCreate: QuestionCreateComponent,
  questionDestroy: QuestionDestroyComponent,
  questionIndex: QuestionIndexComponent,
  questionShow: QuestionShowComponent,
  questionUpdate: QuestionUpdateComponent
}
