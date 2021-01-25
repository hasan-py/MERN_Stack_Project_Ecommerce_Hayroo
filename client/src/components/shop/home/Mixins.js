export const isWish = (id, wList) => {
  if (wList !== null && wList.includes(id) === true) {
    return true;
  }
  return false;
};

export const isWishReq = (e, id, setWlist) => {
  let list = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : [];
  if (list.length > 0) {
    if (list.includes(id) !== true) {
      list.push(id);
      localStorage.setItem("wishList", JSON.stringify(list));
      setWlist(list);
    }
  } else {
    list.push(id);
    localStorage.setItem("wishList", JSON.stringify(list));
    setWlist(list);
  }
};

export const unWishReq = (e, id, setWlist) => {
  let list = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : [];
  if (list.length > 0) {
    if (list.includes(id) === true) {
      list.splice(list.indexOf(id), 1);
      localStorage.setItem("wishList", JSON.stringify(list));
      setWlist(list);
    }
  }
};

export const nextSlide = (totalImg, slide, setSlide) => {
  if (slide === totalImg - 1) {
    setSlide(0);
  } else if (slide < totalImg) {
    setSlide(slide + 1);
  }
};

export const prevSlide = (totalImg, slide, setSlide) => {
  if (slide === 0) {
    setSlide(totalImg - 1);
  } else if (slide === totalImg - 1) {
    setSlide(0);
  }
};
