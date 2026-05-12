import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  dynamicText = signal('Pierce');
  displayedText = signal('');
  private textOptions = ['Pierce', 'A Windows Engineer', 'A Mobile Developer', 'A Web Developer'];
  private currentIndex = 0;
  private typingSpeed = 50; // milliseconds per character
  private delayBeforeDelete = 2000; // milliseconds before starting to delete
  private deleteSpeed = 30; // milliseconds per character deletion

  ngOnInit() {
    this.typeText();
  }

  private typeText() {
    const fullText = this.textOptions[this.currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        this.displayedText.set(fullText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // After typing is complete, wait and then delete
        setTimeout(() => {
          this.deleteText();
        }, this.delayBeforeDelete);
      }
    }, this.typingSpeed);
  }

  private deleteText() {
    const fullText = this.textOptions[this.currentIndex];
    let charIndex = fullText.length;

    const deleteInterval = setInterval(() => {
      if (charIndex > 0) {
        this.displayedText.set(fullText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        clearInterval(deleteInterval);
        // Move to next text and start typing
        this.currentIndex = (this.currentIndex + 1) % this.textOptions.length;
        this.typeText();
      }
    }, this.deleteSpeed);
  }
}
