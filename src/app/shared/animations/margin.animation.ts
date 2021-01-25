import { animate, state, style, transition, trigger } from '@angular/animations';

export const marginAnimation = trigger('hoverUnhover', [
  // ...
  state('hover', style({
    marginTop: '-30px'
  })),
  state('unhover', style({
    marginTop: '10px'
  })),
  transition('hover <=> unhover', [
    animate('0.3s ease-in-out')
  ])
]);
