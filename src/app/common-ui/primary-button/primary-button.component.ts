import { Component, Input } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent {
	types: string[] = ["normal", "danger"]
	@Input() outline: boolean = false
	@Input() type: string = "normal"

	createRipple(event: any) {
		const button: any = event.currentTarget;
		const circle = document.createElement("span");
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
		circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
		circle.classList.add("ripple");

		const ripple = button.getElementsByClassName("ripple")[0];

		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
	}
}
