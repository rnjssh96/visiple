import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../types/lib/size';
import { IVSPScreenProps } from '../types/props/vsp-screen';
import { THEME_COLORS } from '../types/lib/theme';

import VSPContainer from '../components/vsp-container';
import VSPTitleLogo from '../components/vsp-titlelogo';
import VSPText from '../components/vsp-text';
import VSPCheckbox from '../components/vsp-checkbox';

export default class RegisterScreen extends React.Component<IVSPScreenProps> {
	public render() {
		const style = StyleSheet.create({
			headerView: {
				alignItems: 'center',
				height: HORIZONTAL_UNIT(14),
				marginBottom: HORIZONTAL_UNIT(2),
			},

			welcomeText: {
				alignSelf: 'center',
				fontWeight: 'bold',
				color: THEME_COLORS.cottoncandyBlue,
			},

			groupView: {
				marginVertical: HORIZONTAL_UNIT(4),
			},
		});

		return (
			<VSPContainer wrapSafeAreaView justifyContent='space-between'>
				<View>
					<View style={style.headerView}>
						<VSPTitleLogo fillDirection='Y' />
					</View>
					<VSPText style={style.welcomeText}>
						Visiple 신규 가입을 환영합니다!
					</VSPText>
				</View>
				<View style={style.groupView}>
					<VSPText fontWeight='bold'>회원정보</VSPText>
					<Input
						placeholder='이름(실명)'
						textContentType='name'
						containerStyle={{ marginTop: HORIZONTAL_UNIT(4) }}
					/>
					<Input
						placeholder='본인 이메일 주소 입력'
						textContentType='emailAddress'
						containerStyle={{ marginTop: HORIZONTAL_UNIT(4) }}
					/>
					<Input
						placeholder='비밀번호(알파벳 대소문자, 숫자 포함한 8-20 글자)'
						textContentType='password'
						containerStyle={{ marginTop: HORIZONTAL_UNIT(4) }}
					/>
					<Input
						placeholder='비밀번호 확인'
						textContentType='password'
						containerStyle={{ marginTop: HORIZONTAL_UNIT(4) }}
					/>
				</View>
				<View style={style.groupView}>
					<VSPText fontWeight='bold'>이용약관</VSPText>
					<VSPCheckbox
						size={HORIZONTAL_UNIT(5)}
						color={THEME_COLORS.oceanBlue}
						marginTop={HORIZONTAL_UNIT(3)}
					>
						<VSPText>전체동의</VSPText>
					</VSPCheckbox>
					<VSPCheckbox
						size={HORIZONTAL_UNIT(5)}
						color={THEME_COLORS.oceanBlue}
						marginLeft={HORIZONTAL_UNIT(8)}
						marginTop={HORIZONTAL_UNIT(3)}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Button
								title='이용약관'
								type='clear'
								titleStyle={{ color: THEME_COLORS.brown }}
								onPress={() => {}}
							/>
							<VSPText>에 동의합니다.</VSPText>
						</View>
					</VSPCheckbox>
					<VSPCheckbox
						size={HORIZONTAL_UNIT(5)}
						color={THEME_COLORS.oceanBlue}
						marginLeft={HORIZONTAL_UNIT(8)}
						marginTop={HORIZONTAL_UNIT(3)}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Button
								title='개인정보 취급방침'
								type='clear'
								titleStyle={{ color: THEME_COLORS.brown }}
								onPress={() => {}}
							/>
							<VSPText>에 동의합니다.</VSPText>
						</View>
					</VSPCheckbox>
				</View>
				<Button
					title='완료'
					titleStyle={{ fontSize: THEME_HEADER_FONTSIZE }}
					containerStyle={{
						marginTop: HORIZONTAL_UNIT(4),
					}}
					buttonStyle={{
						backgroundColor: THEME_COLORS.oceanBlue,
					}}
					onPress={() => {
						this.props.navigation.popToTop();
					}}
				/>
			</VSPContainer>
		);
	}
}
