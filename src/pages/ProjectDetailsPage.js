import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import ProjectDetails from "../component/ProjectDetails/ProjectDetails";
import Footer from "../component/Footer/Footer";
import {useParams} from "react-router-dom";


function withParams(Component){
    return props=><Component {...props} params={useParams()}/>;
}

class ProjectDetailsPage extends Component {

    constructor() {
        super();

        // this.state={
        //     projectPassedID:window.location.href.split('/')[4],
        //     projectPassedName:window.location.href.split('/')[5]
        // }
    }

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        const {projectID}=this.props.params;
        const {projectName}=this.props.params;

        return (
            <Fragment>
                <TopNavigation title="Project Details"/>
                <PageTop pagetitle={projectName}/>
                <ProjectDetails id={projectID}/>
                {/*<PageTop pagetitle={this.state.projectName}/>*/}
                {/*<ProjectDetails id={this.state.projectID}/>*/}
                <Footer/>

            </Fragment>
        );
    }
}

export default withParams(ProjectDetailsPage);



// import React, { Fragment} from 'react';
//  import TopNavigation from "../component/TopNavigation/TopNavigation";
//  import PageTop from "../component/PageTop/PageTop";
//  import ProjectDetails from "../component/ProjectDetails/ProjectDetails";
//  import Footer from "../component/Footer/Footer";
// import {useParams} from "react-router-dom";
//
// const ProjectDetailsPage = () => {
//     const {projectID} = useParams();
//     const {projectName} = useParams();
//
//     return (
//         <Fragment>
//            <TopNavigation title="Project Details"/>
//             <PageTop pagetitle={projectName}/>
//               <ProjectDetails id={projectID}/>
//              <Footer/>
//
//         </Fragment>
//     );
// };
//
// export default ProjectDetailsPage;