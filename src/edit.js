/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { PanelBody, TextControl } from "@wordpress/components";

/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from "@wordpress/block-editor";

import { __ } from "@wordpress/i18n";

/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ clientId, attributes, setAttributes }) {
	const blockProps = useBlockProps();

	setAttributes({ accordionId: clientId });

	const createClass = (name) => {
		const blockNameBase = "wp-block-cjsb-accordion__";

		return blockNameBase + name;
	};

	const handleClick = () => {
		const button = document.querySelector(
			"#wp-block-cjsb-accordion__button--" + attributes.accordionId
		);
		let buttonState = button.getAttribute("aria-expanded");
		{
			console.log(button);
		}
		if (buttonState == "false") {
			button.setAttribute("aria-expanded", "true");
		} else {
			button.setAttribute("aria-expanded", "false");
		}
	};

	return (
		<>
			<div id={createClass("item--" + attributes.accordionId)} {...blockProps}>
				<button
					id={createClass("button--" + attributes.accordionId)}
					aria-expanded="false"
					class={createClass("button")}
					onClick={handleClick}
				>
					<span class={createClass("title")}>{attributes.title}</span>
					<span class={createClass("icon")} aria-hidden="true"></span>
				</button>
				<div class={createClass("content")}>
					<InnerBlocks />
				</div>
			</div>
			<InspectorControls>
				<PanelBody title={__("Accordion Settings")}>
					<TextControl
						{...blockProps}
						label="Item Title"
						value={attributes.title}
						onChange={(val) => setAttributes({ title: val })}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
