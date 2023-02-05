import fs from 'fs'

/**
 * a plugin with a sample template
 */
export const TEMPLATES = {
	sampleTemplate: { type: 'handlebars', contents: () => fs.readFileSync(`${__dirname}/SampleTemplate.handlebars`).toString() },
}
