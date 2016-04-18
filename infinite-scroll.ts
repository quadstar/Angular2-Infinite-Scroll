import {Directive, Output, EventEmitter} from 'angular2/core';
@Directive({
    selector: '[infiniteScroll]',
    host: {
        '(window:scroll)': 'scrollEvents.next()'
    }
})
export class InfiniteScroll {
    @Output() scrolling = new EventEmitter();

    public scrollEvents: EventEmitter<Event>;

    constructor() {
        this.scrollEvents = new EventEmitter<Event>();
        this.scrollEvents
            .debounceTime(250)
            .subscribe(e => {
                if (typeof document === 'object' && typeof window === 'object') {
                    if (document.activeElement.scrollHeight * .80 < window.innerHeight + document.activeElement.scrollTop) {
                        this.scrolling.next({});
                    }
                }
            });
    }
}
