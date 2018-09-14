import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

/* Why is not working?
 FAIL  src\Link.test.js
  ● Test suite failed to run

    TypeError: Path must be a string. Received undefined

      at assertPath (path.js:28:11)
      at Object.relative (path.js:558:5)
*/

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
