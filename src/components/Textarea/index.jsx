import PropTypes from 'prop-types';
import { Container } from './styles';

export function Textarea({ value, ...rest }) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  );
}

Textarea.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
};
