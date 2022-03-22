import printSvg from '../Components/PrintSvg'

import jsSVG from '../Assets/javascript.svg'
import htmlSVG from '../Assets/html.svg'

const js = printSvg(jsSVG,'jsLogo')
const html = printSvg(htmlSVG,'htmlLogo')

export const skillsList = [
	{
		name: 'JavaScript',
		category: "Language de développemment",
		id: '1js',
		lvl: 'Intermédiaire',
		note: "test de julien à nouveau",
		icon: js
	},
	{
		name: 'HTML',
		category: 'Language de développemment',
		id: '2html',
		lvl: "Maitrisé",
		note: "test",
		icon: html
	}

	
]
