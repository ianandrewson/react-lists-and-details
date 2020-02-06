import React from 'react';
import { shallow } from 'enzyme';
import Main from '../components/Main/Main.js';

const mockApi = jest.mock('./mtgApi.js');

describe('mtgAPI mock call', () => {
  it('can mock a fetch from magic API and set state', () => {
    const wrapper = shallow(<Main />);
    wrapper.instance();

    expect(mockApi).toHaveBeenCalled();
    expect(wrapper.state).toEqual([
      { card: 'Best card in the game', power: 'infinity' },
      { card: 'Banned card', power: 'A Million' }
    ]);
  });
});
