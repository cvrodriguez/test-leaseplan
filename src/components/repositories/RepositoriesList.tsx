import * as React from 'react';




class RepositoriesList extends React.Component<any, any> {
    private repositories: string[];

    constructor(props: any) {
        super(props);
        this.repositories = props.value;
    }
    public render() {
        const items = this.repositories.map((rep, idx) => {
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
