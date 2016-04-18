# Angular2-Infinite-Scroll
Simple attribute directive for Angular 2.  

The directive fires an event when scrolling a percentage of the page's height.


example use case:
```typescript

@Component({
    template: `
      <div infiniteScroll (scrolling)="fetchData()">
        <ul>
          <li *ngFor="#datum of data">
            {{datum}}
          </li>
        </ul>
      </div>
    `
    directives: [InfiniteScroll],
})
export class App {
  data = [];
  constructor() {
      for(var i = 0; i < 100; i++){
        this.data.push(i);
      }
  }
  fetchData(){
    for(var i = data.length; i < data.length + 100; i++){
      this.data.push(i);
    }
  }

}

```
