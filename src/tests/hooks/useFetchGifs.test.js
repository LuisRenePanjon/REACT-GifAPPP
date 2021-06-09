// import { shallow } from "enzyme";
import { useFechGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks'
describe('Test in the Hook useFetchGifs', () => {
    
    test('should display init state',async () => {
        const { result, waitForNextUpdate } = renderHook(()=> useFechGifs( 'Goku' ));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
    test('should return an imgs array and loading should be false', async () => {
        const { result, waitForNextUpdate } = renderHook(()=> useFechGifs( 'Goku' ));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data).not.toEqual([]);
        expect(loading).not.toBe(true);       
    });
    
});
