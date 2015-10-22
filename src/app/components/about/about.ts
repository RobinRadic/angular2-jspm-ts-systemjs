///<reference path='../../../../jspm_packages/npm/angular2@2.0.0-alpha.44/bundles/typings/angular2/angular2.d.ts'/>
import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {NameList} from '../../services/name_list';

@Component({
  selector: 'about',
  templateUrl: './app/components/about/about.html',
  directives: [CORE_DIRECTIVES]
})
export class AboutCmp {
  constructor(public list: NameList) {}
  addName(newname): boolean {
    this.list.add(newname.value);
    newname.value = '';
    // prevent default form submit behavior to refresh the page
    return false;
  }
}
