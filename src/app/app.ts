import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Body } from './body/body';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Body, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('piercejAngular');
}
