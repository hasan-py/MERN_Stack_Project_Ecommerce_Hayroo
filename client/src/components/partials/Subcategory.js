import React from 'react';

const Subcategory = (props) => {
  return (
	<ul className="list-group col-md-3 mb-3">
	  <li style={{ background:"DodgerBlue",color:"white" }} className="list-group-item active">Cras justo odio</li>
	  <li className="list-group-item">Dapibus ac facilisis in</li>
	  <li className="list-group-item">Morbi leo risus</li>
	  <li className="list-group-item">Porta ac consectetur ac</li>
	  <li className="list-group-item">Vestibulum at eros</li>
	</ul>
  )
}

export default Subcategory;