import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ThemeColorType, RawColorType, THEME_COLORS, THEME_MINOR_FONTSIZE } from '../types/config/theme';
import { decodeVSPMarginProps, VSPMarginProps } from '../types/props/vsp-margin';

import VSPRoundIconButton from './vsp-round-icon-button';

interface VSPExpandableProps extends VSPMarginProps {
    /**
     * Header component of the expandable
     */
    header: React.ReactElement<any>

    /**
     * Body of the expandable
     */
    body: React.ReactElement<any>

    /**
     * Theme color of the toggle button (by default ```ocean-blue```)
     */
    theme?: ThemeColorType;

    /**
     * Raw color of the toggle button
     */
    color?: RawColorType;
}

/**
 * VSPExpandable
 * 
 * @property
 * - ```header```(required): Header component of the expandable
 * - ```body```(required): Body of the expandable
 * - ```theme```: Theme color of the toggle button (by default ```ocean-blue```)
 * - ```color```: Raw color of the toggle button
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */
export default class VSPExpandable extends React.Component<VSPExpandableProps> {
    public static defaultProps = {
        theme: 'ocean-blue',
    };

    state = {
        expanded: false,
    }

    _toggle_expand = () => {
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        let style = StyleSheet.create({
            container: {
                ...decodeVSPMarginProps(this.props),
            },

            headerView: {
                flexDirection: 'row',
                alignItems: 'center',
            },

            header: {
                flex: 1,
            },

            body: {

            },
        });

        return (
            <View style={style.container}>
                <View style={style.headerView}>
                    <View style={style.header}>
                        {this.props.header}
                    </View>
                    <VSPRoundIconButton
                        outline={this.state.expanded}
                        icon={this.state.expanded ? 'down-arrow' : 'plus'}
                        fontSize={THEME_MINOR_FONTSIZE}
                        onPress={this._toggle_expand}
                        color={this.props.color ?
                            this.props.color : THEME_COLORS[this.props.theme!]}
                    />
                </View>
                <View style={style.body}>
                    {this.state.expanded && this.props.body}
                </View>
            </View>
        );
    }
}