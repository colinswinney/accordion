/**
 * @see https://developer.wordpress.org/block-editor/how-to-guides/internationalization/
 */
import { __ } from "@wordpress/i18n";

/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType, registerBlockStyle } from "@wordpress/blocks";

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";
import "./editor.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";

/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("cjsb/accordion", {
	/**
	 * Used to construct a preview for the block to be shown in the block inserter.
	 */
	example: {
		attributes: {
			message: "Accordion",
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});

registerBlockStyle("cjsb/accordion", {
	name: "icon-on-left",
	label: __("Icon on Left"),
	isDefault: false,
});

registerBlockStyle("cjsb/accordion", {
	name: "icon-on-right",
	label: __("Icon on Right"),
	isDefault: true,
});
