document.addEventListener('DOMContentLoaded', function () {
  var projects = Array.prototype.slice.call(document.querySelectorAll('.project'), 0);
  var visible = 0
  var project_links = document.querySelectorAll('.project-link');
  projects[0].style.display = "block"
  for (var i = 0, len = projects.length; i < len; i++) {
    project_links[i].id = i.toString()
    project_links[i].onclick = function (clickdata) {
      idx = Number(clickdata.target.id)
      projects[visible].style.display = "none"
      projects[idx].style.display = "block"
      visible = idx
    }
  }
})