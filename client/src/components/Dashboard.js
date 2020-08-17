import React,{Fragment} from 'react';
import {Navber,SubMenu} from './partials';

const Dashboard = (props) => {
  return (
    <Fragment>
    	<Navber/>
    	<div className="container">
    		<div className="row">
				<div className="col-md-3">
					<SubMenu/>
				</div>
				<div className="col-md-9">			
			    	<div className="row">
						<div className="col-md-3">
							<div class="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
							  <div class="card-header">Order</div>
							  <div class="card-body">
							    <h5 class="card-title">01</h5>
							  </div>
							</div>
						</div>
						<div className="col-md-3">
							<div class="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
							  <div class="card-header">Product</div>
							  <div class="card-body">
							    <h5 class="card-title">01</h5>
							  </div>
							</div>
						</div>
						<div className="col-md-3">
							<div class="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
							  <div class="card-header">Category</div>
							  <div class="card-body">
							    <h5 class="card-title">01</h5>
							  </div>
							</div>
						</div>
						<div className="col-md-3">
							<div class="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
							  <div class="card-header">Subcategory</div>
							  <div class="card-body">
							    <h5 class="card-title">01</h5>
							  </div>
							</div>
						</div>
			    	</div>
				</div>
    		</div>
    	</div>
    </Fragment>
  )
}

export default Dashboard;