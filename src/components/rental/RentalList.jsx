import React,{Component} from "react";
import { RentalCard } from "../rental/RentalCard";
import { connect } from "react-redux";

class RentalList extends React.Component {
    
  renderRentals() {
 
    return this.props.rentals.map((rental, index) => {
      console.log(rental);
      return (
        <RentalCard
        key={index}
        colNum='col-md-3 col-xs-6'
        rental={rental} />)
      
    });
  }
  
  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title"> Your Home All Around the World</h1>
        <div className="row">
          {this.renderRentals()}
          </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    rentals:state.rentals
  }
}

export default connect(mapStateToProps)(RentalList);
