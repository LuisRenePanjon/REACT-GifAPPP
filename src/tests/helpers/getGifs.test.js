import { getGifs } from "../../helpers/getGifs";

describe('Test with getGifs Fetch', () => {
    
    test('should bring 10 elements', async () => {
        const gifs = await getGifs('goku');
        expect( gifs.length ).toBe(10);
    });
    
    test('should bring 0 elements if do not send category', async () => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });

});
