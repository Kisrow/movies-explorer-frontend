import Navigation from '../navigation/Navigation';

function Mobile({
  isMobileMenuActive,
  closeMobileMenu,
  auth,
}
  ) {
  return (
    <div className={`mobile ${isMobileMenuActive ? "mobile_active" : ""}`}>
      <div className="mobile__menu">
        <button className="mobile__close" type="button" onClick={closeMobileMenu}></button>
        <Navigation 
          isMobileMenuActive = {isMobileMenuActive}
          auth ={auth}
        />
      </div>
    </div>
  )
}

export default Mobile;