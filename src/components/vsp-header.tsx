import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { Header } from 'react-navigation';

import { THEME_COLORS } from '../types/lib/theme';
import { VSP_EDGE_PADDING, HORIZONTAL_UNIT } from '../types/lib/size';

import VSPText from './vsp-text';

export const VSP_PURE_HEADER_HEIGHT = Header.HEIGHT;
export const VSP_HEADER_TITLE_SIZE = VSP_PURE_HEADER_HEIGHT * 0.4;
export const VSP_STATUS_BAR_HEIGHT = StatusBar.currentHeight
	? StatusBar.currentHeight
	: 0;

interface IVSPHeaderProps {
	/**
	 * Title or component to be displayed in the center
	 */
	headerTitle?: string | Element;

	/**
	 * Component to be diplayed in the left
	 */
	headerLeft?: Element;

	/**
	 * Component to be displayed in the right
	 */
	headerRight?: Element;

	/**
	 * Transparent if true (by default ```false```)
	 */
	transparent?: boolean;

	/**
	 * Alter VSPHeader to a normal component removing all the header mechanisms if true
	 */
	asComponent?: boolean;
}

/**
 * VSPHeader
 *
 * @property
 * - ```headerTitle```: Title or component to be displayed in the center
 * - ```headerLeft```: Component to be diplayed in the left
 * - ```headerRight```: Component to be displayed in the right
 * - ```transparent```: Transparent if true (by default ```false```)
 * - ```asComponent```: Alter VSPHeader to a normal component removing all the header mechanisms if true (by default ```false```)
 */
export default class VSPHeader extends React.Component<IVSPHeaderProps> {
	public static defaultProps = {
		transparent: false,
		asComponent: false,
	};

	public render() {
		return (
			<SafeAreaView
				style={{
					backgroundColor: this.props.transparent!
						? THEME_COLORS.none
						: THEME_COLORS.white,
					position: this.props.transparent! ? 'absolute' : 'relative',
					top: 0,
					width: '100%',
				}}
			>
				{!this.props.asComponent && (
					<StatusBar
						backgroundColor={THEME_COLORS.none}
						barStyle='dark-content'
						translucent
					/>
				)}
				<View
					style={{
						height: VSP_PURE_HEADER_HEIGHT,
						flexDirection: 'row',
						alignItems: 'stretch',
						paddingHorizontal: VSP_EDGE_PADDING,
						marginTop: this.props.asComponent
							? 0
							: VSP_STATUS_BAR_HEIGHT,
					}}
				>
					{!!this.props.headerLeft && (
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'flex-start',
								paddingRight: HORIZONTAL_UNIT(2.5),
							}}
						>
							{this.props.headerLeft}
						</View>
					)}
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
						}}
					>
						{typeof this.props.headerTitle === 'string' && (
							<VSPText
								fontSize={VSP_HEADER_TITLE_SIZE}
								color={THEME_COLORS.black}
								fontWeight='bold'
							>
								{this.props.headerTitle}
							</VSPText>
						)}
						{typeof this.props.headerTitle !== 'string' &&
							this.props.headerTitle}
					</View>
					{!!this.props.headerRight && (
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'flex-end',
								paddingLeft: HORIZONTAL_UNIT(2.5),
							}}
						>
							{this.props.headerRight}
						</View>
					)}
				</View>
			</SafeAreaView>
		);
	}
}
