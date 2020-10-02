
export const updateQuantity = (type,totalQuantitiy,quantitiy,setQuantitiy,setAlertq)=> {
	if(type === 'increase'){
		if(quantitiy === totalQuantitiy){
			setAlertq(true)
			console.log("alert show");
		}else{
			setQuantitiy(quantitiy+1)
		}
		console.log('increase click',totalQuantitiy);
	}else if(type === 'decrease'){
		if(quantitiy===0){
			setQuantitiy(0)
		}else{
			setQuantitiy(quantitiy-1)
		}
	}
}


export const slideImage = (type,active,count,setCount,pImages)=> {
	if(active === count){
		return true
	}
	if(type == "increase"){		
		if(count === pImages.length-1){
			setCount(0)
		}
		else if(count < pImages.length){
			setCount(count+1)
		}
	}
}

export const inCart = (id)=> {
	if(localStorage.getItem("cart")){
		let cartProducts = JSON.parse(localStorage.getItem("cart"))
		for(let product of cartProducts){
			if(product.id === id){
				console.log("in cart call");
				return true
			}
			return false
		}
	}
	return false
}