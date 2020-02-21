import React from "react";

class AdministrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Defect",
      description: "",
      reporter: "",
      mechanicAware: "No",
      status: "Not Started"
    };
  }

  formChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  formSubmit = async event => {
    event.preventDefault();
    this.props.submitFormHandler(this.state);
    this.setState({
      type: "Defect",
      description: "",
      reporter: "",
      mechanicAware: "No",
      status: "Not Started"
    });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.formSubmit}>
            <div>
              <label>
                Type
                <select
                  name="type"
                  value={this.state.type}
                  onChange={this.formChange}
                >
                  <option value="Defect">Defect</option>
                  <option value="Info">Info</option>
                  <option value="Danger">Danger</option>
                </select>
              </label>
            </div>

            <div>
              <label>
                Description
                <textarea
                  name="description"
                  value={this.state.description}
                  rows="3"
                  cols="100"
                  type="text"
                  placeholder="Description"
                  onChange={this.formChange}
                ></textarea>
              </label>
            </div>

            <div>
              <label>
                Reporter
                <input
                  name="reporter"
                  type="text"
                  value={this.state.reporter}
                  placeholder="Name"
                  onChange={this.formChange}
                />
              </label>
            </div>

            <div>
              <label>
                Mechanic Aware
                <select
                  name="mechanicAware"
                  value={this.state.mechanicAware}
                  onChange={this.formChange}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="NA">N/A</option>
                </select>
              </label>
            </div>

            <div>
              <label>
                Status
                <select
                  name="status"
                  value={this.state.status}
                  onChange={this.formChange}
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </label>
            </div>

            <input type="submit" value="Add New Admin" />
            <input type="reset" name="reset" value="Reset" />
          </form>
        </div>
      </div>
    );
  }
}

export default AdministrationForm;