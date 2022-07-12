import PropTypes from 'prop-types';
function Name(props) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

Name.propTypes = {
    name: PropTypes.string.isRequired
  };
export default Name;
