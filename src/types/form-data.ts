export enum ETechnologyNames {
  ANGULAR = 'angular',
  REACT = 'react',
  VUE = 'vue',
  DEFAULT = 'default',
}

interface Technology {
  title: string;
  values: string[];
}

export type TTechnologies = Record<ETechnologyNames, Technology>;
export interface IHobby {
  name: string;
  duration: string;
}

export interface IFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  framework: string;
  frameworkVersion: string;
  email: string;
  hobbies: IHobby[];
}

export interface IFormDto extends IFormData {}

export enum EServerResponse {
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IPostResponseSuccess {
  type: EServerResponse.SUCCESS;
  data: any;
}

export interface IPostResponseError {
  type: EServerResponse.ERROR;
  errors: string[];
}

export type TPostResponse = IPostResponseSuccess | IPostResponseError;
