import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-body',
  imports: [Hero, About, Projects, Contact],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
