import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "400px",
    height: "400px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
let recipe = {};

class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleAddition = e => {
    e.preventDefault();
    // console.log(e.target.recipeName.value);
    recipe.recipe = e.target.recipeName.value;
    recipe.ingredients = e.target.ingredients.value.split("/");
    recipe.directions = e.target.directions.value.split("/");
    this.props.add(recipe);
    recipe = {};
    this.closeModal();
  };
  render() {
    return (
      <>
        <div className="modalwrapper">
          <button
            className="btn btn-primary add--modal"
            onClick={this.openModal}
          >
            Add Items
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <div className="text-center">
              <h2>Add Recipe</h2>
              <form id="add-recipe" onSubmit={this.handleAddition}>
                <input
                  type="text"
                  className="form-control"
                  name="recipeName"
                  placeholder="Name Of Recipe"
                  required
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="ingredients"
                  placeholder="Ingredients: group by '/' eg: Rice/ Dal"
                  required
                />
                <br />
                <textarea
                  name="directions"
                  className="form-control"
                  cols="30"
                  rows="10"
                  placeholder="Directions: group by '/'"
                  required
                />
                <button type="submit" className="btn btn-info mt-2">
                  Submit
                </button>
              </form>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}
export default AddRecipe;
