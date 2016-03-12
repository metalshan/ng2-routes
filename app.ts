import {Component,View} from 'angular2/core';
import {RouteConfig, RouterOutlet, Router, Route, RouterLink} from 'angular2/router';

import {Route1} from './components/Route1';
import {Route2} from './components/Route2';


@RouteConfig([
	new Route({ path: '/', component: Route1, name: 'Route1'}),
	new Route({ path: '/route2', component: Route2, name: 'Route2' }),
])

@Component({
    selector: 'app',
    directives: [RouterOutlet, RouterLink],
	template: `
	<a [routerLink]="['Route1']">Route1</a>
	<a [routerLink]="['Route2']">Route2</a>
		<router-outlet></router-outlet>
	`
})

export class App {
}

