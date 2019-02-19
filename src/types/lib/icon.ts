export type IconName =
	// UI
	| 'calendar'
	| 'cancel'
	| 'check'
	| 'clock'
	| 'downarrowhead'
	| 'downarrow'
	| 'home'
	| 'information'
	| 'leftarrow'
	| 'menu'
	| 'money'
	| 'more'
	| 'next'
	| 'padlock'
	| 'placeholder'
	| 'plus'
	| 'previous'
	| 'rightarrow'
	| 'search'
	| 'settings'
	| 'teamwork'
	| 'trash'
	| 'user'
	// TRAVEL
	| 'backpack'
	| 'bed'
	| 'campingtent'
	| 'egyptpyramid'
	| 'photocamera'
	| 'planning'
	| 'smartphone'
	// MEAL
	| 'dinner'
	// TRANSPORTATION
	| 'bicycle'
	| 'boat'
	| 'bus'
	| 'car'
	| 'motorbike'
	| 'plane'
	| 'subway'
	| 'taxi'
	| 'train'
	| 'tram'
	| 'walk';

const ICON_SOURCE: { [name in IconName]: any } = {
	// UI
	calendar: require('../../assets/icons/ui/calendar.png'),
	cancel: require('../../assets/icons/ui/cancel.png'),
	check: require('../../assets/icons/ui/check.png'),
	clock: require('../../assets/icons/ui/clock.png'),
	downarrow: require('../../assets/icons/ui/down-arrow.png'),
	downarrowhead: require('../../assets/icons/ui/down-arrow-head.png'),
	home: require('../../assets/icons/ui/home.png'),
	information: require('../../assets/icons/ui/information.png'),
	leftarrow: require('../../assets/icons/ui/left-arrow.png'),
	menu: require('../../assets/icons/ui/menu.png'),
	money: require('../../assets/icons/ui/money.png'),
	more: require('../../assets/icons/ui/more.png'),
	next: require('../../assets/icons/ui/next.png'),
	padlock: require('../../assets/icons/ui/padlock.png'),
	placeholder: require('../../assets/icons/ui/placeholder.png'),
	plus: require('../../assets/icons/ui/plus.png'),
	previous: require('../../assets/icons/ui/previous.png'),
	rightarrow: require('../../assets/icons/ui/right-arrow.png'),
	search: require('../../assets/icons/ui/search.png'),
	settings: require('../../assets/icons/ui/settings.png'),
	teamwork: require('../../assets/icons/ui/teamwork.png'),
	trash: require('../../assets/icons/ui/trash.png'),
	user: require('../../assets/icons/ui/user.png'),
	// TRAVEL
	backpack: require('../../assets/icons/travel/backpack.png'),
	bed: require('../../assets/icons/travel/bed.png'),
	campingtent: require('../../assets/icons/travel/camping-tent.png'),
	egyptpyramid: require('../../assets/icons/travel/egypt-pyramid.png'),
	photocamera: require('../../assets/icons/travel/photo-camera.png'),
	planning: require('../../assets/icons/travel/planning.png'),
	smartphone: require('../../assets/icons/travel/smartphone.png'),
	// MEAL
	dinner: require('../../assets/icons/meal/dinner.png'),
	// TRANSPORTATION
	bicycle: require('../../assets/icons/transportation/bicycle.png'),
	boat: require('../../assets/icons/transportation/boat.png'),
	bus: require('../../assets/icons/transportation/bus.png'),
	car: require('../../assets/icons/transportation/car.png'),
	motorbike: require('../../assets/icons/transportation/motorbike.png'),
	plane: require('../../assets/icons/transportation/plane.png'),
	subway: require('../../assets/icons/transportation/subway.png'),
	taxi: require('../../assets/icons/transportation/taxi.png'),
	train: require('../../assets/icons/transportation/train.png'),
	tram: require('../../assets/icons/transportation/tram.png'),
	walk: require('../../assets/icons/transportation/walk.png'),
};

export default ICON_SOURCE;
