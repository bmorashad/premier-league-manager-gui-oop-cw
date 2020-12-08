import { Component, EventEmitter, Output } from '@angular/core';
import {DarkModeService} from './dark-mode.service';

@Component({
	selector: 'dark-mode-switch',
	templateUrl: './dark-mode-switch.component.html',
	styleUrls: ['./dark-mode-switch.component.css']
})
export class DarkModeSwitchComponent {
	darkIcon: string = "../../../assets/icons/dark-mode-light.png"
	lightIcon: string = "../../../assets/icons/dark-mode-dark.png"
	icon: string = this.lightIcon;
	@Output() mode = new EventEmitter<"light" | "dark">()
	darkMode: boolean = false

	onToggle() {
		if(this.darkMode) {
			this.darkMode = false;
			this.icon = this.lightIcon
			this.darkModeService.lightMode()
			this.mode.emit("light")
		} else {
			this.darkMode = true;
			this.icon = this.darkIcon
			this.darkModeService.darkMode()
			this.mode.emit("dark")
		}
	}
	constructor(private darkModeService: DarkModeService) {}

}
