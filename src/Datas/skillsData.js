import printSvg from '../Components/PrintSvg'

import jsSVG from '../Assets/javascript.svg'
import htmlSVG from '../Assets/html.svg'
import cssSVG from '../Assets/css.svg'
import phpSVG from '../Assets/php.svg'
import pythonSVG from '../Assets/python.svg'
import CSVG from '../Assets/c.svg'
import bashSVG from '../Assets/bash.svg'
import powShellSVG from '../Assets/powershell.svg'
import reactSVG from '../Assets/react.svg'
import symfonySVG from '../Assets/symfony.svg'
import nodeSVG from '../Assets/node.svg'

const js = printSvg(jsSVG,'jsLogo')
const html = printSvg(htmlSVG,'htmlLogo')
const css = printSvg(cssSVG,'cssLogo')
const php = printSvg(phpSVG,'phpLogo')
const python = printSvg(pythonSVG,'pythonLogo')
const c = printSvg(CSVG,'CLogo')
const bash = printSvg(bashSVG,'bashLogo')
const powShell = printSvg(powShellSVG,'PowerShellLogo')
const react = printSvg(reactSVG,'ReactLogo')
const symfony = printSvg(symfonySVG,'SymfonyLogo')
const node = printSvg(nodeSVG,'NodeLogo')


export const skillsList = [
	{
		name: 'JavaScript',
		category: "Language de developpement Web",
		id: '1js',
		lvl: 'Intermédiaire',
		note: "note",
		icon: js
	},
	{
		name: 'HTML',
		category: 'Language de developpement Web',
		id: '2html',
		lvl: "Avancé",
		note: "test",
		icon: html
	},
    {
		name: 'CSS',
		category: "Language de développemment Web",
		id: '3css',
		lvl: 'Intermédiaire',
		note: "note",
		icon: css
	},
	{
		name: 'PHP',
		category: 'Language de développemment Web',
		id: '4php',
		lvl: "Intermédiaire",
		note: "note",
		icon: php
	},
    {
		name: 'Python',
		category: "Language de programmation",
		id: '5py',
		lvl: 'Intermédiaire',
		note: "note",
		icon: python
	},
	{
		name: "C / C++",
		category: 'Language de programmation',
		id: '6c',
		lvl: "Confirmé",
		note: "note",
		icon: c
	},
    {
		name: 'Bash / GNU Shell',
		category: "Interpréteur de commandes",
		id: '7ba',
		lvl: 'Débutant',
		note: "Interpréteur de commandes Linux",
		icon: bash
	},
	{
		name: "PowerShell",
		category: 'Interpréteur de commandes',
		id: '8ps',
		lvl: "En apprentissage",
		note: "Interpréteur de commandes / Scripts",
		icon: powShell
	},
    {
		name: 'Symfony ',
		category: "Framework",
		id: '9sy',
		lvl: 'Débutant',
		note: "Framework PHP",
		icon: symfony
	},
	{
		name: "React.js",
		category: 'Framework',
		id: '10rj',
		lvl: "Intermédiaire",
		note: "Framework JavaScript",
		icon: react
	},
    {
		name: "Node.js",
		category: 'Framework',
		id: '11nj',
		lvl: "En apprentissage",
		note: "Framework JavaScript fullstack",
		icon: node
	},
	
]
