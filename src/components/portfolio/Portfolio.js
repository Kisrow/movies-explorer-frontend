import { PORTFOLIO_ITEMS } from '../../utils/constnants';

function Portfolio() {
  const portfolioItems = PORTFOLIO_ITEMS.map((item, index) => 
    <li className key={index}>
      <a href={item.projectLink} target="_blank" rel="noreferrer" className="portfolio__list-link">
        <span className="portfolio__list-text">{item.projectName}</span>&#8599;
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