/**
 * Created by t.perroin on 21/07/2016.
 */
/**
 * Created by t.perroin on 21/07/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'div[project-menu]',
    template: `
            <div class="ui small inverted grey vertical menu">
                <div class="active item">
                    Your projects
                </div>
                <div class="item">
                    Home
                    <div class="menu">
                        <a class="item">Search</a>
                        <a class="item">Add</a>
                        <a class="item">Remove</a>
                    </div>
                </div>
                <a class="item"><i class="grid layout icon"></i> Browse </a>
                <a class="item">Messages </a>
                <div class="ui dropdown item">More <i class="dropdown icon"></i>
                    <div class="menu">
                        <a class="item"><i class="edit icon"></i> Edit Profile</a>
                        <a class="item"><i class="globe icon"></i> Choose Language</a>
                        <a class="item"><i class="settings icon"></i> Account Settings</a>
                    </div>
                </div>
            </div>
    `
})
export class ProjectMenuComponent {
    /*heroes:Hero[] = [];

     constructor(private heroService:HeroService) {
     }

     ngOnInit() {
     this.heroService.getHeroes()
     .then(heroes => this.heroes = heroes);
     }*/
}