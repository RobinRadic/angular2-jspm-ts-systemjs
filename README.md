
### Stuff used
Angular 2
SystemJS + jspm
Typescript 
Grunt
Jade 
SCSS


### Remarks

##### Jade - Removing brackets

- [Angular 2 template syntax](http://victorsavkin.com/post/119943127151/angular-2-template-syntax) blog post covering this in great detail

You can replace all the brackets in your template with bind-, on-, and bindon-.
```html
<some-component [prop]="someExp" (event)="someEvent()" [(two-way-prop)]="someExp"></show-title>
```
is the same as
```html
<some-component bind-prop="someExp" on-event="someEvent()" bindon-two-way-prop="someExp"></show-title>
```