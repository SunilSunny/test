import { Options } from 'angular2-notifications/interfaces/options.type';

export const NOTIFICATION_OPTIONS: Options = <Options>{
  timeOut: 5000,
  lastOnBottom: true,
  clickToClose: true,
  clickIconToClose : false,
  maxLength: 0,
  maxStack: 7,
  showProgressBar: false,
  pauseOnHover: true,
  preventDuplicates: false,
  preventLastDuplicates: 'visible',
  rtl: false,
  theClass: '',
  animate: 'scale',
  position: ['bottom', 'right']
};
