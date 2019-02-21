import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import {
	VERTICAL_UNIT,
	THEME_MINOR_FONTSIZE,
	HORIZONTAL_UNIT,
} from '../../types/lib/size';

import VSPProfile from '../../components/vsp-profile';
import VSPText from '../../components/vsp-text';
import VSPTextButton from '../../components/vsp-text-button';

export interface InvitedFriendsListProps {
	/**
	 * Theme color of the ticket
	 */
	themeColor: string;
}

/**
 * InvitedFriendsList
 *
 * @property
 * - ```themeColor```(required): Theme color of the ticket
 */
export default class InvitedFriendsList extends React.Component<
	InvitedFriendsListProps
> {
	private _renderItem() {
		return (
			<View
				style={{
					alignItems: 'center',
					padding: HORIZONTAL_UNIT(),
					marginHorizontal: HORIZONTAL_UNIT(),
				}}
			>
				<VSPProfile />
				<VSPText marginY={HORIZONTAL_UNIT()}>김윤회</VSPText>
				<VSPTextButton
					icon='cancel'
					fontSize={THEME_MINOR_FONTSIZE}
					color={this.props.themeColor}
				/>
			</View>
		);
	}

	public render() {
		const style = StyleSheet.create({
			friendsScrollView: {
				flexDirection: 'row',
			},
		});

		return (
			<ScrollView
				contentContainerStyle={style.friendsScrollView}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				{this._renderItem()}
			</ScrollView>
		);
	}
}
