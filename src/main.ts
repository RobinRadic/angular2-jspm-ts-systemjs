//import deps
import 'zone.js';
import 'reflect-metadata';
//you may need es6-shim if you get an error relating to list.fill
//import 'es6-shim';

//if using babel or typescript compiler:
import { Component, View, bootstrap } from 'angular2/angular2';

@Component({
    selector: 'test-app'
})
@View({
    template: '<h4>Hello {{name}}</h4>'
})
class TestApp {
    name:string;

    constructor() {
        this.name = 'Angular2';
        setTimeout(() => {
            this.name = 'Angular2!!!'
        }, 1500);
    }
}

//start our app
bootstrap(TestApp);
