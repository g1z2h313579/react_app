import React from 'react';

import Header from './com_header';
import ComContent from './community_content';

class Community extends React.Component{
    render(){
        return (
            <>
                <Header/>
                <ComContent/>
            </>  
           
        )
    }
}


export default Community;