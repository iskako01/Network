import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
  };

  render() {
    return (
      <div className="">
        {!this.state.editMode && (
          <div className="">
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}

        {this.state.editMode && (
          <div className="">
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              type="text"
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
