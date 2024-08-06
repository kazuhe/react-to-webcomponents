import r2wc from '@r2wc/react-to-web-component';
import { Greeting } from './Greeting';

customElements.define(
  'c-greeting',
  r2wc(Greeting, {
    props: { text: 'string' },
  })
);
