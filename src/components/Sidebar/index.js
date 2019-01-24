import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = state => ({
  routes: state.routes,
});

export default connect(mapStateToProps)(Sidebar);
