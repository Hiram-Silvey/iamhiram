var projects = document.querySelectorAll('.project');
var project_dict = {}
var visible = ""

for (var i = 0, len = projects.length; i < len; i++) {
  if (i == 0) {
    visible = projects[i].id
    projects[i].style.display = "block"
  }
  project_dict[projects[i].id] = projects[i]
}

function makeVisible(id) {
  project_dict[visible].style.display = "none"
  project_dict[id].style.display = "block"
  visible = id
}