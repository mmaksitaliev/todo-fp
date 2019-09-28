import { connect } from 'react-redux';

import { SidebarFC } from './Sidebar';

const mapStateToProps = state => ({
  routes: state.routes,
});

export const Sidebar =  connect(mapStateToProps)(SidebarFC);
