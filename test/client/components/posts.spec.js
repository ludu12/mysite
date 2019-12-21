import chai, { expect } from 'chai';
import Chance from 'chance';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import axios from 'axios';
import React from 'react';
import Posts from '../../../src/client/components/posts';

chai.use(sinonChai);
const sandbox = sinon.createSandbox();
const chance = new Chance();

describe('Posts', () => {
  let wrapper;

  beforeEach(() => {
    sandbox.stub(axios, 'get');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('when rendering page before loaded', () => {

    beforeEach(async () => {
      axios.get.resolves(
        {
          data: {
            posts: []
          }
        });
            
      wrapper = shallow(<Posts />);
      wrapper.update();
    });

    it('should display loading', () => {
      expect(axios.get).to.have.callCount(1);
    });
  });
});