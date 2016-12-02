chrome.devtools.panels.create(
    'SAP GW TC Builder',
    null, // No icon path
    'Panel/NetworkRequests.html',
    null // no callback needed
);


chrome.devtools.panels.elements.createSidebarPane("Settings",
    function(sidebar) {
        // sidebar initialization code here
        sidebar.setObject({ some_data: "Some data to show" });
});
