import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Image } from 'office-ui-fabric-react/lib/Image';
import {SearchBox  } from 'office-ui-fabric-react/lib/SearchBox';
import AppComponent from './AppComponent';
import TraineesComponent from './TraineesComponent';
import TopPerformers from './TopPerformers';
import TraineeDetails from './TraineeDetails';
import MentorDetails from './MentorDetails';
import { BrowserRouter as Router,  Route, Link, Switch } from 'react-router-dom';

import MentorDetailsComponent from './MentorDetailsComponent';
class MainComponent extends React.Component {
    static trainee: TraineeDetails[] = [];
    static mentor : MentorDetails[]=[];
    constructor(props:any) {
        super(props);
        MainComponent.trainee[0] = new TraineeDetails({
            id:0,
            name: "MounikaDonthi",
            email: "Mounikadonthi12@gmail.com",
            phoneNumber: 9988776699,
         
        }),
        MainComponent.trainee[1] = new TraineeDetails({
            id:1,
             name: "Jayadeep",
             email: "Jayadeep@gmail.com",
             phoneNumber: 9988776699,
          
         }),
         MainComponent.trainee[2] = new TraineeDetails({
            id:2,
             name: "Veena Vyshnavi",
             email: "Vyshnavi@gmail.com",
             phoneNumber: 9988776699,
          
         });
         MainComponent.mentor[0] = new TraineeDetails({
            id:2,
             name: "Venkatesh K",
             email: "Venkateshk12@gmail.com",
             phoneNumber: 9988776699,
          
         });
      }
    render() {
        return (
         <div>
             {/* <div>
              <Image src='https://d1n2uj5xci2yfb.cloudfront.net/wp-content/uploads/saketa_logo.png' alt='Saketa' />
             <Pivot>
          <PivotItem linkText='Saketa Learning Manager'>
          </PivotItem>
        </Pivot>
        </div>
             <Nav className="top-nav"
        groups={ [{
          links: [
            { name: 'Home', key: 'Home', url: '' },
            { name: 'Activity', key: 'Activity', url: '' },
            { name: 'News', key: 'News', url: '' },
            { name: 'Documents', key: 'Documents', url: '' }
          ]
        }] }
      /> */}
      {/* <Router >
          <div> */}
             <div className="widget-containers-div">
             {/* <Link to={`/App`} > */}
                <AppComponent trainee = {MainComponent.trainee}/>
                {/* </Link> */}
                <TraineesComponent trainee = {MainComponent.trainee}/>
            </div>
           
            <div className="widget-containers-div">
                <TopPerformers trainee = {MainComponent.trainee}/>
                <MentorDetailsComponent mentor = {MainComponent.mentor}/>
            </div>
            
            {/* <Switch> */}
            {/* <Route exact path={`/App`} component={AppComponent}></Route> */}
            {/* </Switch> */}
            {/* </div> */}
            {/* </Router > */}
         </div>

                
        );
    }
}

export default MainComponent;