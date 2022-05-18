import classnames from "classnames";
import Icon from "./icon";

/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InnerBlocks, useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { title, textAlignTitle, accordionId } = attributes;

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

	return (
		<div id={createClass("item--" + accordionId)} {...useBlockProps.save()}>
			<button
				id={createClass("button--" + accordionId)}
				aria-expanded="false"
				class={createClass("button") + className}
			>
				<RichText.Content
					tagName="span"
					class={createClass("title")}
					value={title}
				/>
				<span class={createClass("icon")} aria-hidden="true">
					<Icon />
				</span>
			</button>
			<div class={createClass("content")}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
