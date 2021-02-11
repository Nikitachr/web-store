import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

  products$ = this.route.data.pipe(
    map(res => res.data.products)
  );
  categories$ = this.route.data.pipe(
    map(res => res.data.category.data)
  );

  constructor(private route: ActivatedRoute) { }

}
