import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
	declarations: [ AppComponent, PostComponent ],
	imports: [ BrowserModule, ReactiveFormsModule, FormsModule, HttpModule ],
	providers: [ PostService, { provide: ErrorHandler, useClass: AppErrorHandler } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
