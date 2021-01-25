import { animate, state, style, transition, trigger } from '@angular/animations';

export const marginAnimation = trigger('hoverUnhover', [
  // ...
  state('hover', style({
    marginTop: '-30px'
  })),
  state('unhover', style({
    marginTop: '0px'
  })),
  transition('hover <=> unhover', [
    animate('0.2s ease-in-out')
  ])
]);
