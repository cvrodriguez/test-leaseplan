import { Input } from 'antd';
import * as React from 'react';


const Search = Input.Search; 

class RepositoriesSearch extends React.Component{

    public render(){
        return(
            <div>
                 <Search enterButton= {true}
                 style={{ width: 200 }}/>
            </div>
        );
    }
    
}
export default RepositoriesSearch;