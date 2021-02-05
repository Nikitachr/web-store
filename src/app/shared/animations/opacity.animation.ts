import { animate, state, style, transition, trigger } from '@angular/animations';

export const opacityAnimation = trigger('opacity', [
  // ...
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: '*' })),
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: 0 }))
  ])
]);
