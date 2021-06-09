import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Test in <AddCategory/>', () => {
    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    });

    test('should correctly display the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change input text', () => {
        const input = wrapper.find('input');
        const value = 'any text'
        input.simulate('change', { target:{ value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('should not post the information with submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('should call to setCategories and clear input', () => {
        const input = wrapper.find('input');
        const value = 'test';
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );
        expect( input.prop('value') ).toBe('');
    })
    
});
