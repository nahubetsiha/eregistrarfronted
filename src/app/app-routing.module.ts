import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListStudentComponent} from './components/list-student/list-student.component';
import {HomeComponent} from './components/home/home.component';
import {AddStudentComponent} from './components/add-student/add-student.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list', component: ListStudentComponent},
    {path: 'home', component: HomeComponent},
    {path: 'add', component: AddStudentComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
