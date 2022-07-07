const items = document.querySelectorAll(".wp-block-cjsb-accordion__button");

function toggleAccordion() {
	const itemToggle = this.getAttribute("aria-expanded");

	if (itemToggle == "false") {
		this.setAttribute("aria-expanded", "true");
	} else {
		this.setAttribute("aria-expanded", "false");
	}
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
