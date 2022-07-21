import s from './Container.module.css';
import propTypes from 'prop-types';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

Container.propTypes = {
  children: propTypes.element,
};
export default Container;
