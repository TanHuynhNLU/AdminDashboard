const main = () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarCollapseBtn = document.getElementById("sidebar-collapse-button");
  const mainSection = document.getElementById("main-section");

  sidebarCollapseBtn.onclick = () => {
    sidebar.classList.toggle("sidebar-collapse");
    mainSection.classList.toggle('pl-[--sidebar-collapse-width]')
    mainSection.classList.toggle('pl-[--sidebar-width]')
  };
};

document.addEventListener("DOMContentLoaded", main);
