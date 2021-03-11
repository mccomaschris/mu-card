/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'create-block/mu-card', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'MU Card', 'mu-card' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		"Card block based on Marshall University's card component.",
		'mu-card'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
	 */
	category: 'widgets',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.96 166.04"><defs></defs><path class="cls-1" d="M85.99 117.3v-17H51.41v17c0 7.66-7.06 18.58-14.35 18.58v14.86h63.27v-14.86c-7.05 0-14.34-10.92-14.34-18.58zM51.41 44.05v21.78h68.84L90.32 15.89H37.06v12.59c7.29-.02 14.35 7.64 14.35 15.57zm109.34-28.18l-30 49.94h68.84V44.05c0-7.91 7.06-15.57 14.34-15.57V15.87zM96.92 100.32l28.6 47.09 28.59-47.09H96.92zM199.63 117.3v-17h-34.58v17c0 7.66-7.29 18.58-14.35 18.58v14.86h63.27v-14.86c-7.28 0-14.34-10.92-14.34-18.58z"></path><path class="cls-2" d="M213.95 62.05v-8.6c0-4.33 0-7.73 1.55-9.27 1.38-1.38 4.57-2.08 9.49-2.08h3.76V.05h-76.79l-26.44 43.84L99.07.05H22.28v42.1h3.76c4.92 0 8.11.7 9.5 2.08 1.53 1.54 1.54 4.95 1.54 9.27v8.55H0v42h37.08v3.17c0 5.28 0 10.6-2.76 13.34-1.63 1.64-4.41 2.46-8.28 2.46h-3.76v43h92.88v-6.2l3.72 6.2h13.27s2.69-4.46 3.73-6.2v6.23h92.87v-43h-3.76c-3.86 0-6.65-.82-8.28-2.46-2.74-2.74-2.76-8.06-2.76-13.23v-3.31h37v-42zm33.25 38.27h-37v6.83c0 9-.06 19.66 14.8 19.66v35.48h-85.36v-16l-9.61 16h-9l-9.61-16v16H26.04v-35.48c14.86 0 14.8-10.64 14.8-19.66v-6.83H3.75V65.81h37.08V53.67c0-9.32.06-15.33-14.8-15.33V3.76h70.92l28.57 47.36 28.56-47.36h70.91v34.58c-14.86 0-14.8 6-14.8 15.33v12.14h37z"></path><path class="cls-2" d="M154.11 100.32l-28.59 47.09-28.6-47.09h-5.34l33.94 56.25 33.93-56.25h-5.34zM90.02 113.65v-13.33h-4v17c0 7.66 7.29 18.58 14.34 18.58v14.86h-63.3v-14.88c7.29 0 14.35-10.92 14.35-18.58v-17h-4.15v13.35c0 9.12-5.23 19-14.62 19v22.53h72.11V132.7c-8.95 0-14.73-9.36-14.73-19.05zM47.26 47.44v18.37h4.15V44.05c0-7.91-7.06-15.57-14.35-15.57V15.87h53.26l29.93 49.94h10.5l30-49.94h53.26v12.59c-7.28 0-14.34 7.66-14.34 15.57v21.78h4.08V47.44c0-8.46 5.23-15.09 14.62-15.09v-21.2h-60.2l-32.68 54.41-32.66-54.41H32.64v21.2c9.39 0 14.62 6.63 14.62 15.09zm156.49 66.21v-13.33h-4.15v17c0 7.66 7.06 18.58 14.34 18.58v14.86h-63.19v-14.88c7.06 0 14.35-10.92 14.35-18.58v-17h-4v13.35c0 9.69-5.78 19-14.72 19v22.53h72.1V132.7c-9.47 0-14.73-9.93-14.73-19.05zm-160-17.96h2.87l7.13-16.29v11.16c0 2.56 0 2.92-2.88 3v2.14h11.2v-2c-2.4-.35-3.11-1.3-3.11-3.19V76.75a10.62 10.62 0 01.19-3.15c.2-.4.64-.83 2.92-1.15v-2h-8.16L45.98 88.2l-8.44-17.75h-8v2c2.76.36 2.88.79 2.88 2.09 0 1.66.08 10.89 0 14.52-.12 4-.55 4.26-2.88 4.61v2h9.23v-2c-2.76-.35-3-.87-3-3.51V79.05zm33.8-2.02v2h9.31v-2.12c-1.65 0-2.13-.27-2.72-1.85l-8-21.69h-2.8l-7.69 21.22c-.47 1.3-.9 2.21-2.52 2.44v2h8v-2.12c-1.7-.07-1.86-.31-1.86-1.1a24.6 24.6 0 011.22-4.77h7.26a33.6 33.6 0 011.46 5.25c0 .23 0 .47-1.66.74zm-6-9.18l2.4-7.23 2.57 7.23zm26.5 1.38c.51 0 .91-.08 1.3-.08a52.17 52.17 0 005.72 8.44 5.59 5.59 0 004.34 1.93 16.29 16.29 0 003.63-.55v-2a4.48 4.48 0 01-3.87-1.62 47.19 47.19 0 01-5.4-7.86 9 9 0 003.55-6.93c0-6.63-6.51-7.18-9.66-7.18-2.72 0-7.14.31-9.75.47v2.13c2.61 0 3 .67 3 3.87v13.88c0 1.5-.12 3-3.07 3.27v2h10.61v-2.09c-2.45-.11-2.8-1.33-2.8-2.68v-5zm-2.4-10.15c0-.19.08-1.65.11-2.6a14.17 14.17 0 011.82-.15c2.52 0 4.73 1.42 4.73 5 0 4.15-2 5.05-4.65 5.05h-2zm27.16 17.33c-1.78 0-6.47-.43-6.59-5.8h-2.13v7.19a21.57 21.57 0 008.64 1.93c6.79 0 8.52-4 8.52-6.94a7.37 7.37 0 00-2.33-5.65c-1.93-2-4.53-3-6.82-4.42-1.5-.94-2.64-1.89-2.64-3.63 0-1 .55-2.64 3.78-2.64 3.71 0 4.62 1.74 4.86 5.45h2.25v-8.05c-3-.16-3.05-.71-7.66-.71-5.29 0-8 3.15-8 6.9 0 4.42 3.59 6.51 6.71 8.21a18.59 18.59 0 013.94 2.48 3.14 3.14 0 011 2.49c.06 1.56-.77 3.19-3.53 3.19zm35.24-20.4v-2.09h-10.64v2.09c2.4 0 3 .27 3 5.09v2.91h-10.5v-2.91c0-4.82.59-5.05 3-5.09v-2.09h-10.65v2.09c2.52 0 3 0 3 3.9v11.56c0 4.85-.44 5-3 5.56v2h10.65v-2c-2.36-.39-3-.71-3-2.76v-7.1h10.5v7.1c0 2.05-.64 2.37-3 2.76v2h10.64v-2c-2.56-.55-3-.71-3-5.56V76.55c.01-3.86.49-3.9 3-3.9zm15.46 21.02v2h9.3v-2.12c-1.65 0-2.12-.27-2.71-1.85l-8-21.69h-2.81l-7.69 21.22c-.47 1.3-.9 2.21-2.52 2.44v2h8v-2.12c-1.7-.07-1.86-.31-1.86-1.1a23.94 23.94 0 011.23-4.77h7.3a33.6 33.6 0 011.46 5.25c-.05.23-.05.47-1.7.74zm-6-9.18l2.41-7.23 2.56 7.23zm16.31 9.06v2.14h18.27v-7.3h-1.93c-.83 3.87-2.33 4.34-5.13 4.34-3.08 0-3.27-.63-3.27-2.41V75.81c.08-2.23.27-2.71.8-2.89a11.84 11.84 0 012.32-.39v-2h-11.06v2.13c2.22 0 3 .16 3 6v7.86c0 6.64-.82 7.12-3 7.03zm19.29-20.86c2.2 0 3 .16 3 6v7.86c0 6.58-.83 7.06-3 7v2.14h18.26v-7.3h-1.94c-.83 3.87-2.32 4.34-5.12 4.34-3.08 0-3.28-.63-3.28-2.41V75.81c.07-2.23.26-2.71.79-2.89a12.07 12.07 0 012.33-.39v-2h-11.04zM230.65 156.97h2.79v8.42h1.01v-8.42h2.94v-1.01h-6.74v1.01zm12.13 6.66l-2.42-7.67h-1.62v9.43h1.01v-8.01l2.53 8.01h1.01l2.52-8.01v8.01h1.01v-9.43h-1.62l-2.42 7.67z"></path><path class="cls-3" d="M247.2 100.32V65.81h-37V53.67c0-9.32-.06-15.33 14.8-15.33V3.76h-70.92l-28.56 47.36L96.95 3.76H26.04v34.58c14.86 0 14.8 6 14.8 15.33v12.14H3.75v34.51h37.08v6.83c0 9 .06 19.66-14.8 19.66v35.48h85.36v-16l9.61 16h9l9.61-16v16h85.35v-35.48c-14.86 0-14.8-10.64-14.8-19.66v-6.83zm-214.56-68V11.15h60.19l32.69 54.41 32.68-54.41h60.2v21.2c-9.39 0-14.62 6.63-14.62 15.09v18.37H47.26V47.44c0-8.46-5.23-15.09-14.62-15.09zm151.18 40.34v-2.13h11.09v2a11.84 11.84 0 00-2.32.39c-.53.18-.72.66-.8 2.89v14.51c0 1.78.19 2.41 3.27 2.41 2.8 0 4.3-.47 5.13-4.34h1.93v7.3h-18.3v-2.14c2.18.09 3-.39 3-7v-7.86c0-5.84-.78-5.96-3-6zm-10.12 15h-7.25a23.94 23.94 0 00-1.23 4.77c0 .79.16 1 1.86 1.1v2.14h-8v-2c1.62-.23 2.05-1.14 2.52-2.44l7.68-21.18h2.81l8 21.69c.59 1.58 1.06 1.85 2.71 1.85v2.14h-9.3v-2c1.65-.27 1.65-.51 1.65-.74a33.6 33.6 0 00-1.4-5.31zm-15.65 6v2h-10.64v-2c2.36-.39 3-.71 3-2.76v-7.1h-10.5v7.1c0 2.05.64 2.37 3 2.76v2h-10.65v-2c2.56-.55 3-.71 3-5.56V76.55c0-3.86-.48-3.9-3-3.9v-2.09h10.65v2.09c-2.41 0-3 .27-3 5.09v2.91h10.5v-2.91c0-4.82-.6-5.05-3-5.09v-2.09h10.64v2.09c-2.51 0-3 0-3 3.9v11.56c.01 4.85.44 5.01 3 5.56zm-32.68-6.31a18.59 18.59 0 00-3.94-2.48c-3.12-1.7-6.71-3.79-6.71-8.21 0-3.75 2.68-6.9 8-6.9 4.61 0 4.65.55 7.66.71v8.05h-2.25c-.24-3.71-1.15-5.45-4.86-5.45-3.23 0-3.78 1.66-3.78 2.64 0 1.74 1.14 2.69 2.64 3.63 2.29 1.43 4.89 2.45 6.82 4.42a7.37 7.37 0 012.33 5.65c0 2.95-1.73 6.94-8.52 6.94a21.57 21.57 0 01-8.64-1.93v-7.19h2.13c.12 5.37 4.81 5.8 6.59 5.8 2.76 0 3.59-1.62 3.59-3.19a3.14 3.14 0 00-1.06-2.48zm-26.92 6.2v2.14H87.88v-2c2.95-.31 3.07-1.77 3.07-3.27v-13.9c0-3.2-.39-3.87-3-3.87v-2.13c2.61-.16 7-.47 9.75-.47 3.15 0 9.66.55 9.66 7.18a9 9 0 01-3.55 6.93 47.19 47.19 0 005.4 7.86 4.48 4.48 0 003.87 1.62v2a16.29 16.29 0 01-3.63.55 5.59 5.59 0 01-4.34-1.93 52.17 52.17 0 01-5.72-8.44c-.39 0-.79.08-1.3.08h-2.4v5c-.04 1.32.31 2.54 2.76 2.65zm-20.7-5.87h-7.26a24.6 24.6 0 00-1.22 4.77c0 .79.16 1 1.86 1.1v2.14h-8v-2c1.62-.23 2.05-1.14 2.52-2.44l7.68-21.2h2.8l8 21.69c.59 1.58 1.07 1.85 2.72 1.85v2.14h-9.3v-2c1.66-.27 1.66-.51 1.66-.74a33.6 33.6 0 00-1.46-5.31zm-38.92 6v2H29.6v-2c2.33-.35 2.76-.59 2.88-4.61.08-3.63 0-12.86 0-14.52 0-1.3-.12-1.73-2.88-2.09v-2h8l8.44 17.75 7.93-17.75h8.16v2c-2.28.32-2.72.75-2.92 1.15a10.62 10.62 0 00-.19 3.15v13.73c0 1.89.71 2.84 3.11 3.19v2h-11.2v-2.13c2.84-.07 2.88-.43 2.88-3V79.4l-7.14 16.29h-2.92l-8-16.64v11.16c0 2.59.32 3.11 3.08 3.46zm65.92 61.55H32.64V132.7c9.39 0 14.62-9.93 14.62-19v-13.38h42.76v13.33c0 9.69 5.78 19 14.71 19zm20.79 1.35l-33.93-56.26h67.84zm92.88-23.88v22.53h-72.1V132.7c8.94 0 14.72-9.36 14.72-19v-13.38h42.71v13.33c0 9.12 5.26 19.05 14.65 19.05zm-15.29-37v-2.15c2.16.09 3-.39 3-7v-7.86c0-5.87-.79-6-3-6v-2.13h11.08v2a12.07 12.07 0 00-2.33.39c-.53.18-.72.66-.79 2.89v14.51c0 1.78.2 2.41 3.28 2.41 2.8 0 4.29-.47 5.12-4.34h1.94v7.3z"></path><path class="cls-3" d="M102.31 77.97c0-3.58-2.21-5-4.73-5a14.17 14.17 0 00-1.82.15c0 .95-.11 2.41-.11 2.6v7.33h2c2.69 0 4.66-.93 4.66-5.08zM71.55 84.48h4.98l-2.57-7.22-2.41 7.22zm95.96 0h4.97l-2.57-7.22-2.4 7.22z"></path></svg>,

	attributes: {
		content: {
				type: 'string',
				source: 'html',
				selector: 'div',
		},
	},

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
