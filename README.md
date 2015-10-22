Angular 2 - Typescript - SystemJS - JSPM - Grunt 
==============

And jade.. and scss..

## Install
- `git clone https://github.com/robinradic/angular2-jspm-ts-systemjs a2jspm`
- `cd a2jspm`
- `npm install`
- `jspm install`
- `tsd install`


##### Gruntfile.ts
The [RobinRadic/grunt-cli](https://github.com/RobinRadic/grunt-cli) fork has `liftoff` and `interpret` implemented, so it'll load `Gruntfile.ts` like its javascript.



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