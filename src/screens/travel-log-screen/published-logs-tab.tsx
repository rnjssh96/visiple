import React from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Image,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { TabProps } from 'react-native-scrollable-tab-view';

import { TravelLog } from '../../types/data/travel-log';
import { THEME_HEADER_FONTSIZE, HORIZONTAL_UNIT } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { IVSPScreenProps } from '../../types/props/vsp-screen';

import VSPText from '../../components/vsp-text';

interface IPublishedLogsTabProps {
	/**
	 * Travel logs
	 */
	travelLogs: TravelLog[];
}

/**
 * PublishedLogsTab
 *
 * @property
 * - ```travelLogs```(required): Travel logs
 */
class PublishedLogsTab extends React.Component<
	IVSPScreenProps<TabProps<IPublishedLogsTabProps>>
> {
	private _renderItems() {
		const style = StyleSheet.create({
			container: {
				marginVertical: HORIZONTAL_UNIT(2),
				marginHorizontal: HORIZONTAL_UNIT(3),
				backgroundColor: THEME_COLORS.black,
				borderRadius: HORIZONTAL_UNIT(2),
			},

			imageView: {
				opacity: 0.7,
				width: '100%',
				height: Dimensions.get('window').width * 0.6,
				borderRadius: HORIZONTAL_UNIT(2),
			},

			titleView: {
				position: 'absolute',
				bottom: 0,
				width: '100%',
				padding: HORIZONTAL_UNIT(3),
			},
		});

		return this.props.travelLogs.map((travelLog: TravelLog) => (
			<TouchableOpacity
				key={travelLog.id}
				style={style.container}
				activeOpacity={0.6}
				onPress={() => {
					this.props.navigation.navigate('NewTravelLogScreen');
				}}
			>
				<Image
					style={style.imageView}
					source={require('../../dev-sample-image/landscape_1.jpeg')}
				/>
				<View style={style.titleView}>
					<VSPText
						fontSize={THEME_HEADER_FONTSIZE}
						color={THEME_COLORS.white}
					>
						{travelLog.title}
					</VSPText>
				</View>
			</TouchableOpacity>
		));
	}

	public render() {
		return (
			<ScrollView
				contentContainerStyle={{ paddingVertical: HORIZONTAL_UNIT(2) }}
			>
				{this._renderItems()}
			</ScrollView>
		);
	}
}

export default withNavigation(PublishedLogsTab);
