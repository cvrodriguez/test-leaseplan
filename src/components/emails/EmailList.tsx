import * as React from 'react';
import EmailItem from './EmailItem';



class EmailList extends React.Component<any, any>{

    private emails: string[];
    constructor(props: any) {
        super(props);
       // this.emails = props.listEmail;

       this.emails = [
           "cinvir15@gmail.com", "pablobastidasv@gmail.com", "isabelcristinarodriguez@gamil.com"
       ];

    }
    public render() {

        const items = this.emails.map((email, idx) =>{
            return <li key={idx}> <EmailItem value={email} /></li>
    });
    return(
            <div>
    <ul>
        {items}
    </ul>
        </div >);

        

    }
        
    }



export default EmailList;