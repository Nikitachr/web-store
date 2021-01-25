import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { marginAnimation } from 'src/app/shared/animations/margin.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [marginAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
