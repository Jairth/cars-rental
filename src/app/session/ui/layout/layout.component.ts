import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MenuComponent } from "../../../shared/components/menu/menu.component";

@Component({
	selector: "app-layout",
	imports: [RouterOutlet, MenuComponent],
	templateUrl: "./layout.component.html",
	styleUrl: "./layout.component.css",
})
export default class LayoutComponent {}
