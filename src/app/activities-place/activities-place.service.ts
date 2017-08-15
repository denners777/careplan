import { Injectable } from '@angular/core';
import { Activities } from './activities';

let activities: Activities[] = [
  { id: 1, status: 'done ok', type: 'Fonoaudiologia', title: 'Fazer Exercício respiratório', comments: [] },
  { id: 2, status: '', type: 'Fonoaudiologia', title: 'Andar 10 minutos', comments: [''] },
  { id: 3, status: '', type: 'Fonoaudiologia', title: 'Bombear a panturrilha', comments: [''] },
  { id: 4, status: '', type: 'Fonoaudiologia', title: 'Mover a perna pra cima e pra baixo', comments: [''] },
  { id: 5, status: 'done wrong', type: 'Fonoaudiologia', title: 'Beber 2 litros de água', comments: [''] },
  { id: 6, status: '', type: 'Fonoaudiologia', title: 'Respirar devagar', comments: ['Concentre-se bem, você consegue.'] },
];

@Injectable()
export class ActivitiesPlaceService {

  constructor() { }

  getActivitiesPlace() {
    return activities;
  }

}
