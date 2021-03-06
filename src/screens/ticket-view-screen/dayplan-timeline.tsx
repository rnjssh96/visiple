import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { TabProps } from 'react-native-scrollable-tab-view';
import { DateTime } from 'luxon';

import { THEME_COLORS } from '../../types/lib/theme';
import {
	HORIZONTAL_UNIT,
	THEME_MINOR_FONTSIZE,
	VSP_EDGE_PADDING,
} from '../../types/lib/size';
import { CURRENCY } from '../../types/lib/currency';
import { DayPlans, Plan, DayPlan } from '../../types/data/ticket/plan';

import VSPText from '../../components/vsp-text';
import VSPExpandable from '../../components/vsp-expandable';
import VSPDivider from '../../components/vsp-divider';

interface IPlanTimelineProps {
	/**
	 * Theme color of the ticket
	 */
	ticketColor: string;

	/**
	 * Plans of the ticket
	 */
	dayPlans: DayPlans;
}

/**
 * PlanTimeline
 *
 * @property
 * - ```ticketColor```(required): Theme color of the ticket
 * - ```plans```(required): Plans of the ticket
 */
export default class PlanTimeline extends React.Component<
	TabProps<IPlanTimelineProps>
> {
	private _renderPlanTitle(plan: Plan) {
		const style = StyleSheet.create({
			container: {
				flexDirection: 'row',
				justifyContent: 'space-between',
			},

			headerView: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			bulletDash: {
				height: HORIZONTAL_UNIT(),
				width: HORIZONTAL_UNIT(3),
				borderRadius: HORIZONTAL_UNIT(),
				marginLeft: HORIZONTAL_UNIT(3),
				marginRight: HORIZONTAL_UNIT(2),
				backgroundColor: this.props.ticketColor,
			},
		});

		let icon: string = 'information';

		switch (plan.type) {
			case 'MEAL':
				icon = 'dinner';
				break;
			case 'REST':
				icon = 'bed';
				break;
			case 'TRAVEL':
				plan.mean === 'automobile' && (icon = 'car');
				plan.mean === 'bike' && (icon = 'bicycle');
				plan.mean === 'bus' && (icon = 'bus');
				plan.mean === 'motorcycle' && (icon = 'motorbike');
				plan.mean === 'plane' && (icon = 'airplane');
				plan.mean === 'ship' && (icon = 'boat');
				plan.mean === 'subway' && (icon = 'subway');
				plan.mean === 'taxi' && (icon = 'taxi');
				plan.mean === 'train' && (icon = 'train');
				plan.mean === 'tram' && (icon = 'trolley-bus');
				plan.mean === 'walk' && (icon = 'walk');
				break;
			case 'ACTIVITY':
				icon = 'camping-tent';
				break;
			case 'SIGHTSEEING':
				icon = 'sydney-opera-house';
				break;
		}

		return (
			<View style={style.container}>
				<View style={style.headerView}>
					<View style={style.bulletDash} />
					<View
						style={{
							flexDirection: 'row',
							marginLeft: HORIZONTAL_UNIT(),
						}}
					>
						<Icon
							name={icon}
							type='vspicon'
							containerStyle={{ marginRight: HORIZONTAL_UNIT() }}
						/>
						<Text h3>{plan.title}</Text>
					</View>
				</View>
				<VSPText
					fontSize={THEME_MINOR_FONTSIZE}
					color={THEME_COLORS.grey}
				>
					{plan.time.at.toLocaleString(DateTime.TIME_SIMPLE)}
				</VSPText>
			</View>
		);
	}

	private _renderPlanDetail(plan: Plan) {
		const style = StyleSheet.create({
			container: {
				marginTop: HORIZONTAL_UNIT(2),
				paddingLeft: HORIZONTAL_UNIT(11),
			},
		});

		return (
			<View>
				{'atPlace' in plan && plan.atPlace !== undefined && (
					<View style={style.container}>
						<View style={{ flexDirection: 'row' }}>
							<Icon
								name='place-pin'
								type='vspicon'
								size={THEME_MINOR_FONTSIZE}
								color={THEME_COLORS.grey}
								containerStyle={{
									marginRight: HORIZONTAL_UNIT(),
								}}
							/>
							<Text
								h4
								style={{
									flex: 1,
									textAlign: 'justify',
									color: THEME_COLORS.grey,
								}}
							>
								{plan.atPlace}
							</Text>
						</View>
					</View>
				)}
				{'move' in plan && (
					<View style={style.container}>
						<View style={{ flexDirection: 'row' }}>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								marginRight={HORIZONTAL_UNIT(2)}
								fontWeight='bold'
								color={THEME_COLORS.grey}
							>
								FROM
							</VSPText>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								color={THEME_COLORS.grey}
							>
								{plan.move.from}
							</VSPText>
						</View>
						<Icon
							name='down-arrow'
							type='vspicon'
							size={THEME_MINOR_FONTSIZE}
							color={THEME_COLORS.grey}
							containerStyle={{
								marginVertical: HORIZONTAL_UNIT(),
							}}
						/>
						<View style={{ flexDirection: 'row' }}>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								marginRight={HORIZONTAL_UNIT(2)}
								fontWeight='bold'
								color={THEME_COLORS.grey}
							>
								TO
							</VSPText>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								color={THEME_COLORS.grey}
							>
								{plan.move.to}
							</VSPText>
						</View>
					</View>
				)}
				{'cost' in plan && plan.cost !== undefined && (
					<View style={style.container}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<View
								style={{
									flexDirection: 'row',
								}}
							>
								<Icon
									name='money'
									type='vspicon'
									color={THEME_COLORS.grey}
									size={THEME_MINOR_FONTSIZE}
									containerStyle={{
										marginRight: HORIZONTAL_UNIT(),
									}}
								/>
								<Text
									h4
									style={{
										fontWeight: 'bold',
										color: THEME_COLORS.grey,
									}}
								>
									{plan.cost.currency}
								</Text>
							</View>
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								color={THEME_COLORS.grey}
							>
								{plan.cost.currency in CURRENCY
									? `${
											CURRENCY[plan.cost.currency]
												.symbol_native
									  } ${plan.cost.value.toLocaleString()}`
									: `$ ${plan.cost.value.toLocaleString()}`}
							</VSPText>
						</View>
						{plan.cost.currency in CURRENCY && (
							<VSPText
								fontSize={THEME_MINOR_FONTSIZE}
								color={THEME_COLORS.grey}
							>
								{`(${CURRENCY[plan.cost.currency].name})`}
							</VSPText>
						)}
					</View>
				)}
				{plan.note !== undefined &&
					plan.note.map((note: string, index: number) => (
						<View key={index} style={style.container}>
							<View style={{ flexDirection: 'row' }}>
								<Icon
									name='information'
									type='vspicon'
									size={THEME_MINOR_FONTSIZE}
									color={THEME_COLORS.grey}
									containerStyle={{
										marginRight: HORIZONTAL_UNIT(),
									}}
								/>
								<Text
									h4
									style={{
										flex: 1,
										textAlign: 'justify',
										color: THEME_COLORS.grey,
									}}
								>
									{note}
								</Text>
							</View>
						</View>
					))}
			</View>
		);
	}

	private _renderEndTime(plan: Plan) {
		return (
			<VSPDivider
				text={
					plan.time.end !== undefined
						? plan.time.end.toLocaleString(DateTime.TIME_SIMPLE)
						: undefined
				}
				fontSize={THEME_MINOR_FONTSIZE}
				color={THEME_COLORS.grey}
				orientation='far-right'
				marginTop={HORIZONTAL_UNIT()}
				marginLeft={HORIZONTAL_UNIT(8)}
			/>
		);
	}

	private _renderDayPlan({ item, index }: { item: DayPlan; index: number }) {
		const style = StyleSheet.create({
			itemContainer: {
				flexDirection: 'row',
				alignItems: 'center',
			},

			dayplanView: {
				marginVertical: HORIZONTAL_UNIT(2),
				alignItems: 'stretch',
			},

			bulletLine: {
				height: '100%',
				width: HORIZONTAL_UNIT(2),
				position: 'absolute',
				left: HORIZONTAL_UNIT(2),
				bottom: -HORIZONTAL_UNIT(),
				backgroundColor: this.props.ticketColor,
			},

			bulletDot: {
				height: HORIZONTAL_UNIT(6),
				width: HORIZONTAL_UNIT(6),
				borderRadius: HORIZONTAL_UNIT(3),
				marginRight: HORIZONTAL_UNIT(2),
				backgroundColor: this.props.ticketColor,
			},
		});

		return (
			<View>
				<View style={style.bulletLine} />
				<VSPExpandable
					marginTop={index === 0 ? 0 : HORIZONTAL_UNIT(4)}
					header={
						<View style={style.itemContainer}>
							<View style={style.bulletDot} />
							<VSPText color={this.props.ticketColor}>
								{item.date.toLocaleString(DateTime.DATE_FULL)}
							</VSPText>
						</View>
					}
					body={
						<View>
							{item.plans.map((plan: Plan, index: number) => (
								<View key={index} style={style.dayplanView}>
									{this._renderPlanTitle(plan)}
									{this._renderPlanDetail(plan)}
									{this._renderEndTime(plan)}
								</View>
							))}
						</View>
					}
					color={this.props.ticketColor}
					expanded={true}
				/>
			</View>
		);
	}

	public render() {
		return (
			<FlatList
				data={this.props.dayPlans}
				keyExtractor={item => item.date.toISO()}
				ListFooterComponent={
					<View
						style={{
							height: HORIZONTAL_UNIT(2),
							width: HORIZONTAL_UNIT(2),
							borderBottomRightRadius: HORIZONTAL_UNIT(),
							borderBottomLeftRadius: HORIZONTAL_UNIT(),
							marginLeft: HORIZONTAL_UNIT(2),
							backgroundColor: this.props.ticketColor,
						}}
					/>
				}
				renderItem={this._renderDayPlan.bind(this)}
				contentContainerStyle={{
					padding: VSP_EDGE_PADDING,
				}}
			/>
		);
	}
}
