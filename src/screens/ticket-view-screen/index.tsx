import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { DateTime } from 'luxon';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import { Ticket } from '../../types/data/ticket';
import { TICKET_THEME_COLORS } from '../../types/data/ticket/theme';
import { THEME_COLORS } from '../../types/lib/theme';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPText from '../../components/vsp-text';
import VSPHeaderButton from '../../components/vsp-header-button';
import VSPHeaderDropdown from '../../components/vsp-header-dropdown';

import PlanTimeline from './dayplan-timeline';
import PackingList from './packing-list';
import ParticipantsList from './participants-list';

const DEV_TICKET: Ticket = {
	id: 1,
	title: '나혼자 여행갈꼬얌',
	owner: '0001',
	participants: ['0001', '0002'],
	themeColor: TICKET_THEME_COLORS.blue,
	period: {
		from: DateTime.local(2020, 3, 14),
		to: DateTime.local(2020, 3, 18),
	},
	packings: {
		commonList: [
			{
				name: 'Item1',
				ready: false,
			},
			{
				name: 'Item2',
				ready: true,
			},
		],
		indivLists: [
			{
				user: '0001',
				list: [
					{
						name: 'Item3',
						ready: true,
					},
					{
						name: 'Item4',
						ready: false,
					},
				],
			},
			{
				user: '0002',
				list: [
					{
						name: 'Item5',
						ready: false,
					},
					{
						name: 'Item6',
						ready: false,
					},
				],
			},
		],
	},
	dayPlans: [
		{
			date: DateTime.local(2020, 3, 14),
			plans: [
				{
					type: 'REST',
					title: 'test',
					time: {
						at: DateTime.local(2020, 3, 14, 9, 30),
					},
					category: 'wake',
					atPlace: 'test',
				},
				{
					type: 'MEAL',
					title: 'meal test',
					time: {
						at: DateTime.local(2020, 3, 14, 10, 30),
						end: DateTime.local(2020, 3, 14, 11, 30),
					},
					category: 'bar',
					cost: {
						value: 2000,
						currency: 'KRW',
					},
					note: [
						'타투컨벤션장 입장조건: 샌들, 반바지 금지타투컨벤션장 입장조건: 샌들, 반바지 금지',
						'second',
					],
				},
				{
					type: 'TRAVEL',
					title: 'test',
					time: {
						at: DateTime.local(2020, 3, 14, 12, 0),
						end: DateTime.local(2020, 3, 14, 13, 30),
					},
					mean: 'walk',
					move: {
						from: 'here',
						to: 'there',
					},
				},
				{
					type: 'ACTIVITY',
					title: 'activity test',
					time: {
						at: DateTime.local(2020, 3, 14, 13, 40),
					},
					atPlace: 'what',
				},
				{
					type: 'SIGHTSEEING',
					title: 'meal test',
					time: {
						at: DateTime.local(2020, 3, 14, 17, 30),
						end: DateTime.local(2020, 3, 14, 19, 30),
					},
					note: [
						'타투컨벤션장 입장조건: 샌들, 반바지 금지타투컨벤션장 입장조건: 샌들, 반바지 금지',
					],
				},
			],
		},
		{
			date: DateTime.local(2020, 3, 15),
			plans: [],
		},
		{
			date: DateTime.local(2020, 3, 16),
			plans: [],
		},
		{
			date: DateTime.local(2020, 3, 17),
			plans: [],
		},
		{
			date: DateTime.local(2020, 3, 18),
			plans: [],
		},
	],
};

interface ITicketViewScreenProps {
	ticket: Ticket;
}

/**
 * TicketViewScreen
 */
export default class TicketViewScreen extends React.Component<
	IVSPScreenProps<ITicketViewScreenProps>
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					transparent={true}
					headerLeft={
						<VSPHeaderButton
							icon='leftarrow'
							theme='white'
							onPress={() => {
								navigation.pop();
							}}
						/>
					}
					headerRight={
						<VSPHeaderDropdown
							icon='more'
							theme='white'
							contents={[
								{ title: '기록 생성' },
								{ icon: 'trash', title: '삭제' },
							]}
						/>
					}
				/>
			),
		};
	};

	public render() {
		const style = StyleSheet.create({
			headerView: {
				height: HORIZONTAL_UNIT(40),
				backgroundColor: DEV_TICKET.themeColor,
			},

			bottomView: {
				position: 'absolute',
				bottom: 0,
				width: '100%',
			},

			bodyCapView: {
				position: 'absolute',
				bottom: 0,
				height: HORIZONTAL_UNIT(5),
				width: '100%',
				backgroundColor: THEME_COLORS.white,
			},

			bodyView: {
				flex: 1,
				backgroundColor: THEME_COLORS.white,
				paddingTop: HORIZONTAL_UNIT(3),
			},
		});

		return (
			<VSPContainer>
				<View style={style.headerView}>
					<View style={style.bottomView}>
						<ParticipantsList
							participants={DEV_TICKET.participants}
						/>
						<View style={style.bodyCapView} />
					</View>
				</View>
				<View style={style.bodyView}>
					<VSPText
						fontSize={THEME_HEADER_FONTSIZE}
						color={DEV_TICKET.themeColor}
						marginX={VSP_EDGE_PADDING}
						marginBottom={HORIZONTAL_UNIT(2)}
					>
						{DEV_TICKET.title}
					</VSPText>
					<ScrollView>
						<PackingList
							packings={DEV_TICKET.packings}
							ticketColor={DEV_TICKET.themeColor}
						/>
						<PlanTimeline
							dayPlans={DEV_TICKET.dayPlans}
							ticketColor={DEV_TICKET.themeColor}
						/>
					</ScrollView>
				</View>
			</VSPContainer>
		);
	}
}
