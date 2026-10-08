// story tabs scroll sync
const SCROLL_PROGRESS = new Map();
let ticking = false;

const scrollGroupItems = document.querySelectorAll("[scroll-group]");

scrollGroupItems.forEach((item) => {
	item.addEventListener("scroll", handleGroupScroll);
});

function handleGroupScroll(event) {
	if (!ticking) {
		const scrollPos = event.target.scrollTop;
		const scrollHeight = event.target.scrollHeight - event.target.clientHeight;
		const name = event.target.getAttribute("scroll-group");
		if (name) {
			SCROLL_PROGRESS.set(name, scrollPos / scrollHeight);
		}

		setTimeout(() => {
			ticking = false;
		}, 40);
	}

	ticking = true;
}

// tabs
const tabs = document.querySelectorAll("button[role='tab']");

tabs.forEach((tab) => {
	tab.addEventListener("click", handleTabClick);
});

function handleTabClick(event) {
	const tab = event.target.closest('button[role="tab"]');

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

			if (!panel.hidden) {
				const scrollName = panel.getAttribute("scroll-group");
				const progress =
					scrollName && SCROLL_PROGRESS.has(scrollName)
						? SCROLL_PROGRESS.get(scrollName)
						: false;

				if (false !== progress) {
					const scrollHeight = panel.scrollHeight - panel.clientHeight;
					const scrollPos = scrollHeight * progress;
					panel.scroll({
						top: scrollPos,
						behavior: "instant",
					});
				}
			}
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
