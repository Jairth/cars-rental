import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class HomeService {
	clients = [
		{
			name: "Volskwagen",
			source_mp4:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			source_webp:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.webm",
		},
		{
			name: "Toyota",
			source_mp4:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			source_webp:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.webm",
		},
		{
			name: "Chevrolet",
			source_mp4:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			source_webp:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.webm",
		},
		{
			name: "Ford",
			source_mp4:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			source_webp:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.webm",
		},
		{
			name: "Mercedes-Benz",
			source_mp4:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			source_webp:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.webm",
		},
		{
			name: "Audi",
			source_mp4:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			source_webp:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.webm",
		},
	];

	testimonials = [
		{
			name: "Rebecca Miller",
			text: "I have been using this app for a few months now and I am very happy with it. I have recommended it to a few friends and they love it too. I would recommend it to anyone who is looking for a simple, easy to use app.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dc6701d7a0b7329ccd_rebeca-miller-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "big",
		},
		{
			name: "Lily Woods",
			text: "I have been using this app for a few months now and I am very happy with it. I have recommended it to a few friends and they love it too. I would recommend it to anyone who is looking for a simple, easy to use app.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dcbcac400a4a67d328_lily-woods-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "small",
		},
		{
			name: "Mike Warren",
			text: "I have been using this app for a few months now and I am very happy with it. I have recommended it to a few friends and they love it too. I would recommend it to anyone who is looking for a simple, easy to use app.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dccdcaeb6642c97d7f_andy-smith-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "small",
		},
		{
			name: "John Smith",
			text: "I have been using this app for a few months now and I am very happy with it. I have recommended it to a few friends and they love it too. I would recommend it to anyone who is looking for a simple, easy to use app.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dc154299248ce63eb9_mike-warren-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "small",
		},
		{
			name: "Jane Smith",
			text: "I have been using this app for a few months now and I am very happy with it. I have recommended it to a few friends and they love it too. I would recommend it to anyone who is looking for a simple, easy to use app.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dcbcac400a4a67d328_lily-woods-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "big",
		},
		{
			name: "John Johnson",
			text: "I have been using this app for a few months now and I am very happy with it. I have recommended it to a few friends and they love it too. I would recommend it to anyone who is looking for a simple, easy to use app.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dccdcaeb6642c97d7f_andy-smith-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "small",
		},
	];
}
