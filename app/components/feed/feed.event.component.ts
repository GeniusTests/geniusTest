import {Component, Input} from "@angular/core";
/**
 * Created by t.perroin on 21/07/2016.
 */

export class FeedEvent {
    id: number;
    labelUrl: string;
    contentSummary: string;
    date: any;
    extraText:string;
    meta:string;
}

@Component({
    selector: 'div[feed-event]',
    properties: ['data'],
    template: `
        <div class="label">
            <!--<img src="{{ev.labelUrl}}">-->
        </div>
        <div class="content">
            <div class="summary">{{ev.contentSummary}}
                <div class="date">{{ev.date}}</div>
            </div>
            <div class="extra text">{{ev.extraText}}</div>
            <div class="meta">
                <a class="like"><i class="like icon"></i> {{ev.meta}} </a>
            </div>
        </div>
        <div class="ui divider"></div>
    `
})
export class FeedEventComponent {
    @Input() ev;
    /*heroes:Hero[] = [];

     constructor(private heroService:HeroService) {
     }

     ngOnInit() {
     this.heroService.getHeroes()
     .then(heroes => this.heroes = heroes);
     }*/
}