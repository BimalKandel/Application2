import React from 'react';
import './App.css';


const Maincontent= (props) => {
    const {repos} = props;
    if (!repos || repos.length === 0) return <p>No data</p>;
    return(
        
        <div class="container">
            <div class="row">
                <div className="col-sm-12">
                {repos.map((scp) => {
                    return(
                    <div id={scp.item}>
                        <h1 class="text-center">{scp.title}</h1>
                        <h2>Item #: {scp.item}</h2>
                        <h2><b>Object Class: </b>{scp.class}</h2>
                        <h3>Description:</h3>
                        <div dangerouslySetInnerHTML={{__html:scp.description}} />
                        <h3>Special Containment Procedures:</h3>
                        <div dangerouslySetInnerHTML={{__html:scp.containment}} />
                        <hr/>
                    </div>
                        );
                })}
                </div>
                
            </div>
        </div>
    )
}

export default Maincontent;