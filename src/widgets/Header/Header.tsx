import { NavLink } from 'react-router-dom';

import { navigationLinks } from './model/navigationLinks';

export const Header = (): JSX.Element => {
  const links = navigationLinks.map(
    ({ path, text }): JSX.Element => (
      <li key={path}>
        <NavLink to={path}>{text}</NavLink>
      </li>
    ),
  );

  return (
    <header>
      <nav>
        <ul>{links}</ul>
      </nav>
    </header>
  );
};
