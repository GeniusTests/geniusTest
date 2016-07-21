/**
 * Created by t.perroin on 21/07/2016.
 */
import {Component} from '@angular/core';
import {FeedEvent, FeedEventComponent} from "./feed.event.component";

export class Feed {
    id: number;
    events: FeedEvent[];
}

@Component({
    selector: 'div[feed]',
    directives: [FeedEventComponent],
    template: `
            <div class="ui piled segment">
                <div class="ui small feed">
                    <div *ngFor="let ev of events" feed-event [ev]="ev" class="event"></div>
                    <button class="fluid ui blue basic button">More</button>
                </div>
            </div>
    `
})
export class FeedComponent {
    events:FeedEvent[] = [
        {
            id: 1,
            labelUrl: "test",
            contentSummary: "Perroin Thibault</a> added <a>2 new photos</a> of you",
            date: "4 days ago",
            extraText: "lorem  ipsum",
            meta: "10 likes"
        },
        {
            id: 2,
            labelUrl: "test",
            contentSummary: "Justen Kitsune</a> added <a>2 new photos</a> of you",
            date: "4 days ago",
            extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.",
            meta: "41 likes"
        }
    ];
    /*heroes:Hero[] = [];

    constructor(private heroService:HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }*/
}