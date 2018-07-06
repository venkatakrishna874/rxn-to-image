import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  Renderer2,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appRxnToImage]'
})
export class RxnToImageDirective implements OnInit {
  @Input()
  set appRxnToImage(svg: any) {
    const decodedSvg = atob(svg);
    this.applySvg(svg);
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  ngOnInit() {}

  private applySvg(svg) {
    this.templateRef.elementRef.nativeElement.innerHTML = svg;
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
