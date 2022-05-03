import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  {path:':id',
  component: ModalComponent,
},
  {path:'',
  component: AppComponent,
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
