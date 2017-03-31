import React, {PropTypes} from 'react';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context);
        
        this.state={
            course: { title: "" }
        };

        this.onClickSave=this.onClickSave.bind(this);
        this.onTitleChange=this.onTitleChange.bind(this);
    }

    onTitleChange(event){
        const course=this.state.course;
        course.title=event.target.value;
        this.setState({course: course});
    }
    onClickSave(){
        alert(`Saving ${ this.state.course.title}`);
    }

    render(){
        return(
            <div className="jumbotron">
                <h1>Courses</h1>
                <h2>Add Courses</h2>
                <input
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />

                <input
                    type="submit"
                    value="save"
                    onClick={this.onClickSave} />
               
            </div>
        );
    }
}

export default CoursesPage;