/**
 * UI State Interface
 *
 * @format
 */

type FromToTab = 'from-tab' | 'to-tab';

export interface UIState {
	periodModalVisible: boolean;
	fromtoTab: FromToTab;
	inviteModalVisible: boolean;
}

/**
 * UI Action Constants
 */
declare const OPEN_PERIOD_MODAL = 'visiple/new-ticket/OPEN_PERIOD_MODAL';
declare const CLOSE_PERIOD_MODAL = 'visiple/new-ticket/CLOSE_PERIOD_MODAL';

declare const SWITCH_FROMTO_TAB = 'visiple/new-ticket/SWITCH_FROMTO_TAB';

declare const OPEN_INVITE_MODAL = 'visiple/new-ticket/OPEN_INVITE_MODAL';
declare const CLOSE_INVITE_MODAL = 'visiple/new-ticket/CLOSE_INVITE_MODAL';

/**
 * UI Action Creator Interfaces
 */
interface OpenPeriodModalAction {
	type: typeof OPEN_PERIOD_MODAL;
}

interface ClosePeriodModalAction {
	type: typeof CLOSE_PERIOD_MODAL;
}

interface SwitchFromToTabAction {
	type: typeof SWITCH_FROMTO_TAB;
	fromtoTab: FromToTab;
}

interface OpenInviteModalAction {
	type: typeof OPEN_INVITE_MODAL;
}

interface CloseInviteModalAction {
	type: typeof CLOSE_INVITE_MODAL;
}

/**
 * UI Action Types
 */
export type UIActions =
	| OpenPeriodModalAction
	| ClosePeriodModalAction
	| SwitchFromToTabAction
	| OpenInviteModalAction
	| CloseInviteModalAction;
