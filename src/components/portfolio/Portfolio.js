import linkArrow from '../../images/link-arrow.svg';
import { PORTFOLIO_ITEMS } from '../../utils/constnants';

function Portfolio() {
  const portfolioItems = PORTFOLIO_ITEMS.map((item, index) => 
    <li className="portfolio__list-item" key={index}>
      <p className="portfolio__list-text">{item.projectName}</p>
      <a href={item.projectLink} target="_blank" rel="noreferrer" className="portfolio__list-link">
        {/* <img src={linkArrow} alt="ссылка на внешний источник" /> */}
        &#8599;
      </a>
    </li>
  );

  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        {portfolioItems}
      </ul>
    </div>
  )
}

export default Portfolio;