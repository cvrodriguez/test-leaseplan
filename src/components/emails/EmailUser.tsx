import * as React from 'react';

import { Col, Row } from 'antd';

import EmailAdd from './EmailAdd';
import EmailList from './EmailList';


class EmailUser extends React.Component<any, any>{

    public render() {
        return (
            <div>
                <h1> Emails's User</h1>
                <Row>
                    <Col span={12}> <EmailList /></Col>
                    <Col span={12}> <EmailAdd /></Col>



                </Row>
            </div>

        )
    }
}
export default EmailUser;