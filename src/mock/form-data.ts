import { ETechnologyNames, TTechnologies } from '../types/form-data';

export const Technologies: TTechnologies = {
  [ETechnologyNames.ANGULAR]: {
    title: 'Angular',
    values: ['1.1.1', '1.2.1', '1.3.3'],
  },
  [ETechnologyNames.REACT]: {
    title: 'React',
    values: ['2.1.2', '3.2.4', '4.3.1'],
  },
  [ETechnologyNames.VUE]: {
    title: 'Vue',
    values: ['3.3.1', '5.2.1', '5.1.3'],
  },
  [ETechnologyNames.DEFAULT]: { title: '', values: [] },
};
