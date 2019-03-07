/**
 * VSPMarginProps
 *
 * - ```margin```: Overall margin; including marginTop, marginBottom, marginRight and marginLeft
 * - ```marginX```: Horizontal margin; including marginRight and marginLeft
 * - ```marginY```: Vertical margin; including marginTop and marginBottom
 * - ```marginTop```: Top margin
 * - ```marginBottom```: Bottom margin
 * - ```marginRight```: Rigth margin
 * - ```marginLeft```: Left margin
 */

export type IVSPMarginProps<T = {}> = T & {
	/**
	 * Overall margin; including marginTop, marginBottom, marginRight and marginLeft
	 */
	margin?: number;

	/**
	 * Horizontal margin; including marginRight and marginLeft
	 */
	marginX?: number;

	/**
	 * Vertical margin; including marginTop and marginBottom
	 */
	marginY?: number;

	/**
	 * Top margin
	 */
	marginTop?: number;

	/**
	 * Bottom margin
	 */
	marginBottom?: number;

	/**
	 * Rigth margin
	 */
	marginRight?: number;

	/**
	 * Left margin
	 */
	marginLeft?: number;
};

interface IMarginStyleProps {
	marginTop?: number;
	marginBottom?: number;
	marginRight?: number;
	marginLeft?: number;
}

export const decodeVSPMarginProps = (
	props: IVSPMarginProps,
): IMarginStyleProps => ({
	marginTop: props.marginTop
		? props.marginTop
		: props.marginY
		? props.marginY
		: props.margin
		? props.margin
		: undefined,

	marginBottom: props.marginBottom
		? props.marginBottom
		: props.marginY
		? props.marginY
		: props.margin
		? props.margin
		: undefined,

	marginRight: props.marginRight
		? props.marginRight
		: props.marginX
		? props.marginX
		: props.margin
		? props.margin
		: undefined,

	marginLeft: props.marginLeft
		? props.marginLeft
		: props.marginX
		? props.marginX
		: props.margin
		? props.margin
		: undefined,
});
