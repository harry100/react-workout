import React from 'react';
import ArticleList from '../ArticleList';

// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: {id: 'a'},
      b: {id: 'b'},
    },
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
    expect(wrapper).toMatchSnapshot();
    // .toJSON();

    // expect(tree).toMatchSnapshot();
  });
});
