import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CursoService } from './curso.service';
import { AppComponent } from './app.component';
import { CursoEditComponent } from './curso-edit.component';
import { CursoListComponent } from './curso-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, CursoEditComponent, CursoListComponent],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
