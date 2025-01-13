import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@shared/components/header/header.component";

@Component({
	selector: "app-layout-general",
	imports: [RouterOutlet, HeaderComponent],
	templateUrl: "./layout-general.component.html",
	styleUrl: "./layout-general.component.css",
})
export default class LayoutGeneralComponent {}
