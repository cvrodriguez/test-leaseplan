import * as React from 'react';

import { Button,Input } from 'antd';


class EmailAdd extends React.Component {

    public render() {

        return (
            <div>
                <Input autosize={{ minRows: 2, maxRows: 6 }}/>
                <Button htmlType="button" >Primary</Button>
            </div>
        );
    }
}
export default EmailAdd;