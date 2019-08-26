import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddLeadComponent} from "./add-lead/add-lead.component";
import {ListLeadComponent} from "./list-lead/list-lead.component";
import {EditLeadComponent} from "./edit-lead/edit-lead.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-lead', component: AddLeadComponent },
  { path: 'list-lead', component: ListLeadComponent },
  { path: 'edit-lead', component: EditLeadComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
