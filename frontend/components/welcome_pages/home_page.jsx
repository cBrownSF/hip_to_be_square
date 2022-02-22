import React from "react";
import { Link } from "react-router-dom";
import { clearListings } from "../../actions/filter_actions";
import SearchBar from "./search_bar";
import { withRouter } from "react-router";
class HomePage extends React.Component {
  constructor(props){
    super(props)
    // this.state={
    //   lat:null,
    //   lng:null,
    //   type:null
    // }
    // this.search = null;
    // this.autoComplete=this.autoComplete.bind(this)
  }
  componentDidMount(){
    this.props.clearListings()
  }
  // autoComplete() {
  //   const options = {
  //     componentRestrictions: { country: ["us"] },
  //     fields: ["geometry", "type", "adr_address", "name"],
  //     types: ['(regions)']
  //   }
  //   let searchBar = document.getElementById("city-search")

  //   this.search=new google.maps.places.Autocomplete(searchBar, options)
  
  //   let auto = this.search;
  //   this.search.addListener('place_changed', () => {
  //     let result = auto.getPlace()
  //     return this.setState({
  //       lat: result.geometry.location.lat(),
  //       lng: result.geometry.location.lng(),
  //       type:result.types[0]
  //     })
  //   })

  // }
  render() { 
   
    return (  
      <section>
      <div className='splash-container'>
        <div className='title-container'>
          <h1 className="header-home">Find yourself outside</h1>
          <p className="sub-header-home">Discover and book camping, glamping, parks, and cabins</p>
        </div>
        </div>
      <div>
        <SearchBar 
        className='search-wrapper'
        />
      </div>
      <div className="main-photo-div">

      </div>
      <div className='home-page-link-div' >
          <div className="home-page-link-photo-left">
            <div className="photo-inside-div-home">
              photo
            </div>
            <div className='card-cover'>
              Carolina Hideaways
            </div>
          </div>
          <div className="home-page-link-photos">
            <div className="photo-inside-div-home">
              photo
            </div>
            <div className='card-cover'>
              Yosemite Getaways
            </div>
          </div>
          {/* <div className="home-page-link-photo-right">
            <div>

            </div>
          </div> */}
      </div>
        </section>


    );
  }
}
 
export default withRouter(HomePage);
