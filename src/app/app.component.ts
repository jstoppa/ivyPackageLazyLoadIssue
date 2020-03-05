import { Component, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
 
  @ViewChild('content', { read: ViewContainerRef, static: true })
  content: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef
  ) {

  }

  ngAfterViewInit(): void {
    import('my-lib').then(c => {
      const factory = this.resolver.resolveComponentFactory(c.MyLibComponent);
      const confRef = this.vcRef.createComponent(factory);
      this.content.insert(confRef.hostView);
    });
  }

}
