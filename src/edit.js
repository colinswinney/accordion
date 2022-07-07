import classnames from "classnames";
import Icon from "./icon";

/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { 
	PanelBody,
	PanelRow,
	CheckboxControl
} from "@wordpress/components";

/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import {
	AlignmentControl,
	BlockControls,
	InnerBlocks,
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object}   props
 * @param {Object}   props.attributes
 * @param {Function} props.setAttributes
 *
 * @return {WPElement}
 */
export default function Edit({ clientId, attributes, setAttributes }) {
	const { title, textAlignTitle, ariaExpanded, accordionId, placeholder } = attributes;
	const template = [["core/paragraph", { placeholder: "Accordion Text" }]];
	const blockProps = useBlockProps();

	setAttributes({ accordionId: clientId.substring(0, 8) });

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

	const handleAriaExpanded = () => {
		ariaExpanded ? setAttributes({ ariaExpanded: false }) : setAttributes({ ariaExpanded: true });
	};

	return (
		<>
			<div id={createClass("item--" + accordionId)} {...blockProps}>
				<button
					id={createClass("button--" + accordionId)}
					aria-expanded={ariaExpanded}
					className={createClass("button") + className}
					onClick={handleAriaExpanded}
				>
					<BlockControls group="block">
						<AlignmentControl
							value={textAlignTitle}
							onChange={(val) => setAttributes({ textAlignTitle: val })}
						/>
					</BlockControls>
					<RichText
						className={createClass("title")}
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
					<PanelRow>
						<CheckboxControl
							label={__("Open by default?")}
							checked={ ariaExpanded }
							onChange={handleAriaExpanded}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
