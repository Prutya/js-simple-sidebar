(function() {
  var sidebarDisplayWidth = "25%";
  var sidebarHideWidth = "0";

  var sidebar = document.getElementById('sidebar');
  var contentWrapper = document.getElementById('content-wrapper');
  var sidebarIsOpened = false;

  function openSidebar() {
    sidebar.style.width = sidebarDisplayWidth;
    contentWrapper.style.marginLeft = sidebarDisplayWidth;
    sidebarIsOpened = true;
  }

  function closeSidebar() {
    sidebar.style.width = sidebarHideWidth;
    contentWrapper.style.marginLeft = sidebarHideWidth;
    sidebarIsOpened = false;
  }

  function toggleSidebar() {
    if (sidebarIsOpened) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
})();
