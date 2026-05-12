import { Component, computed, signal } from '@angular/core';
import { NgFor } from '@angular/common';

interface ProjectItem {
  id: number;
  title: string;
  category: 'html-css' | 'wordpress';
  image: string;
  viewLink: string;
  codeLink: string;
}

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  filter = signal<'all' | 'html-css' | 'wordpress'>('all');

  projects: ProjectItem[] = [
    { id: 1, title: 'Joinery Website', category: 'wordpress', image: '/projects/1.webp', viewLink: 'https://www.lohanjoinery.ie', codeLink: '' },
    { id: 2, title: 'E-commerce Website', category: 'wordpress', image: '/projects/2.webp', viewLink: 'https://4allyouroccasions.ie/', codeLink: '' },
    { id: 3, title: 'Cancer Care Website', category: 'html-css', image: '/projects/3.webp', viewLink: 'https://www.necret.ie/', codeLink: 'https://github.com/athanri/NECRET' },
    { id: 4, title: 'Carpentry Services', category: 'wordpress', image: '/projects/4.webp', viewLink: 'https://galwaycarpenters.ie/', codeLink: '' },
    { id: 5, title: 'Euro American Cancer Forum', category: 'html-css', image: '/projects/5.webp', viewLink: 'https://euroamericanforumoncancer.org/', codeLink: 'https://github.com/athanri/aicri' },
    { id: 6, title: 'Tribes Basketball', category: 'html-css', image: '/projects/6.webp', viewLink: 'https://athanri.github.io/TribesBasketballClub/', codeLink: 'https://github.com/athanri/TribesBasketballClub' },
  ];

  filteredProjects = computed(() =>
    this.filter() === 'all'
      ? this.projects
      : this.projects.filter(project => project.category === this.filter())
  );

  selectFilter(value: 'all' | 'html-css' | 'wordpress') {
    this.filter.set(value);
  }
}
