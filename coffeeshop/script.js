function openTab(tabId, button) {
	var tabContents = document.getElementsByClassName('tab-content');
	var tabButtons = document.getElementsByClassName('tab-button');
	// Hide all tab contents
	for (var i = 0; i < tabContents.length; i++) {
		tabContents[i].style.display = 'none';
	}

	for (var i = 0; i < tabButtons.length; i++) {
		tabButtons[i].classList.remove('active');
	}

	// Show the selected tab content
	var selectedTab = document.getElementById(tabId);
	if (selectedTab) {
		selectedTab.style.display = 'block';
	}

	button.classList.add('active');
}
