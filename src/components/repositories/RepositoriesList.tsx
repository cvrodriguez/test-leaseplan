import * as React from 'react';

interface IProps {
    repos:string[];
}


class RepositoriesList extends React.Component<IProps, any> {


    constructor(props: IProps) {
        super(props);
    }
    public render() {
        const items = this.props.repos.map((rep, idx) => {
            return <li key={idx}>{rep}</li>
        });
        return (

            <div>
                <ul>
                    {items}
                </ul>
            </div>);

    }


}
export default RepositoriesList;
