import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Test in <GifExpertApp />', () => {
    const wrapper = shallow(<GifExpertApp />);
    
    test('should match snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should display category list', () => {
        const categories = ['Naruto', 'Goku'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe(categories.length); 
    });
    
});
