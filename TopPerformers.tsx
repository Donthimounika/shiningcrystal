import * as React from 'react';
import TraineeDetails from './TraineeDetails';
 export class TopPerformers extends React.Component<any, {}> {
  constructor(props:any) {
    super(props);
    
  }
  render() {
    return (
      <div className=" widget-containers widget-right-containers" >
          <h3>Top Performers Details</h3>
       
        {this.props.trainee.map((trainee :TraineeDetails)   => {
              return (
                <div className="widgets-list-container">
                  <ul key={trainee.id} className="lists" >
                    <li>{trainee.name}</li>
                    <li>{trainee.email}</li>
                    <li>{trainee.phoneNumber}</li>
                  </ul>
                </div>
              )
            })}
   </div>
    );
  }
}

export default (TopPerformers)




