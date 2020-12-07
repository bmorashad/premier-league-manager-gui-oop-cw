import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dark-mode-switch',
	templateUrl: './dark-mode-switch.component.html',
	styleUrls: ['./dark-mode-switch.component.css']
})
export class DarkModeSwitchComponent implements OnInit {
	onToggle() {
		let dataTheme = document.documentElement.getAttribute('data-theme')
		if(dataTheme == 'dark') {
			document.documentElement.setAttribute('data-theme', 'light');
			document.querySelectorAll('.dark').forEach(dark => dark.setAttribute('data-theme', 'light'));
		} else {
			document.documentElement.setAttribute('data-theme', 'dark');
			document.querySelectorAll('.dark').forEach(dark => dark.setAttribute('data-theme', 'dark'));
		}
	}
	constructor() { }

	ngOnInit(): void {
	}

}
