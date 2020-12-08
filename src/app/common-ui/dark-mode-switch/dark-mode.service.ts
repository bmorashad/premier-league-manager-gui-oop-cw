import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
	darkMode() {
		let dataTheme = document.documentElement.getAttribute('data-theme')
		if(dataTheme != 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
			document.querySelectorAll('.dark').forEach(dark => dark.setAttribute('data-theme', 'dark'));
		} 
	}
	lightMode() {
		let dataTheme = document.documentElement.getAttribute('data-theme')
		if(dataTheme != 'light') {
			document.documentElement.setAttribute('data-theme', 'light');
			document.querySelectorAll('.dark').forEach(dark => dark.setAttribute('data-theme', 'light'));
		}
	}
}
