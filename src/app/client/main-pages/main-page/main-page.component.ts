import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIES } from 'src/app/shared/providers/category.provider';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {

  constructor(@Inject(CATEGORIES) public categories$: Observable<Category>, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
