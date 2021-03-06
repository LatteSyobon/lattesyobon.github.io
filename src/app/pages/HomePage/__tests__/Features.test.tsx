import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Products } from '../Products';
import i18next from 'i18next';

const shallowRenderer = createRenderer();

describe('<Features />', () => {
  it.only('should render with en translations', () => {
    i18next.changeLanguage('en');
    shallowRenderer.render(<Products />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render with de translations', () => {
    i18next.changeLanguage('de');
    shallowRenderer.render(<Products />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render different after language change', () => {
    i18next.changeLanguage('en');
    shallowRenderer.render(<Products />);
    const renderedOutput1 = shallowRenderer.getRenderOutput();

    i18next.changeLanguage('de');
    shallowRenderer.render(<Products />);
    const renderedOutput2 = shallowRenderer.getRenderOutput();

    expect(renderedOutput1).not.toEqual(renderedOutput2);
  });
});
