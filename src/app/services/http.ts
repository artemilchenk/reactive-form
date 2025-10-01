import { Injectable } from '@angular/core';
import { EServerResponse, IFormDto, TPostResponse } from '../../types/form-data';

@Injectable({
  providedIn: 'root',
})
export class Http {
  async fetchUser(email: string): Promise<string | null> {
    await new Promise<string | null>((resolve, reject) => {
      setTimeout(resolve, 2000);
    });

    return email === 'test2@test.test' ? 'test2@test.test' : null;
  }

  async post(dto: IFormDto): Promise<TPostResponse> {
    const user = await this.fetchUser(dto.email);
    if (user) {
      return { type: EServerResponse.ERROR, errors: ['This user already exists'] };
    } else {
      return { type: EServerResponse.SUCCESS, data: dto };
    }
  }
}
