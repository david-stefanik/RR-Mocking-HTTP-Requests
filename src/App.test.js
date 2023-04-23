import { render,screen,waitFor } from "@testing-library/react";
import App from './App';

describe('when interacting with the git hub api',() => {
   beforeEach(()=>{
    fetch.resetMocks();
   })
   
   
    it('receives git hub name from ther rest api',async()=>{
        fetch.mockResponseOnce(JSON.stringify({name:'coder'}));
        render(<App/>);
        let githubName = await waitFor(()=>{
            return screen.getByRole('heading',{leval:2})
        })
        expect(githubName).toHaveTextContent('coder')
    });

});

