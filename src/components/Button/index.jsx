import PropTypes from 'prop-types';
import { Container } from './styles';

export function Button({ title, loading = false, icon: Icon, ...rest }) {
  return (
    <Container
      type='button'
      disabled={loading}
      {...rest}
    >
      {Icon && <img src={Icon} alt={title} />}
      {loading ? 'carregando...' : title}
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  icon: null,
};
