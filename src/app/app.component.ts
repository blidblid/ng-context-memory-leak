import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show = true;

  toggle(): void {
    this.show = false;
    setTimeout(() => (this.show = true), 100);
  }
}
