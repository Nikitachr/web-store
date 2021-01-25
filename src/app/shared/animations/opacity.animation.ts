import { animate, state, style, transition, trigger } from '@angular/animations';

export const opacityAnimation = trigger('opacity', [
  // ...
  transition(':enter', [
    style({ opacity: 0 }),
    animate('3000ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('3000ms', style({ opacity: 0 }))
  ])
]);
