import React, {propTypes} from 'react';

class App extends React.Component{

    render(){
        return(
            <div className="container-fluid">
                <p>Header here...</p>
                {this.props.children}
            </div>

        );
    }
}

App.propTypes={

    children: propTypes.object.isRequired
};

export default App;