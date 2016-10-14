(function() {
  var sidebarDisplayWidth = "25%";
  var sidebarHideWidth = "0";

  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('content');
  var sidebarIsOpened = false;

  function openSidebar() {
    sidebar.style.width = sidebarDisplayWidth;
    content.style.marginLeft = sidebarDisplayWidth;
    sidebarIsOpened = true;
  }

  function closeSidebar() {
    sidebar.style.width = sidebarHideWidth;
    content.style.marginLeft = sidebarHideWidth;
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
