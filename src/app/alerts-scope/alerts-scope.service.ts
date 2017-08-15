import { Injectable } from '@angular/core';
import { AlertsScope } from './alerts-scope';

let alertNotices: AlertsScope[] = [
  {
    id: 1,
    type: 'Fisioterapia',
    descs: [
      'Apertar a esfera de plástico 80 vezes com cada mão',
      'Fazer exercício respiratório',
      'Fazer bombeamento com a panturilha'
    ]
  },
  {
    id: 2,
    type: 'Enfermagem',
    descs: [
      'Higienizar a ferida com água e sabão',
      '30 minutos de nebulização',
      'Fazer curativo na escara'
    ]
  }
];

let alertSafety: AlertsScope[] = [
  {
    id: 1,
    type: 'Informação de segurança ao paciente',
    descs: [
      'Risco de queda ao transitar sozinho',
      'Isolamento',
      'Só pode sair do leito acompanhado'
    ]
  }
];

let alertAllergies: AlertsScope[] = [
  {
    id: 1,
    type: 'Alergias',
    descs: [
      'Sulfa',
      'Iodo'
    ]
  }
];

let alertInfo: AlertsScope[] = [
  {
    id: 1,
    type: 'Informações gerais ao paciente',
    descs: [
      'Não permita que nenhum profissional de saúde toque em você antes de higienizar as mãos',
      'Todo profissional deve checar seu nome completo'
    ]
  }
];

@Injectable()
export class AlertsScopeService {

  constructor() { }

  getAlertNotices() {
    return alertNotices;
  }

  getAlertNoticesQtd() {
    let qtd: number = 0;
    for (let entry of alertNotices) {
      qtd += entry.descs.length;
    }
    return qtd;
  }

  getAlertSafety() {
    return alertSafety;
  }

  getAlertSafetyQtd() {
    let qtd: number = 0;
    for (let entry of alertSafety) {
      qtd += entry.descs.length;
    }
    return qtd;
  }

  getAlertAllergies() {
    return alertAllergies;
  }

  getAlertAllergiesQtd() {
    let qtd: number = 0;
    for (let entry of alertAllergies) {
      qtd += entry.descs.length;
    }
    return qtd;
  }

  getAlertInfo() {
    return alertInfo;
  }

  getAlertInfoQtd() {
    let qtd: number = 0;
    for (let entry of alertInfo) {
      qtd += entry.descs.length;
    }
    return qtd;
  }

}
