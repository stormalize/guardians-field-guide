const tabs = document.querySelectorAll("button[role='tab']");

tabs.forEach((tab) => {
	tab.addEventListener("click", handleTabClick);
});

function handleTabClick(event) {
	const tab = event.target;

	toggleTab(tab);

	const otherTabs = tab.parentElement.querySelectorAll(
		":scope > button[role='tab']",
	);

	otherTabs.forEach((otherTab) => {
		if (otherTab !== tab) {
			toggleTab(otherTab, false);
		}
	});
}

function toggleTab(tab, open = true) {
	tab.ariaSelected = open;

	const panels = tab.ariaControlsElements;
	if (panels) {
		panels.forEach((panel) => {
			panel.hidden = !open;
		});
	} else {
		console.warn(`No panel found for tab '${tab.id}'`);
	}
}

// details auto-open
// on document load
openHashDetails(document.URL);

// on link click
navigation.addEventListener("navigate", (event) => {
	openHashDetails(event.destination.url);
});

function openHashDetails(link) {
	const url = new URL(link);

	if (url.hash) {
		const el = document.querySelector(url.hash);

		if (el && "DETAILS" === el.tagName) {
			el.open = true;
		}
	}
}
