interface Time {
	at: Date;
	end?: Date;
}

type Place = string;

interface Cost {
	value: number;
	currency: string;
}

interface Move {
	from: Place;
	to: Place;
}

type Transportation =
	| 'subway'
	| 'bus'
	| 'ship'
	| 'plane'
	| 'taxi'
	| 'walk'
	| 'train'
	| 'tram'
	| 'automobile'
	| 'motorcycle'
	| 'bike';

type MealCategory =
	| 'breakfast'
	| 'brunch'
	| 'lunch'
	| 'dinner'
	| 'midnightsnack'
	| 'cafe'
	| 'bar';

type RestCategory = 'wake' | 'retire' | 'nap';

/**
 * Plan types constant
 */
type DayPlanType = 'MEAL' | 'REST' | 'TRAVEL' | 'ACTIVITY' | 'SIGHTSEEING';

interface MealPlan {
	type: 'MEAL';
	title: string;
	time: Time;
	note?: string[];
	category: MealCategory;
	atPlace?: Place;
	cost?: Cost;
}

interface RestPlan {
	type: 'REST';
	title: string;
	time: Time;
	note?: string[];
	category: RestCategory;
	atPlace?: Place;
}

interface TravelPlan {
	type: 'TRAVEL';
	title: string;
	time: Time;
	note?: string[];
	mean: Transportation;
	move: Move;
	cost?: Cost;
}

interface ActivityPlan {
	type: 'ACTIVITY';
	title: string;
	time: Time;
	note?: string[];
	atPlace?: Place;
	cost?: Cost;
}

interface SightseeingPlan {
	type: 'SIGHTSEEING';
	title: string;
	time: Time;
	note?: string[];
	atPlace?: Place;
	cost?: Cost;
}

export type DayPlan =
	| MealPlan
	| RestPlan
	| TravelPlan
	| ActivityPlan
	| SightseeingPlan;

type DayPlans = DayPlan[];

export interface Plan {
	date: Date;
	dayPlans: DayPlans;
}

export type Plans = Plan[];
