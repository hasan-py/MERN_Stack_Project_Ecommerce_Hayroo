import React,{Fragment} from 'react';

const Dashboard = (props) => {
  return (
    <Fragment>    
    	<div className="container">
    		<div className="row">
				<div className="col-md-9">
					<svg style={{ height:"40px" }} viewBox="0 0 20 20" fill="currentColor" class="menu w-6 h-6"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
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