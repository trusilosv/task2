import React from 'react';
import PostMain from './PostMain';
import renderer from 'react-test-renderer'
describe('Testing <PostMain/>', () => {
   const main=renderer.create(<PostMain/>);
   it('PostMain have rendered correctly',()=>{
      main.toJSON()
      expect(main).toMatchSnapshot();
   })
   it('PostMain corect data',()=>{
        const tempmain = main.getInstance()
        expect(tempmain.state.data).toBeArrayOfSize(0);
   })
});

