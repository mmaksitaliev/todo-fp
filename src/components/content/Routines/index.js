import { connect } from 'react-redux';
import Routines from './Routines';

const mapStateToProps = state => ({
  routines: state.routines,
});

export default connect(mapStateToProps)(Routines);
