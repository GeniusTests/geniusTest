/**
 * Created by t.perroin on 30/06/2016.
 */
import {Component} from '@angular/core';

import { FeedComponent } from './components/feed/feed.component';
import { ProjectMenuComponent } from './components/project/project.menu.component';

@Component({
    selector: 'geniustest',
    directives: [FeedComponent, ProjectMenuComponent],
    template:
    `
    <div class="ui main container" style="margin-top: 7em;">
        <div class="ui two column right aligned grid">
            <div feed class="left floated right aligned thirteen wide column"></div>
            <div project-menu class="right floated left aligned three wide column"></div>
        </div>
    </div>
    `
})
export class AppComponent {
}