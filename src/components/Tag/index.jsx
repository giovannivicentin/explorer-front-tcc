import PropTypes from 'prop-types';
import { Container } from './styles';
import { Ingredients } from '../Ingredients';

export function Tag({ title, ...rest }) {
  return (
    <Container {...rest}>
      <Ingredients IngredientsName={title}/>
      {title}
    </Container>
  );
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};
