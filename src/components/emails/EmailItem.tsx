import * as React from 'react';

import { Icon } from 'antd';


class EmailItem extends React.Component<any, any> {

    private email:string;

    constructor(props: any) {
        super(props);
        this.email = props.value;
    }

    public render() {

        return (
            <div>
                <Icon type="delete" />
                <span>{this.email}</span>

            </div>

        );


    }


}
export default EmailItem;