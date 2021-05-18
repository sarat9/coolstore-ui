
/*
*enzyme cheatsheet - https://devhints.io/enzyme
*/

describe('Testing sum', () => {
    function sum(a, b) {
       return a + b;
    }

    it('should equal 4',()=>{
       expect(sum(2,2)).toBe(4);
      })

    test('also should equal 4', () => {
        expect(sum(2,2)).toBe(4);
      }) 
});



// MockFunction
// const clickFn = jest.fn();
// describe('MyComponent', () => {
//   it('button click should hide component', () => {
//     const component = shallow(<MyComponent onClick={clickFn} />);
//     component
//       .find('button#my-button-two')
//       .simulate('click');
//     expect(clickFn).toHaveBeenCalled();
//   });
// });