import {inject} from 'aurelia-framework';
import {ProjectDetail} from "./projectDetail";
import {Router} from "aurelia-router";
@inject(ProjectDetail, Router)
export class List {
  heading = 'Project Details';

  projects = [];

  constructor(data, router) {
    this.service = data;
    this.currentPage = 0;
    this.router = router;
  };

  gotoProject(project){
    this.router.navigateToRoute('edit', { id: project.id })
  };

  new(){
    this.router.navigateToRoute('create');
  };

  getData() {
    //implement spinner

    this.currentPage++;
    return this.service.getAll()
      .then(projects => {
       this.projects = projects;

     });

  }

  activate() {
    return this.getData();
  }
}
