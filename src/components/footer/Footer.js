import { useContext} from 'react';

import { FOOTER_LINKS } from '../../utils/constnants';

import { LocationContext } from '../../context/LocationContext';

function Footer({
  auth,
}) {
  const location = useContext(LocationContext)

  const footer_links = FOOTER_LINKS.map((item, index) => 
    <li key={index}>
      <a href={item.link} target={'_blank'} rel="noreferrer" className="footer__container-link">{item.name}</a>
    </li>
  );
  return (
    <div className={`${(auth || location.pathname === "/") ? "footer" : "footer_hidden"}`}>
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__container-text">&#169; 2023</p>
        <ul className="footer__container-list">
          {footer_links}
        </ul>
      </div>
    </div>
  )
}

export default Footer;