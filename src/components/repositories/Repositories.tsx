import * as React from 'react';

import RepositoriesList from './RepositoriesList';
import RepositoriesSearch from './RepositoriesSearch';

import { connect } from 'react-redux';
import { IState } from '../../reducers/initialState';

import { bindActionCreators } from 'redux';
import * as RepositoriesActions from '../../actions/repositoriesActions';



class Repositories extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    public render() {


        return (
            <div>
                <h1> User's Repositories</h1>
                <RepositoriesSearch />
                <RepositoriesList repos={this.props.repos} />
            </div>
        );
    }

    public componentDidMount() {
        this.props.actions.searchRepos({
            userName: 'cvrodriguez'
        })
    }
}


function mapStateToProps(state: IState) {
    return {
        repos: state.repositories
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(RepositoriesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);