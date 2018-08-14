import * as React from 'react';
import RepositoriesList from './RepositoriesList';
import RepositoriesSearch from './RepositoriesSearch';


class Repositories extends React.Component {

    private repositories: string[];

    constructor(props: any) {
        super(props);
        this.repositories = [];
        this.repositories.push("hola");
        this.repositories.push("mi mundo");
        this.repositories.push("es");
        this.repositories.push("de");
        this.repositories.push("ella.. mi mundo");
    }

    public render() {


        return (
            <div>
                <h1> User's Repositories</h1>
                <RepositoriesSearch />
                <RepositoriesList value={this.repositories}/>

            </div>
        );
    }

}
export default Repositories;