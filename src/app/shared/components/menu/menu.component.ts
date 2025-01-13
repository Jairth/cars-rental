import { NgClass } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
	selector: "app-menu",
	imports: [],
	templateUrl: "./menu.component.html",
	styleUrl: "./menu.component.css",
	host: {
		"[class.active]": "toggle()",
	},
})
export class MenuComponent {
	public toggle = signal(false);

	isOpen() {
		this.toggle.update((value) => !value);
	}
}
