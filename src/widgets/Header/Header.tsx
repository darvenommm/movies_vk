import { NavLink } from 'react-router-dom';

import { navigationLinks } from './model/navigationLinks';

import containerStyle from '@/share/styles/components/container.module.scss';
import buttonStyle from '@/share/styles/components/button.module.scss';
import classes from './Header.module.scss';

export const Header = (): JSX.Element => {
  const links = navigationLinks.map(
    ({ path, text }): JSX.Element => (
      <li key={path}>
        <NavLink className={buttonStyle.button} to={path}>
          {text}
        </NavLink>
      </li>
    ),
  );

  return (
    <header className={classes.header}>
      <nav className={containerStyle.container}>
        <ul className={classes.list}>{links}</ul>
      </nav>
    </header>
  );
};
