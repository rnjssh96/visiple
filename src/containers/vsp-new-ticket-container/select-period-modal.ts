/** @format */

import { connect } from 'react-redux';

import RootState from '../../types/redux';

import {
	closePeriodModal,
	switchFromToTab,
	setPeriod,
} from '../../actions/new-ticket-actions';

import SelectPeriodModal from '../../screens/new-ticket-screen/select-period-modal';

const mapStateToProps = (state: RootState) => ({
	ticketColor: state.NewTicketScreen.TicketData.ticketColor,
	fromDate: state.NewTicketScreen.TicketData.period.fromDate,
	toDate: state.NewTicketScreen.TicketData.period.toDate,
	periodModalVisible: state.NewTicketScreen.Screen.periodModalVisible,
	fromtoTab: state.NewTicketScreen.Screen.fromtoTab,
});

const mapDispatchToProps = {
	switchFromToTab,
	closePeriodModal,
	setPeriod,
};

const SelectPeriodModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(SelectPeriodModal);

export default SelectPeriodModalContainer;
