import { Component } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent {
  $isLoaded = new BehaviorSubject(false);

  ngOnInit() {
    timer(1500).subscribe(() => {
      this.$isLoaded.next(true);
    });
  }
}
