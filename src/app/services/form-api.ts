import { Injectable } from '@angular/core';
import { IFormDto, TPostResponse } from '../../types/form-data';
import { Http } from './http';

@Injectable({
  providedIn: 'root',
})
export class FormApi {
  constructor(private http: Http) {}

  async sendUser(dto: IFormDto): Promise<TPostResponse> {
    console.log('Sending user');
    return await this.http.post(dto);
  }
}
