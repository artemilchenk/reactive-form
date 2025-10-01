import { Component, computed, effect, resource, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  NgModelGroup,
  Validators,
} from '@angular/forms';
import { Technologies } from '../../mock/form-data';
import { DatePipe, KeyValuePipe } from '@angular/common';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  ETechnologyNames,
  IFormData,
  IFormDto,
  IHobby,
  TPostResponse,
} from '../../types/form-data';
import { MatButton } from '@angular/material/button';
import { FormApi } from '../services/form-api';

@Component({
  selector: 'app-form',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    KeyValuePipe,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatButton,
  ],

  templateUrl: './form.html',
  styleUrl: './form.scss',
  providers: [provideNativeDateAdapter()],
})
export class Form {
  technologies = Technologies;
  today: Date = new Date();

  selectedFramework = signal<ETechnologyNames>(ETechnologyNames.DEFAULT);
  hobbies = signal<IHobby[]>([]);
  currentVersions = computed(() => {
    return this.technologies[this.selectedFramework()];
  });

  hobbyName = signal('');
  hobbyDuration = signal('');

  isLoading = signal(false);
  responseData = signal(null);
  errorResponse = signal('');

  constructor(private formApi: FormApi) {}

  resetHobbyFields() {
    this.hobbyName.set('');
    this.hobbyDuration.set('');
  }

  addHobby(ngGroup: NgModelGroup) {
    this.hobbies.update((prev) => {
      return [...prev, ngGroup.value];
    });

    this.resetHobbyFields();
  }

  resetResponseData() {
    this.errorResponse.set('');
    this.responseData.set(null);
  }

  async onSubmit(ngForm: NgForm) {
    this.resetResponseData();

    const datePipe = new DatePipe('en-US');

    const formData = {
      ...ngForm.value,
      dateOfBirth: datePipe.transform(ngForm.value.dateOfBirth, 'dd-MM-yyyy'),
      hobbies: this.hobbies(),
    };

    this.isLoading.set(true);
    const response = await this.formApi.sendUser(formData);
    this.isLoading.set(false);

    if (response.type === 'success') {
      this.responseData.set(response.data);
    } else {
      this.errorResponse.set(response.errors[0]);
    }
  }

  protected readonly ETechnologyNames = ETechnologyNames;
}
