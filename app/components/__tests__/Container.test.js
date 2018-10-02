import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';
import { Container, styles } from '../Container';

it('exports a styles object', () => {
  expect(typeof styles).toBe('object');
});

it('renders successfully without children', () => {
  const rendered = renderer.create(<Container />).toJSON();
  console.log(rendered);
  expect(rendered).toBeTruthy();
});

it('renders children props', () => {
  const rendered = renderer
    .create(
      <Container>
        <View />
      </Container>,
    )
    .toJSON();
  expect(rendered).toMatchSnapshot();
});

it('uses the specified backgroundColor if provided', () => {
  const rendered = renderer
    .create(
      <Container backgroundColor="red" />,
    )
    .toJSON();
  expect(rendered).toMatchSnapshot();
});
