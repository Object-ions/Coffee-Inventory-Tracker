import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from './CoffeeList';
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component {
  // State
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // Toggles visibility of the form
  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  // Create - Adds a new coffee item to the list and hides the form
  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  }

  // Details - Shows selected coffee item details
  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList
              .filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  // Update - Edits the selected coffee item
  handleEditClick = () => {
    this.setState({editing: true});
  }

  // Update - actual editing the selected coffee item
  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
        .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
        .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    });
  }

  // Update - Sell a pound
  handleSellingPound = (id) => {
  const updatedMainCoffeeList = this.state.mainCoffeeList.map((coffee) => {
    if (coffee.id === id && coffee.weight > 0) {
      return { ...coffee, weight: coffee.weight - 1 };
    } else {
      return coffee;
    }
  });

  if (this.state.selectedCoffee && this.state.selectedCoffee.weight > 0) {
    this.setState({ 
    mainCoffeeList: updatedMainCoffeeList,
    editing: false,
    selectedCoffee: {...this.state.selectedCoffee, weight: this.state.selectedCoffee.weight -1}
  });
  }
}

  // Remove - Removes a coffee item from the list
  handleDeletingCoffee = (id) => {
  const newMainCoffeeList = this.state.mainCoffeeList
                  .filter(coffee => coffee.id !== id);
  this.setState({
    mainCoffeeList: newMainCoffeeList,
    selectedCoffee: null
    });
  }

  render() {

    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeForm 
          coffee = {this.state.selectedCoffee}
          onEditCoffee = {this.handleEditingCoffeeInList} />
      buttonText = "Return to Coffee List";

    // Check state: on Coffee Detail
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail
            coffee = {this.state.selectedCoffee}
            onClickingDelete = {this.handleDeletingCoffee}
            onClickingEdit = {this.handleEditClick}
            onSellPound = {this.handleSellingPound} />
      buttonText = "Return to Coffee List";

      // Check state: New Coffee Form
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>
      buttonText = "Return to Coffee List";

      // Default: show Coffee List ()
    } else {
      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee}/>
      buttonText = "Add Coffee";
    }

    return (
        <div className="main">
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        </div>
    );
  }
}

export default CoffeeControl;