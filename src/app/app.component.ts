import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokemon-books';

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    // ブラウザを閉じる前に実行したい処理を記述
    localStorage.removeItem('offset');
  }
}
