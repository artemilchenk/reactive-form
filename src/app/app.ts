import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Form } from './form/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Form],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [DatePipe],
})
export class App {
  protected readonly title = signal('reactive-form-app');
}
