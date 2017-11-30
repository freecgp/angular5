import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MnFullpageModule } from 'ngx-fullpage';
import { AppComponent } from './app.component';
import  { NzDemoFormLoginComponent }  from './components/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NzDemoFormLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    MnFullpageModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }