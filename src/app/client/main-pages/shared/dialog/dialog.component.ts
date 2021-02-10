import { Component, OnInit } from '@angular/core';
import { EButtonType } from 'src/app/shared/components/navigation-button/navigation-button.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  type = EButtonType;
  constructor() { }

  ngOnInit(): void {
  }

}
