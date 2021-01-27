import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TimelineMax, gsap, CSSPlugin } from 'gsap';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionPanelComponent implements OnInit {

  @Input() title: string;

  @ViewChild('text', { static: true }) text: ElementRef;
  @ViewChild('panel', { static: true }) panel: ElementRef;

  expand: boolean;
  anime: TimelineMax;

  constructor() {
    gsap.registerPlugin( CSSPlugin );
  }

  ngOnInit(): void {
    this.anime = new TimelineMax();
    this.anime.set(this.panel.nativeElement, { height: "60" });
    this.anime.set(this.text.nativeElement, { opacity: "0" });
  }

  onExpand(): void {
    this.expand = !this.expand;
    if (this.expand) {
      this.playInAnimation();
    } else {
      this.playOutAnimation();
    }
  }

  playInAnimation(): void {
    this.anime.to(this.panel.nativeElement, 0.5, { height: 'auto' })
      .to(this.text.nativeElement, 0.5, { opacity: "1" }, '<');
  }

  playOutAnimation(): void {
    this.anime.to(this.panel.nativeElement, 0.5, { height: "60" })
      .to(this.text.nativeElement, 0.5, { opacity: "0" }, '<');
  }
}
