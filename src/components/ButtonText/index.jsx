import PropTypes from 'prop-types';
import { Container } from './styles';

export function ButtonText({ title, icon: Icon, ...rest }) {
  return (
    <Container {...rest} type="button">
      {Icon && <Icon size={118} />}
      {title}
    </Container>
  );
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};
