import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
//import * as courseActions from '../../actions/courseActions';
import * as courseActions from '../../actions/courseActions';
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
        //alert(`Saving ${ this.state.course.title}`);
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }
    render(){
        return(
            <div className="jumbotron">
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
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

CoursesPage.propTypes = {
  dispatch:PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   };
// }

//export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);
  export default connect(mapStateToProps)(CoursesPage);