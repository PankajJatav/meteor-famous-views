## v1.0.0-pre.6

* Data context fix inside of DOMElement

## v1.0.0-pre.5

* `FView.wrap()`, `FView.wrapComponent()`, existing wrappers modularized
* Scene now handles data context correctly and has _onRender
* Added delayed init with FView.ready(), detect famous global
* Added basic wrappers for Camera, PointLight, Mesh
* Fixed argument mutation in Node attrUpdate / argsFromVecTransitionCB

## v1.0.0-pre.4

- Fix DOMElement not always rendering properly
- Some early cleanup code, but no handling of children yet.

## v1.0.0-pre.3

- Fix Scene attach behaviour, add appropriate CSS as relevant (see README)
- Allow longform size attributes, and shortform "RS" for "renderSize" (see README)
- BREAKING CHANGE (who's using this already?).  The size separator is now
  a semicolon (";"), and relative separator a comma (","), e.g.
  `size="absolute: 10; relative: 0.5,-10; renderSize"` or abbreviated form.

## v1.0.0-pre.2

- Attributes (style, class, general attributes) in DOMElement (no tagName yet)

## v1.0.0-pre.1

- First release