import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatusProfile(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div className="">
        {!this.state.editMode && (
          <div className="">
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "Type status"}
            </span>
          </div>
        )}

        {this.state.editMode && (
          <div className="">
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              type="text"
              onChange={this.onStatusChange}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
