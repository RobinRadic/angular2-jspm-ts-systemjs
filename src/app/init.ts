import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import { Component, View, bind, bootstrap } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, APP_BASE_HREF} from 'angular2/router';
import {AppCmp} from 'app/components/app/app';

bootstrap(AppCmp, [
    ROUTER_BINDINGS,
    bind(ROUTER_PRIMARY_COMPONENT).toValue(AppCmp)
]);
