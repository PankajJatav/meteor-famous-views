function fviewWithNode(source) {
  var fview = new MeteorFamousView(null, null, 'testNode', source);
  fview.node = new famous.core.Node();
  fview._attrUpdate = FView._attrUpdate;
  return fview;
}

var Node = famous.core.Node;

Tinytest.add('famous-views - Wrappers - Node - size component', function(test) {
  var fview = fviewWithNode('wrappers/node/sizeComponent');

  fview._attrUpdate('size', "A:100,renderSize,R:2:10");
  var result = fview.size.getValue();
  // ok i'm doing something wrong or this is a bug :)
  if (!result.sizeMode)
    result.sizeMode = fview.node.getSizeMode();
  test.equal(result.sizeMode, { 0:Node.ABSOLUTE_SIZE, 1:Node.RENDER_SIZE, 2:Node.RELATIVE_SIZE }, 'modes from A:,renderSize,R:');
  test.equal(result.absolute.x, 100, 'setAbsolute');
  test.equal(result.proportional.z, 2, 'setProportional via R');
  test.equal(result.differential.z, 10, 'setDifferential via R');

  fview._attrUpdate('size', "P:5,D:-10");
  var result = fview.size.getValue();
  // ok i'm doing something wrong or this is a bug :)
  if (!result.sizeMode)
    result.sizeMode = fview.node.getSizeMode();
  test.equal(result.sizeMode, { 0:Node.RELATIVE_SIZE, 1:Node.RELATIVE_SIZE, 2:Node.DEFAULT_SIZE });
  test.equal(result.proportional.x, 5);
  test.equal(result.differential.x, 0);
  test.equal(result.proportional.y, 1);
  test.equal(result.differential.y, -10);
});

Tinytest.add('famous-views - Wrappers - Node - non-size builtins', function(test) {
  var fview = fviewWithNode('wrappers/node/nonSizeBuiltins');
  fview._attrUpdate('position', "[1,2,3]");
  test.equal(fview.node.getPosition(), {0:1, 1:2, 2:3});
});

Tinytest.add('famous-views - Wrappers - Node - non-size components', function(test) {
  var fview = fviewWithNode('wrappers/node/nonSizeComponents');
  fview.position = new famous.components.Position(fview.node);

  fview._attrUpdate('position', { value: [1,2,3] });
  test.equal(fview.position.getValue(),
    { component: "Position", x: 1, y: 2, z: 3 });
});

Tinytest.addAsync('famous-views - Wrappers - Node - _onRender', function(test, complete) {
  Template.node2.helpers({
    onRender: function() {
      // should we look for anything in particular?
      complete();
    }
  });

  Blaze.render(Template.node2, commonDiv);
});