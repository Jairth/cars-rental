import { NgClass } from "@angular/common";
import { Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-menu",
	imports: [RouterLink],
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
