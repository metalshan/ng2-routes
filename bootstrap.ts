/**
	this is the bootstraper of the Angular 2 application	
*/
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy} from 'angular2/router';


import {App} from './app.ts';
bootstrap(App, [ROUTER_PROVIDERS, ROUTER_DIRECTIVES, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
