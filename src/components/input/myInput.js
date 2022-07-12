import PropTypes from 'prop-types';

function MyInput(props) {
  return (
    <div>
      <input onChange={props.handleNameChange} />
    </div>
  );
}

MyInput.propTypes = {
  handleNameChange: PropTypes.func
};
export default MyInput;
