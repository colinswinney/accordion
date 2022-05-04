/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const createClass = (name) => {
		const blockNameBase = "wp-block-cjsb-accordion__";

		return blockNameBase + name;
	};

	return (
		<div
			id={createClass("item--" + attributes.accordionId)}
			{...useBlockProps.save()}
		>
			<button
				id={createClass("button--" + attributes.accordionId)}
				aria-expanded="false"
				class={createClass("button")}
			>
				<span class={createClass("title")}>{attributes.title}</span>
				<span class={createClass("icon")} aria-hidden="true"></span>
			</button>
			<div class={createClass("content")}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
