import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFechGifs } from "../../hooks/useFetchGifs";
jest.mock( '../../hooks/useFetchGifs' );
describe('Test in <GifGrid />', () => {
    const category = 'any category';
    
    test('should match snapshot', () => {
        useFechGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category = {category}/> );
        
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should display items when load images', () => {
        const gifs = [{
            id   : 'id',
            url  : 'https://server/img.jpg',
            title: 'title'
        }];

        useFechGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category = {category}/> );
        expect( wrapper.find( 'p' ).exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
    });
    

    

})
