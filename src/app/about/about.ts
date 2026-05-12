import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  activeTab = signal('skills');

  selectTab(tab: string) {
    this.activeTab.set(tab);
  }
}

