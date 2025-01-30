import { Component, inject } from "@angular/core";
import { HomeService } from "../services/home.service";

@Component({
	selector: "app-home",
	imports: [],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
	host: {
		class: "flow",
	},
})
export default class HomeComponent {
	private homeService = inject(HomeService);

	public listClients = this.homeService.clients;
	public listTestimonials = this.homeService.testimonials;
	public listFaqs = this.homeService.faqs;
}
