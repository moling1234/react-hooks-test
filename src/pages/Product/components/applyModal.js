import { load } from '@ifchange-micro/plugin';

export default props =>
  load('tob-login').then(({ applyModal }) => applyModal(props));
