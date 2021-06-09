import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Test in <GifGrifItem />', () => {
    const title = 'any title';
    const url   = 'http:any.com/any.jpg';
    const wrapper = shallow( <GifGridItem title = { title }  url={ url }/> );
    
    test('should correctly display the component', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should have a <p/> with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim() ).toBe(title);
    });

    test('should have a <img/> equal to the url and alt of its props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title); 
    });
    
    test('should have a <div/> with animate_fadeIn class', () => {
        const div = wrapper.find('div');
        // console.log(div.prop('className').indexOf('animate__fadeIn'));
        expect( div.prop('className').includes('animate__fadeIn') ).toBe(true);
    })
    
});