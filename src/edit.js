import classnames from "classnames";
import Icon from "./icon";

/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { PanelBody, TextControl } from "@wordpress/components";

/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	AlignmentControl,
	BlockControls,
	InnerBlocks,
	InspectorControls,
	RichText,
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
	const { title, textAlignTitle, accordionId, placeholder } = attributes;

	const blockProps = useBlockProps();

	setAttributes({ accordionId: clientId });

	const className =
		textAlignTitle !== "none"
			? classnames({
					[` has-text-align-${textAlignTitle}`]: textAlignTitle,
			  })
			: "";

	const createClass = (name) => {
		const blockNameBase = "wp-block-cjsb-accordion__";

		return blockNameBase + name;
	};

	const handleClick = () => {
		const button = document.querySelector(
			"#wp-block-cjsb-accordion__button--" + accordionId
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

	const template = [["core/paragraph", { placeholder: "Accordion Text" }]];

	return (
		<>
			<div id={createClass("item--" + accordionId)} {...blockProps}>
				<button
					id={createClass("button--" + accordionId)}
					aria-expanded="false"
					class={createClass("button") + className}
					onClick={handleClick}
				>
					<BlockControls group="block">
						<AlignmentControl
							value={textAlignTitle}
							onChange={(val) => setAttributes({ textAlignTitle: val })}
						/>
					</BlockControls>
					<RichText
						{...blockProps}
						class={createClass("title")}
						tagName="span"
						value={title}
						allowedFormats={["core/bold", "core/italic"]}
						onChange={(val) => setAttributes({ title: val })}
						textAlign={textAlignTitle}
						placeholder={placeholder || __("Accordion Heading")}
					/>
					<span class={createClass("icon")} aria-hidden="true">
						<Icon />
					</span>
				</button>
				<div class={createClass("content")}>
					<InnerBlocks template={template} />
				</div>
			</div>
			<InspectorControls>
				<PanelBody title={__("Accordion Settings")}>
					{/* <TextControl
						{...blockProps}
						label="Title"
						value={title}
						onChange={(val) => setAttributes({ title: val })}
					/> */}
				</PanelBody>
			</InspectorControls>
		</>
	);
}
