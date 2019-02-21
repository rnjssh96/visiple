import { connect } from 'react-redux';

import RootState from '../../types/redux';

import { setTicketColor } from '../../actions/new-ticket-screen/data';

import TicketColorPicker from '../../screens/new-ticket-screen/ticket-color-picker';

const mapStateToProps = (state: RootState) => ({
	themeColor: state.NewTicketScreen.Data.themeColor,
});

const mapDispatchToProps = {
	setTicketColor,
};

const TicketColorPickerContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(TicketColorPicker);

export default TicketColorPickerContainer;
