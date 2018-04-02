import * as React from 'react';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
export interface ITraineestate
{
    showModal: boolean;
}
 export class MentorDetailsComponent extends React.Component<any,ITraineestate> {
  constructor(props:any) {
    super(props);
    this.state = {
        showModal: false
      };
  }
  render() {
    return (
      <div className="widget-containers widget-right-containers"  onClick={ this._showModal }>
          <h3>Mentor Details</h3>
      <div className="widgets-list-container">
        <ul className="lists">
        <li>{this.props.mentor[0].name}</li> 
        <li>{this.props.mentor[0].email}</li>
        <li>{this.props.mentor[0].phoneNumber}</li>
        </ul>
      </div>
        <Modal className="modal"
        isOpen={ this.state.showModal }
        onDismiss={ this._closeModal }
          isBlocking={ false }
          containerClassName='ms-modalExample-container'
        >
        <div className='ms-modalExample-header'>
            <span>Mentor Details</span>
         </div>
          <div className='ms-modalExample-body'>
          <ul className="lists">
          <li>{this.props.mentor[0].name}</li> 
          <li>{this.props.mentor[0].email}</li>
          <li>{this.props.mentor[0].phoneNumber}</li>
          </ul>
         </div>
        </Modal>
   </div>
    );
  }
  private _showModal = (): void => {
    this.setState({ showModal: true });
  }
  private _closeModal = (): void => {
    this.setState({ showModal: false });
  }
}

export default (MentorDetailsComponent)




